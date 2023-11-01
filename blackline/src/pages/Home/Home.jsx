import React from "react";

import Works from "./ImageCard";
import Button from "../../components/global/Button";

import Ticker from "../../components/global/Ticker";

import Slider from "../../components/ui/Slider";

import Hero from "./Hero";
import BelowHero from "./BelowHero";
import FillerHeading from "../../components/ui/FillerHeading";
import Contact from "../../components/forms/Contact";
import Areas from "./Areas";
function Home() {
	return (
		<div className=" flex flex-col  w-full">
			<Hero />

			<BelowHero />
			<Works />

			<div className="flex flex-col items-center justify-center gap-2 w-full ">
				
				<FillerHeading className="mb-4 text-center" heading="More Projects" p="We take pride in our projects. Feel free to reach out with any questions." />

				<Slider className="" />
				<Button to="/gallery">Project Gallery</Button>
				<Areas />
			</div>
			<Contact />
		</div>
	);
}

export default Home;
