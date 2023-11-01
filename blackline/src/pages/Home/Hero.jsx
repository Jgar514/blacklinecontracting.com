import React from "react";
import { hero } from "../../assets";
import Button from "../../components/global/Button";

// blacklinecontracting.com / blackline / src / assets / headerimages / hero.jpg;

function Hero() {
	return (
		<div className="mt-10 lg:mt-12 bg-gray-100 flex items-center justify-center">
			<div className="bg-cover bg-top h-96 md:h-128 w-full flex " style={{ backgroundImage: `url(${hero})` }}>
				<div className="container mx-auto">
					<div className="flex h-full items-center justify-center">
						<div className="bg-white/70 w-full md:w-10/12 lg:w-10/12 px-4 py-4 text-center flex flex-col gap-y-2 lg:gap-y-8 mt-2 border-black md:border-2">
							<p className="text-black text-base font-bold uppercase mt-4 lg:text-xl">Build Your Vision</p>
							<h1 className="text-black text-2xl md:text-4xl lg:text-6xl font-bold uppercase">Blackline Contracting</h1>
							<p className="rounded-2xl text-black py-2 px-2 text-lg md:text-lg lg:text-2xl bg-white/80 mt-4">"Welcome to Blackline Contracting. We turn your visions into reality with precision and professionalism. Let's build together!"</p>
							<div className="flex flex-row justify-center gap-6">
								<Button to="/contact">Free Quote</Button>
								<a className="inline-flex text-black justify-center items-center font-bold hover:underline  py-2 mr-2 px-2 " href="/about">
									<span className="bg-white/50 mr-2 ml-2 underline">About Us</span>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="black" className="h-4 w-4">
										<path strokeLinecap="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
