import React from "react";
import Hero from "./components/Hero";
import BelowHero from "./components/BelowHero";
import ServiceCategory from "./components/ServiceCategory";
import Slider from "./components/Slider";
import Areas from "./components/Areas";
import Contact from "../../components/global/Contact";

function Home() {
	return (
		<>
			<Hero />
			<BelowHero />
			<ServiceCategory />
			<Slider />
			<Areas />
			<Contact />
		</>
	);
}

export default Home;
