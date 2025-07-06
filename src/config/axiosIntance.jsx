import axios from "axios";
import configObj from "./config";
import { Cookies } from "react-cookie";

const cook = new Cookies();
const url = `http://${configObj.base}`;

const axiosInstance = axios.create({
	baseURL: url,
	headers: {
		"Content-Type": "application/json",
	},
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
	(request) => {
		const token = cook.get("token");
		if (token) {
			request.headers["Authorization"] = `Bearer ${token}`;
		}
		return request;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Refresh token cookie vasitəsilə avtomatik gedir, body boşdur
        const { data } = await axios.post(`${url}auth/refresh-token`, null, {
          withCredentials: true,
        });
        cook.set("token", data.token);
        cook.set("refreshToken", data.refresh);

        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        originalRequest.headers["Authorization"] = `Bearer ${data.token}`;

        return axiosInstance(originalRequest);
      } catch (err) {
        cook.remove("token");
        cook.remove("refresh");
        cook.remove("user");
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);


export { axiosInstance };
