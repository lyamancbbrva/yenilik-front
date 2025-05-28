import Card from "../components/client/Card";
import Sliders from "../components/client/Sliders";

export default function Home() {
	return (
		<>
			<main>
				<Sliders/>
				<div className="cards">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</main>
		</>
	);
}
