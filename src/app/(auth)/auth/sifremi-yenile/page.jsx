import Logo from "@/app/components/client/Logo";
import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

function page() {
	return (
		<>
			<main>
				<div className="login-register">
					<div id="logo">
						<Logo />
					</div>
					<form>
						<div className="eye-position">
							<span>Şifrə</span>
							<input								
								type="password"
								placeholder="Şifrə"
								
							/>
							{"passType" == "text" ? (
								<IoEyeOutline
									className="eye"
									
								/>
							) : (
								<IoEyeOffOutline
									className="eye"
									
								/>
							)}
						</div>
						<div className="eye-position">
							<span>Təkrar Şifrə</span>
							<input								
								type="password"
								placeholder="Təkrar şifrə"
								
							/>
							{"passType" == "text" ? (
								<IoEyeOutline
									className="eye"
									
								/>
							) : (
								<IoEyeOffOutline
									className="eye"
									
								/>
							)}
						</div>
						<button  type="submit">
							Şifrəni yenilə
						</button>
					</form>
				</div>
			</main>
		</>
	);
}

export default page;
