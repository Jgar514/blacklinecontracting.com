import { services } from "../data/services.js";
import { getImageUrl } from "./utils.js";
import Slider from "./Slider.jsx";

export default function List() {
	const listItems = services.map((service) => (
		<li key={service.id}>
			<div className=" ">
				<h1>{service.name}</h1>
			</div>
		</li>
	));
	return (
		<div className="p-2">
			<h1 className="text-xl underline font-bold">Commercial</h1>
			<ul className="list-disc grid grid-cols-2 py-2 px-6">{listItems}</ul>
			<Slider />
		</div>
	);
}
