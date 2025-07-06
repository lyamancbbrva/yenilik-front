import "./globals.scss";
import "swiper/css";

export const metadata = {
	title: "Yenilik market",
	description: "Yenilik market",
};

export default function  RootLayout({ children}) {

	return (
		<html lang="en">
			<body cz-shortcut-listen="false">
				{children}
			</body>
		</html>
	);
}