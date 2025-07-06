"use client";
import { usePathname } from "next/navigation";
import "./../../globals.scss";
import AdminHeader from "@/app/components/admin/Admin-header";
import { useEffect, useState } from "react";
import { verifyToken } from "@/app/api/api";
import { toast, ToastContainer } from "react-toastify";

export default function AdminLayout({ children }) {
	const pathname = usePathname();
	const [authRole, setAuthRole] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkAuth = async () => {
			if (pathname.startsWith("/admin")) {
				try {
					const resp = await verifyToken();
					setAuthRole(resp.status);
				} catch (err) {
					setAuthRole("false");
				} finally {
					setLoading(false);
				}
			} else {
				setLoading(false);
			}
		};

		checkAuth();
	}, [pathname]);

	useEffect(() => {
	if (pathname.startsWith("/admin") && authRole === 401) {
	return	window.location.href = "/auth/giris";
	}
	console.log(authRole)
	if (pathname.startsWith("/admin") && authRole === 403) {
	return	window.location.href = "/auth/giris";
	}
}, [authRole, pathname]);

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
					{pathname.startsWith("/admin") && <AdminHeader />}
					{children}
		</>
	);
}
