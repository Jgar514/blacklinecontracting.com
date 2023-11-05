import React from "react";

import ServiceCategory from "./ImageCard";
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
		<>
			<Hero />

			<BelowHero />
			<ServiceCategory />

			<Slider className="" />
			

			<Contact />
		</>
	);
}

export default Home;
