import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { commercialservices } from "../../data/allservices";
import SliderItem from "./SliderItem";

function ServiceItem({ title, services, listItems, type }) {
	const [sliderRef] = useKeenSlider({
		loop: false,
		mode: "free-snap",
		slides: {
			perView: 2.25,
			spacing: 15,
		},
	});

	return (
		<div>
			<div>
				<h1>{title}</h1>
			</div>
			<div></div>
			<div ref={sliderRef} className="keen-slider w-full h-fit flex flex-row overflow-hidden items-center py-2 mb-0  ">
				{commercialservices.map((service) => (
					<div className="keen-slider__slide ">
						<SliderItem imgUrl={service.imgUrl} />
					</div>
				))}
			</div>
		</div>
	);
}

export default ServiceItem;
