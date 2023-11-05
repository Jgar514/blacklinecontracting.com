import React from "react";
import Hero from "./components/Hero";
import BelowHero from "./components/BelowHero";
import ServiceCategory from "./components/ServiceCategory";
import Slider from "./components/Slider";
import Areas from "./components/Areas";
import Contact from "../../components/forms/Contact";

function Home() {
	return (
		<>
			<Hero />
			<BelowHero />
			<ServiceCategory />
			<Slider />
			<Contact />
		</>
	);
}

export default Home;
