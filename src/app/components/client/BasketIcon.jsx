'use client'
import React from "react";
import { Cookies } from "react-cookie";
import { CiShoppingBasket } from "react-icons/ci";

function BasketIcon() {
	const cook = new Cookies();
	const basketItems = cook.get("basket");
	return (
		<>
			{basketItems && basketItems.length > 0 ? (
				<span className="cart-count">{basketItems.length}</span>
			) : null}
			<CiShoppingBasket />
		</>
	);
}

export default BasketIcon;
