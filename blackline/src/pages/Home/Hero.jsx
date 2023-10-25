import React from "react";
import { hero } from "../../assets";
// blacklinecontracting.com / blackline / src / assets / headerimages / hero.jpg;

function Hero() {
	return (
		<div className="mt-10 bg-white flex items-center justify-center">
			<div className="bg-cover bg-top h-96 md:h-128 w-full" style={{ backgroundImage: `url(${hero})` }}>
				<div className="container mx-auto">
					<div className="flex h-full items-center justify-center">
						<div className="bg-white/70 w-full md:w-10/12 lg:w-10/12 px-4 py-4 text-center flex flex-col gap-y-2 mt-2">
							<p className="text-black text-base font-bold uppercase mt-4 md:text-red-200">Build Your Vision</p>
							<h1 className="text-black text-2xl md:text-4xl lg:text-7xl font-bold uppercase">Blackline Contracting</h1>
							<p className="rounded-2xl text-black py-2 px-2 text-lg md:text-lg lg:text-2xl bg-white/80 mt-4">"Welcome to Blackline Contracting. We turn your visions into reality with precision and professionalism. Let's build together!"</p>
							<p className="py-2 mt-2">
								<a
									className="bg-white/70 border-2 mb-3 inline-flex justify-center items-center rounded border-black px-6 py-2 font-bold text-black shadow-md transition duration-200 md:mr-4 md:w-auto uppercase"
									href="#contact" // Replace with your link
								>
									Free Quote
								</a>
								<a
									className="inline-flex text-black justify-center items-center font-bold hover:underline bg-white/60 py-2 mr-2 px-2"
									href="#about" // Replace with your link
								>
									<span className="bg-white/50 mr-2 ml-2 underline">About Us</span>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="black" className="h-4 w-4">
										<path strokeLinecap="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
									</svg>
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
