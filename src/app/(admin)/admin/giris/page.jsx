"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

function Page() {

	const [passType, setPassType] = useState("password");

	return (
		<main>
			<div className="login-register">
				<div id="logo">
					<Link href={"/"}>
						<Image
							width={130}  height={80}
							src="/imgs/logo.png"
							
							alt="Yenilik logo"
						/>
					</Link>
				</div>
				<h1>Xoş gəlmisiniz!</h1>
				<form onSubmit={(e) => e.preventDefault()}>
					<div>
						<span>E-mail</span>
						<input type="email" placeholder="E-mail" required />
					</div>
					<div className="eye-position">
						<span>Şifrə</span>
						<input type={passType} placeholder="Şifrə" required />
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
					<button type="submit">Giriş et</button>
				</form>
				<p>
					Hesabınız yoxdur?{" "}
					<Link href="/qeydiyyat">Qeydiyyatdan keç</Link>
				</p>
			</div>
		</main>
	);
}

export default Page;
