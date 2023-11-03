import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { commercialservices } from "../../data/allservices";
import SliderItem from "./SliderItem";

function ComServicesSlider() {
	const [sliderRef] = useKeenSlider({
		loop: false,
		mode: "free-snap",
		breakpoints: {
			"(min-width: 400px)": {
				slides: { perView: 2.5, spacing: 5 },
			},
			"(min-width: 1000px)": {
				slides: { perView: 3.5, spacing: 10 },
			},
		},
		slides: { perView: 2.25 },
	});
	return (
		<div ref={sliderRef} className="keen-slider w-full h-fit flex flex-row overflow-hidden items-center py-2 md:h-80 mb-0  lg:h-96 gap-2">
			{commercialservices.map((service) => (
				<div className="keen-slider__slide ">
					<SliderItem imgUrl={service.imgUrl} />
				</div>
			))}
		</div>
	);
}

export default ComServicesSlider;
