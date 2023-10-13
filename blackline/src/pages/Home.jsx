import React from "react";
import hero from "../assets/hero.jpg";

import { MdHouse } from "react-icons/md";

function Home() {
	return (
		<>
			{/* Hero */}

			<div className=" mt-0 bg-white flex items-top justify-center ">
				<div className="bg-cover bg-top flex items-center justify-center h-96 md:h-128 w-full mt-0" style={{ backgroundImage: `url(${hero})` }}>
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

			{/* Trusted Customers */}

			<div className="container mx-auto mt-6 md:mt-14 lg:mt-14 bg-blue-100">
				<div className="flex flex-col items-center justify-center">
					<div className="w-full md:w-8/12 lg:w-8/12 text-center pb-4 md:pb-8 lg:pb-8">
						<h3 className="mb-4 text-4xl font-heebo font-bold text-black">Licensed. Insured. Trusted.</h3>
						<p className="text-base md:text-xl lg:text-2xl font-light text-grey-200">Doing work for families, companies, and our government.</p>
					</div>
				</div>
			</div>
			{/* A JSX comment */}
			{/* A JSX comment */}

			<div className="flex flex-col justify-center items-center py-2">
				<div className="h-24 font-xl flex gap-10">
					<MdHouse className="h-30 w-60" style={{ width: "inherit", height: "inherit" }} />
					<MdHouse className="h-30 w-60" style={{ width: "inherit", height: "inherit" }} />
					<MdHouse className="h-30 w-60" style={{ width: "inherit", height: "inherit" }} />
				</div>

				<a className="block text-center py-2 px-4 rounded bg-blue-200 text-white font-semibold hover:bg-blue-100 storyblok__outline">See Customers</a>
			</div>
			<div className="bg-white">
				<div className="py-6 flex flex-col items-center">
					<h2 className="mb-4 text-4xl font-heebo font-bold text-black">Services</h2>
          
				</div>
			</div>
		</>
	);
}

export default Home;
