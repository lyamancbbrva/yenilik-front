'use client'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

function RegisterPage() {
	const [passType, setPassType] = useState("password");
	const [confirmPassType, setConfirmPassType] = useState("password");
	const [data, setData] = useState({});
	// const navigate = useNavigate();

	const validatePhone = (value) => {
		const phoneRegex =
			/(?:0|994)(?:12|51|50|55|70|77)[^\w]{0,2}[2-9][0-9]{2}[^\w]{0,2}[0-9]{2}[^\w]{0,2}[0-9]{2}/;
		return phoneRegex.test(value);
	};
	const validateEmail = (value) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(value);
	};

	async function createNewuser() {
		if (
			!data.email ||
			!data.phone_number ||
			!data.password ||
			!data.confirm_password
		) {
			return toast.error("Bütün sahələri doldurun!");
		}
		if (data.password !== data.confirm_password) {
			console.log("salam");
			return toast.error("Şifrələr uyğun deyil!");
		}
		if (!validatePhone(data.phone_number)) {
			toast.error("Nömrə düzgün formatda deyil.");
		}
		if (!validateEmail(data.email)) {
			toast.error("Email düzgün formatda deyil.");
		}
		const resp = await fetch('http://localhost:3000/api/v1/auth/register', {
			method: 'POST'
		})
	}
	return (
		<>
			<ToastContainer
				position="hrefp-center"
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
						<Link href={"/"}>
							<Image width={130} height={80} src='/imgs/logo.png' alt="Yenilik logo" />
						</Link>
					</div>
					<h1>Xoş gəlmisiniz!</h1>
					<form onSubmit={(e) => e.preventDefault()}>
						<div>
							<span>E-mail</span>
							<input
								type="text"
								onInput={(e) => {
									setData((prev) => ({
										...prev,
										email: e.target.value,
									}));
								}}
								placeholder="E-mail"
							/>
						</div>
						<div>
							<span>Telefon</span>
							<input
								onInput={(e) => {
									setData((prev) => ({
										...prev,
										phone_number: e.target.value,
									}));
								}}
								type="number"
								min={0}
								placeholder="+994-XX-XXX-XX-XX"
							/>
						</div>
						<div className="eye-position">
							<span>Şifrə</span>
							<input
								type={passType}
								onInput={(e) => {
									setData((prev) => ({
										...prev,
										password: e.target.value,
									}));
								}}
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
						<div className="eye-position">
							<span>Təkrar şifrə</span>
							<input
								type={confirmPassType}
								placeholder="Şifrə"
								onInput={(e) => {
									setData((prev) => ({
										...prev,
										confirm_password: e.target.value,
									}));
								}}
							/>
							{confirmPassType == "text" ? (
								<IoEyeOutline
									className="eye"
									onClick={() =>
										setConfirmPassType("password")
									}
								/>
							) : (
								<IoEyeOffOutline
									className="eye"
									onClick={() => setConfirmPassType("text")}
								/>
							)}
						</div>
						<div className="forget-pass">
							<Link href="/sifremi-unutdum">
								Şifrəmi unutmuşam 👉👈
							</Link>
						</div>
						<buthrefn onClick={() => createNewuser()}>
							Qeydiyyatdan keç
						</buthrefn>
					</form>
					<p>
						Artıq hesabın var? <Link href="/giris">Giriş et</Link>
					</p>
				</div>
			</main>
		</>
	);
}

export default RegisterPage;
