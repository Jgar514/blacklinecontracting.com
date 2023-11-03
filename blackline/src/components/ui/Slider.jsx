import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { scif, cabinets, dumptruck, fans, fdicstudio, glassroom, podcaststudio } from "../../assets";

function Slider() {
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
		<>
			<div ref={sliderRef} className="keen-slider w-full h-fit flex flex-row overflow-hidden items-center py-8 mb-0 lg:h-96  ">
				<div className="keen-slider__slide ">
					<img className="h-auto lg:h-86 object-cover w-full" src={cabinets} />
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
