
import Image from "next/image";
import React from "react";
import { Cookies } from "react-cookie";
import { IoTrashOutline } from "react-icons/io5";

function Page() {
	const cook = new Cookies();
	const productList = cook.get("basket");
	console.log(productList);
	

	function changeAmount(arg) {
		
	}

	return (
		<main className="basket">
			<h1>Səbət</h1>
			{/* {productList.length == 0 ? (
				<div className="empty-basket">
					<h3>Səbətdə məhsul yoxdur</h3>
					<Image
						width={300}
						height={320}
						src="/imgs/basket.png"
						alt="yenilik sebet logo"
					/>
				</div>
			) : (
				<table>
					<thead>
						<tr>
							<th>Məhsulun şəkli</th>
							<th className="desktop-col">Məhsulun adı</th>
							<th>Məhsulun qiyməti</th>
							<th>Məhsulun miqdarı</th>
							<th>Cəm</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<Image
									width={100}
									height={50}
									src="/imgs/logo.png"
									alt="Product image"
								/>
								<h5>salam men almayam</h5>
							</td>
							<td className="desktop-col">Product Name</td>
							<td>15.90 AZN</td>
							<td className="amount-col">
								{productAmount == "1" ? (
									<IoTrashOutline />
								) : (
									<button
										className="amount-basket"
										onClick={() => changeAmount(-1)}
									>
										-
									</button>
								)}

								{productAmount}
								<button
									className="amount-basket"
									onClick={() => changeAmount(+1)}
								>
									+
								</button>
							</td>
							<td>15.90 AZN</td>
						</tr>
											
						<tr>
							<td>
								<Image width={200} height={100} src='/imgs/logo.png' alt="Product image" />
								<h5>salam men almayam</h5>
							</td>
							<td className="desktop-col">Product Name</td>
							<td>15.90 AZN</td>
							<td className="amount-col">
								{productAmount == "1" ? (
									<IoTrashOutline />
								) : (
									<button
										className="amount-basket"
										onClick={() => changeAmount(-1)}
									>
										-
									</button>
								)}

								{productAmount}
								<button
									className="amount-basket"
									onClick={() => changeAmount(+1)}
								>
									+
								</button>
							</td>
							<td>15.90 AZN</td>
						</tr>
					</tbody>
				</table>
			)} */}
		</main>
	);
}

export default Page;
