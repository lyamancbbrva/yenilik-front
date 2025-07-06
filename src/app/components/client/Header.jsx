import { CiUser } from "react-icons/ci";
import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";
import BasketIcon from "./BasketIcon";
import { allcategories } from "@/app/api/api";
import { MdKeyboardArrowRight } from "react-icons/md";
import BarIcon from "./Sidebar";


async function Header() {
	const data = await allcategories();

	return (
		<header>
			<div className="header">
				<nav className="container">
					<div className="navbar">
						<Logo />
						<div id="header-icons">
							<Link href={"/auth/giris"}>
								<CiUser />
							</Link>
							<Link href={"/sebet"} className="count-icon">
								<BasketIcon />
							</Link>
							<Search />
							<BarIcon/>
						</div>
					</div>
				</nav>
			</div>
			<div className="cat-flex">
				{data?.data.length > 0 ? (
					<ul className="cat-list">
						{data.data.map((item, i) => (
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
					<div className="cat-not-found">Kateqoriya tapılmadı</div>
				)}
			</div>
		</header>
	);
}

export default Header;
