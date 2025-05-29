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
			toast.error("Email düzgün formatda deyil.");
		}

		try {
			console.log('salam')
			login(data).then((resp) => setResponse(resp))

			if (response?.message == 'OK') {
				 cook.set("token", response.token);
				toast.success("Giriş olundu");
				// window.location.href = "/";
			}
			else{
				toast.error('Email və ya şifrə yanlışdır')
			}
			console.log(response)
		} catch (error) {
			console.log(error)
			return error;
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
								type="email"
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
								required
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
							<Link href="/sifremi-unutdum">
								Şifrəmi unutmuşam 👉👈
							</Link>
						</div>
						<button onClick={() => loginUser()} type="submit">
							Giriş et
						</button>
					</form>
					<p>
						Hesabınız yoxdur?{" "}
						<Link href="/qeydiyyat">Qeydiyyatdan keç</Link>
					</p>
				</div>
			</main>
		</>
	);
}

export default Page;
