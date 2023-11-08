import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { hero } from "../../../assets";
import Button from "../../../components/global/Button";
import { business } from "../../../data";

function Hero() {
	return (
		<div className="mt-10 lg:mt-12 bg-gray-400 flex items-center justify-center">
			<div className="bg-cover bg-top h-96 md:h-128 w-full flex" style={{ backgroundImage: `url(${hero})` }}>
				<div className="container mx-auto">
					<div className="flex h-full items-center justify-center dark:bg-[#23272F]/70">
						<div className="bg-white/70 dark:bg-[#23272F]/70 w-full md:w-10/12 lg:w-10/12 px-4 py-4 text-center flex flex-col gap-y-2 lg:gap-y-8 mt-2 border-black md:border-2">
							<p className="text-black dark:text-white text-base font-bold uppercase mt-4 lg:text-xl">{business.shorttag}</p>
							<h1 className="text-black dark:text-white text-2xl md:text-4xl lg:text-6xl font-bold uppercase">{business.name}</h1>
							<p className="rounded-2xl text-black py-2 px-2 text-lg md:text-lg lg:text-2xl bg-white/80 dark:bg-transparent mt-4 dark:text-white">{business.tagline}</p>
							<div className="flex flex-row justify-center gap-6">
								<Button to="/contact">{business.CTA}</Button>
								<Link to="/about" className="inline-flex text-black dark:text-white justify-center items-center font-bold hover:underline py-2 mr-2 px-2">
									<span className="bg-white/50 dark:bg-transparent mr-2 ml-2 underline">About Us</span>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="black" className="h-4 w-4">
										<path strokeLinecap="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
