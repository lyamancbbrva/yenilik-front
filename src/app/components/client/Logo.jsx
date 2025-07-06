import React from "react";
import Link from 'next/link';
import Image from "next/image";

function Logo() {
	return (
		<Link id="logo" href={"/"}>
			<Image
				width={120}
				height={50}
				priority
				src="/imgs/logo.png"
				alt="Yenilik logo"
			/>
		</Link>
	);
}

export default Logo;
