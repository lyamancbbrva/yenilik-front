"use client";
import { HiBars2 } from "react-icons/hi2";
import { toggleSidebar } from "./Header";

function BarIcon() {
	return <HiBars2 id="bars" onClick={() => toggleSidebar()} />;
}

export default BarIcon;
