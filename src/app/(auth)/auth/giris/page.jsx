"use client";
import Logo from "@/app/components/client/Logo";
import Link from "next/link";
import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { login } from "@/app/api/api";
import { Cookies } from "react-cookie";

function Page() {
	const cook = new Cookies();
	const [passType, setPassType] = useState("password");
	const [data, setData] = useState({});
	const [response, setResponse] = useState()

	const validateEmail = (value) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(value);
	};

	function loginUser() {

		if (!data.email || !data.password) {
			return toast.error("Bütün sahələri doldurun!");
		}
		if (!validateEmail(data.email)) {
			return toast.error("Email düzgün formatda deyil.");
		}
		if (data.password.length < 6) {
			return toast.error("Şifrə ən az 6 simvol olmalıdır!")
		}

		try {
			login(data).then((resp) => setResponse(resp))
			if (response?.response?.status == 401) {
				return toast.error('E-mail və ya şifrə yanlışdır')
			}
			if (response) {
				 cook.set("token", response.token);
				 cook.set("refreshToken", response.refresh_token);
				toast.success("Giriş olundu");
				// window.location.href = "/";
			}
		} catch (error) {
			return toast.error(error);
		}
	}

	return (
		<>
			<ToastContainer
				position="top-center"
				neweshrefnhrefp={false}
				auhrefClose={2000}
				closeOnClick
				draggable
				pauseOnHover
				theme="light"
			/>
			<main>
				<div className="login-register">
					<div id="logo">
						<Logo />
					</div>
					<h1>Xoş gəlmisiniz!</h1>
					<form onSubmit={(e) => e.preventDefault()}>
						<div>
							<span>E-mail</span>
							<input
								onInput={(e) =>
									setData((prev) => ({
										...prev,
										email: e.target.value,
									}))
								}
								type="text"
								placeholder="E-mail"
							/>
						</div>
						<div className="eye-position">
							<span>Şifrə</span>
							<input
								onInput={(e) =>
									setData((prev) => ({
										...prev,
										password: e.target.value,
									}))
								}
								type={passType}
								placeholder="Şifrə"
								
							/>
							{passType == "text" ? (
								<IoEyeOutline
									className="eye"
									onClick={() => setPassType("password")}
								/>
							) : (
								<IoEyeOffOutline
									className="eye"
									onClick={() => setPassType("text")}
								/>
							)}
						</div>
						<div className="forget-pass">
							<Link href="/auth/sifremi-yenile">
								Şifrəmi unutmuşam 👉👈
							</Link>
						</div>
						<button onClick={() => loginUser()} type="submit">
							Giriş et
						</button>
					</form>
					<p>
						Hesabınız yoxdur?
						<Link href="/auth/qeydiyyat">Qeydiyyatdan keç</Link>
					</p>
				</div>
			</main>
		</>
	);
}

export default Page;
