"use client";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/app/components/client/Logo";
import { register } from "@/app/api/api";

function RegisterPage() {
	const [passType, setPassType] = useState("password");
	const [confirmPassType, setConfirmPassType] = useState("password");
	const [obj, setObj] = useState();

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
			!obj.email ||
			!obj.phone_number ||
			!obj.password ||
			!obj.confirm_password
		) {
			return toast.error("Bütün sahələri doldurun!");
		}
		if (obj.password !== obj.confirm_password) {
			console.log("salam");
			return toast.error("Şifrələr uyğun deyil!");
		}
		if (!validatePhone(obj.phone_number)) {
			toast.error("Nömrə düzgün formatda deyil.");
		}
		if (!validateEmail(obj.email)) {
			toast.error("Email düzgün formatda deyil.");
		}
		if (obj.password.length < 6) {
			return toast.error("Şifrə ən az 6 simvol olmalıdır!");
		}
		try {
			const resp = await register(obj);
			if (resp.status === 201) {
				toast.success("Qeydiyyat uğurla tamamlandı");
				// window.location.href = "/";
			}
			if (resp.status === 409) {
				toast.error("İstifadəçi artıq mövcuddur.");
				return;
			} 
			else{
				return toast.error("Serverdə xəta baş verdi, yenidən yoxlayın");
			}
		} catch (error) {
			toast.error("Xəta baş verdi");
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
								type="text"
								onInput={(e) => {
									setObj((prev) => ({
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
									setObj((prev) => ({
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
									setObj((prev) => ({
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
									setObj((prev) => ({
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
							<Link href="/auth/sifremi-yenile">
								Şifrəmi unutmuşam 👉👈
							</Link>
						</div>
						<button onClick={() => createNewuser()}>
							Qeydiyyatdan keç
						</button>
					</form>
					<p>
						Artıq hesabın var? <Link href="/auth/giris">Giriş et</Link>
					</p>
				</div>
			</main>
		</>
	);
}

export default RegisterPage;
