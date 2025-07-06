"use client";
import { allcategories } from "@/app/api/api";
import React, { useEffect, useState } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";

function BarIcon() {
	const [data, setData] = useState([]);
	useEffect(() => {
		allcategories().then((res) => {
			setData(res);
		});
	}, []);
	function toggleSidebar(arg) {
		console.log(data);
		const sidebar = document.querySelector(".sidebar");
		const main = document.querySelector("main");
        const header = document.querySelector("header");
		const footer = document.querySelector("footer");
		console.log(sidebar);
		if (arg) {
            sidebar.classList.add("active");
            main.classList.add("hidden");
            footer.classList.add("hidden");
            header.classList.add("hidden");
        }else{
            sidebar.classList.remove("active");
            main.classList.remove("hidden");
            footer.classList.remove("hidden");
        }
	}
	return (
		<>
			<div onClick={() => toggleSidebar(true)}>
				<HiBars3CenterLeft />
			</div>
			<div className="sidebar">
				<HiOutlineXMark onClick={() => toggleSidebar(false)} />
				<div className="cat-flex">
					{data?.data?.length > 0 ? (
						<ul className="cat-list">
							{data?.data?.map((item, i) => (
								<li key={i} className="cat-list-item">
									<h5>{item.name}</h5>
									<MdKeyboardArrowRight />
									{item.subcategories &&
										item.subcategories.length > 0 && (
											<ul className="subcat-list">
												{item.subcategories.map(
													(sub, j) => (
														<li
															key={j}
															className="subcat-list-item"
														>
															<Link
																href={`/kateqoriya`}
															>
																{sub.name}
															</Link>
														</li>
													)
												)}
											</ul>
										)}
								</li>
							))}
						</ul>
					) : (
						<div className="cat-not-found">
							Kateqoriya tapılmadı
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default BarIcon;
