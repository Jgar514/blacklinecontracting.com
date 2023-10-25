import React from "react";

import Works from "../../components/ui/ImageCard";
import Button from "../../components/ui/Button";

import Ticker from "../../components/ui/Ticker";
import Areas from "../../components/ui/Areas";

import Slider from "../../components/ui/Slider";

import Hero from "./Hero";
import BelowHero from "./BelowHero";
import FillerHeading from "../../components/ui/FillerHeading";
import Contact from "../../components/forms/Contact";
function Home() {
	return (
		<>
			<Hero />

			<BelowHero />
			<Works />

			<div className="container mx-auto mt-2 mb-2 md:mt-14 lg:mt-14  ">
				<div className="flex flex-col items-center justify-center gap-0">
					<FillerHeading className="mb-4 text-center" heading="More Projects" p="We take pride in our projects. Feel free to reach out with any questions." />

					<Slider className="mb-8" />
					<Button to="/gallery">Project Gallery</Button>

					<div className="mt-4 py-4">
						<FillerHeading heading="Serving The DMV" p="We cover counties in Maryland, D.C. and Virginia" />
						<Areas />
					</div>

					<FillerHeading />
					<Contact />
				</div>
			</div>
		</>
	);
}

export default Home;
