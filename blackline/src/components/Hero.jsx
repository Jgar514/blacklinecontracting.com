import React from "react";
import hero from "../assets/headerimages/hero.jpg";

function Hero() {
	return (
		<div className=" mt-10 bg-white flex items-top justify-center ">
			<div className="bg-cover bg-top flex items-center justify-center h-96 md:h-128 w-full mt-0" style={{ backgroundImage: `url(${hero})` }}>
				<div className=" container mx-auto">
					<div className="flex flex-col h-full w-full items-center justify-center ">
						<div className="bg-white/70 w-full md:w-10/12 lg:w-10/12 px-4 py-4 text-center flex flex-col gap-y-2 mt-2">
							<p className=" text-black text-base font-bold uppercase mt-4 md:text-red-200">Build Your Vision</p>
							<h1 className="   text-black text-2xl md:text-4xl lg:text-7xl font-bold uppercase">Blackline Contracting</h1>
							<p className=" rounded-2xl text-black py-2 px-2 text-lg md:text-lg lg:text-2xl bg-white/80 mt-4  ">Some details and what not to further sell my services and such. Together we build things and blah and what not and such</p>
							<p className="py-2 mt-2">
								<a className="bg-white/70 border-1 mb-3 inline-flex justify-center items-center rounded border-2 border-black px-6 py-2 font-bold text-black shadow-md transition duration-200 md:mr-4 md:w-auto uppercase">Free Quote</a>
								<a className="inline-flex text-black justify-center items-center font-bold hover:underline bg-white/60 py-2 mr-2 px-2">
									<span className="bg-white/50 mr-2 ml-2 "> About Us</span>
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
