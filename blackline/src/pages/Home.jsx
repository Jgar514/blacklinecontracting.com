import React from "react";

import Works from "../components/ImageCard";
import Button from "../components/Button";

import Ticker from "../components/Ticker";
import Areas from "../components/Areas";

import Slider from "../components/Slider";

import Hero from "../components/Hero";
import BelowHero from "../components/BelowHero";
import FillerHeading from "../components/FillerHeading";
import Contact from "../components/Contact";
function Home() {
	return (
		<>
			<Hero />

			<BelowHero />

			<div className="bg-white">
				<div className="pt-10 flex flex-col items-center">
					<h2 className="mb-2 text-4xl font-heebo font-bold text-black underline underline-offset-4">Services</h2>
				</div>
				<Works />
				<div className="flex justify-center my-2">
					<p className="py-2">
						<a className="bg-white/30 border-1 mb-3 inline-flex justify-center items-center rounded border-2 border-black px-6 py-2 font-bold text-black shadow-md transition duration-200 md:mr-4 md:w-auto uppercase">All Services</a>
					</p>
				</div>
			</div>

			<div className="container mx-auto mt-2 mb-2 md:mt-14 lg:mt-14  ">
				<div className="flex flex-col items-center justify-center gap-0">
					<FillerHeading heading="More Projects" p="We take pride in our projects. Feel free to reach out with any questions" />
					<Slider />
					<Button>Project Gallery</Button>
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
