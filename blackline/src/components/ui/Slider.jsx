import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { scif, cabinets, dumptruck, fans, fdicstudio, glassroom, podcaststudio } from "../../assets";

function Slider() {
	const [sliderRef] = useKeenSlider({
		loop: false,
		mode: "free-snap",
		slides: {
			perView: 2.25,
			spacing: 15,
		},
	});

	return (
		<>
			<div ref={sliderRef} className="keen-slider w-full h-fit flex flex-row overflow-hidden items-center py-4 mb-0  ">
				<div className="keen-slider__slide ">
					<img className="h-auto object-cover w-full" src={cabinets} />
				</div>
				<div className="keen-slider__slide  ">
					<img className="h-auto object-cover w-full" src={scif} />
				</div>
				<div className="keen-slider__slide">
					<img className="h-auto object-cover w-full" src={dumptruck} />
				</div>
				<div className="keen-slider__slide ">
					<img className="h-auto object-cover w-full" src={fans} />
				</div>
				<div className="keen-slider__slide">
					<img className="h-auto object-cover w-full" src={fdicstudio} />
				</div>
				<div className="keen-slider__slide">
					<img className="h-auto object-cover w-full" src={glassroom} />
				</div>
				<div className="keen-slider__slide">
					<img className="h-auto object-cover w-full" src={podcaststudio} />
				</div>
			</div>
		</>
	);
}
import { hero } from "../../assets";

export default Slider;
