"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { IoTrashOutline } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

function BasketTables() {
	const cook = new Cookies();
	const [productList, setProductList] = useState([]);
	const [openModal, setOpenModal] = useState(false);
	const [id, setId] = useState("");
	const totalAmount = productList.reduce((sum, item) => {
		return sum+= item.price * item.quantity
	}, 0)
	
	useEffect(() => {
		const basket = cook.get("basket") || [];
		setProductList(basket);
		if (openModal) {
			document.body.style.background = '#000'
		}else{
			document.body.style.background = '#fff'
		}
	}, []);

	function changeAmount(arg, itemId) {
		const updatedList = productList.map((item) => {
			if (item.id === itemId) {
				const newQuantity = item.quantity + arg;
				return {
					...item,
					quantity: newQuantity > 0 ? newQuantity : 1,
				};
			}
			return item;
		});
		setProductList(updatedList);
		cook.set("basket", updatedList);
	}

	function removeItem() {
			const updatedList = productList.filter((item) => item.id !== id);
		setProductList(updatedList);
		cook.set("basket", updatedList);
	}
	return (
		<>
			{productList.length == 0 ? (
				<div className="empty-basket">
					<h3>Səbətdə məhsul yoxdur</h3>
					<div>
						<Image
							width={300}
							height={320}
							src="/imgs/basket.png"
							alt="yenilik sebet logo"
						/>
					</div>
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
						{productList.map((item, i) => {
							return (<tr key={i}>
									<td>
										<Image
											width={100}
											height={50}
											src={`http://localhost:3000/uploads/${item.image}`}
											alt={item.name}
										/>
										<h5>{item.name}</h5>
									</td>
									<td className="desktop-col">{item.name}</td>
									<td>{item.price} AZN</td>
									<td className="amount-col">
										{item.quantity == "1" ? (
											<IoTrashOutline
												onClick={() => {
													setOpenModal(true);
													setId(item.id);
												}}
											/>
										) : (
											<button
												className="amount-basket"
												onClick={() =>
													changeAmount(-1, item.id)
												}
											>
												-
											</button>
										)}

										{item.quantity}
										<button
											className="amount-basket"
											onClick={() =>
												changeAmount(+1, item.id)
											}
										>
											+
										</button>
									</td>
									<td>{item.price * item.quantity} AZN</td>
								</tr>)
							}
								
							)}
					</tbody>
				</table>
			)}
			<div className="basket-amount">
			<button>Ödəniş et</button>
			<h5>Cəmi:{totalAmount}</h5>
			</div>
			{openModal ? (
				<div className="modal">
					<div className="x-mark" onClick={() => setOpenModal(false)}>
						<FaXmark />
					</div>
					<h3>Məhsul silinsin?</h3>
					<div className="buttons">
						<button
							onClick={() => setOpenModal(false)}
							className="no"
						>
							Xeyr
						</button>
						<button
							className="yes"
							onClick={() => {
								removeItem();
								setOpenModal(false);
							}}
						>
							Bəli
						</button>
					</div>
				</div>
			) : null}
		</>
	);
}

export default BasketTables;
