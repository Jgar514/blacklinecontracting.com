import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { commercialservices } from "./allservices";
import SliderItem from "./SliderItem";

function ComServicesSlider() {
	const [sliderRef] = useKeenSlider({
		loop: false,
		mode: "free-snap",
		slides: {
			perView: 2.25,
			spacing: 15,
		},
	});
	return (
		<div ref={sliderRef} className="keen-slider w-full h-fit flex flex-row overflow-hidden items-center py-2 mb-0  ">
			{commercialservices.map((service) => (
				<div className="keen-slider__slide ">
					<SliderItem imgUrl={service.imgUrl} />
				</div>
			))}
		</div>
	);
}

export default ComServicesSlider;
