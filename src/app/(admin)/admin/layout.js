"use client";
import './../../globals.scss'
import AdminHeader from "@/app/components/admin/Admin-header";

export default function AdminLayout({ children }) {
	
	return (
		<html lang="en">
			<body cz-shortcut-listen="false">
				<AdminHeader />
				{children}
			</body>
		</html>
	);
}
