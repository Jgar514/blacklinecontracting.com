import React from "react";
import hero from "../assets/hero.jpg";

function Home() {
	return (
		<div className=" mt-0 bg-white flex items-top justify-center h-screen">
			<div className="bg-cover bg-top flex items-center justify-center h-5/6 w-full mt-0" style={{ backgroundImage: `url(${hero})` }}>
				<div className=" container mx-auto">
					<div className="flex items-center justify-center gap-y-4">
						<div className="bg-white/70 w-full md:w-10/12 lg:w-10/12 px-4 py-16 text-center">
							<p className=" text-black text-sm font-bold uppercase">The Home</p>
							<h1 className="   text-black text-2xl md:text-4xl lg:text-7xl font-bold">Some important words</h1>
							<p className=" rounded-2xl text-black py-4 text-base md:text-lg lg:text-2xl">Some details and what not to further sell my services and such. Together we build things and blah and what not and such</p>
							<p className="py-2">
								<a className="bg-white/80 border-1 mb-3 inline-flex justify-center items-center rounded border-2 border-black px-6 py-2 font-bold text-black shadow-md transition duration-200 md:mr-4 md:w-auto">LearnMore</a>
								<a>idk</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
