import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { residentialservices } from "./allservices";
import SliderItem from "./SliderItem";

function ResServicesSlider() {
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
			{residentialservices.map((service) => (
				<div className="keen-slider__slide ">
					<SliderItem imgUrl={service.imgUrl} />
				</div>
			))}
		</div>
	);
}

export default ResServicesSlider;
