import Image from "next/image";
import Link from "next/link";

function Card() {
	return (
		<Link href={"/"} className="card">
			<Image
			className="discount-img"
				width={30}
				height={40}
				src="/imgs/discount.png"
				alt="discount shock"
			/>
			<div className="card-top">
				<img src="/imgs/logo.png" alt="yenilik logo" />
			</div>
			<div className="card-bottom">
				<div>
					<h2>Title</h2>
					13.90 AZN
				</div>
				<div className="discount">
					<span>15.90 Azn</span>
				</div>
				<div className="plus-minus">
					<button>-</button>
					<span>1</span>
					<button>+</button>
				</div>
				<button className="add-basket-button">Səbətə at</button>
			</div>
		</Link>
	);
}

export default Card;
