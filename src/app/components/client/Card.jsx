import Image from "next/image";
import Link from "next/link";
import { Cookies } from "react-cookie";

function Card({ id, name, price, image }) {
	const cook = new Cookies()
	let count = 1
	function addBasket(e,id) {
		e.preventDefault();
		const basket =  cook.get("basket") || [];
		const existingItem = basket.find(item => item.id === id);

		if (existingItem) {
			existingItem.quantity += 1;
		} else {
			basket.push({ id, name, price, image, quantity: count });
		}
		  cook.set("basket", JSON.stringify(basket), { path: "/", maxAge: 7 * 24 * 60 * 60 });
		  
	}

	function changeQuantity(e,id, change) {
		e.preventDefault()
		count+= change;
		document.getElementById(`quantity-${id}`).innerText = count;

		if (count < 1) {
			count = 1;
			document.getElementById(`quantity-${id}`).innerText = count;
			return;
		}
 
	}
	return (
		<>
		<Link href={"/"} className="card">
			<div className="card-top">
				<Image
					width={300}
					height={300}
					src={`http://localhost:3000/uploads/${image}`}
					alt={name}
					className="card-image"
				/>
			</div>
			<div className="card-bottom">
					<h2>{name}</h2>
				<div>
					{price} AZN
				</div>
				<div className="plus-minus">
					<button onClick={(e) => changeQuantity(e,id, -1)}>-</button>
					<span id={`quantity-${id}`}>{count}</span>
					<button onClick={(e) => changeQuantity(e,id, 1)} >+</button>
				</div>
				<button onClick={(e) => addBasket(e,id)} className="add-basket-button">Səbətə at</button>
			</div>
		</Link>
		</>
	);
}

export default Card;
