import { allProducts } from "../api/api";
import Card from "../components/client/Card";
import Sliders from "../components/client/Sliders";

export default function Home() {
	return (
		<>
			<main>
				<Sliders/>
				<div className="cards">
				</div>
			</main>
		</>
	);
}
