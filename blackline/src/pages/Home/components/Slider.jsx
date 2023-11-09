import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { scif, cabinets, dumptruck, fans, fdicstudio, glassroom, podcaststudio } from "../../../assets";
import FillerHeading from "../../../components/ui/FillerHeading";
import Button from "../../../components/global/Button";
import MiddleLine from "../../../components/ui/MiddleLine";
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
			<div className="flex flex-col items-center md:gap-y-8 md:pt-8 pb-6 bg-white dark:bg-[#1B1D22]">
				<MiddleLine title="More Projects" p="We take pride in our projects. Feel free to reach out with any questions." />

				<div ref={sliderRef} className="keen-slider w-full h-fit flex flex-row overflow-hidden items-center py-6 mb-0 lg:h-96  gap-2">
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
				<Button to="/gallery">Project Gallery</Button>
			</div>
		</>
	);
}

export default Slider;
