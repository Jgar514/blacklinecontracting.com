import React from "react";
import { FaFlagUsa } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { BsHouseDoor } from "react-icons/bs";

function BelowHero() {
	return (
		<>
			<div className="container mx-auto mt-10 md:mt-14 lg:mt-14 bg-white">
				<div className="flex flex-col items-center justify-center">
					<div className="w-full md:w-8/12 lg:w-8/12 text-center pb-4 md:pb-8 lg:pb-8">
						<h3 className="mb-4 text-4xl font-heebo font-bold text-black">Licensed. Insured. Trusted.</h3>
						<p className="text-base md:text-xl lg:text-2xl font-light text-grey-200">Doing work for families, companies, and our government.</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center py-2">
				<div className="h-14 font-xl flex flex-row justify-between px-4  w-full  ">
					<BsHouseDoor className="h-30 w-60 flex" style={{ width: "inherit", height: "inherit" }} />
					<BsBuildings className="h-0 w-60" style={{ width: "inherit", height: "inherit" }} />
					<FaFlagUsa className="h-30 w-60" style={{ width: "inherit", height: "inherit" }} />
				</div>
				<a className="block text-center mt-8 py-2 px-4 rounded bg-white border-2 border-black           text-black font-semibold hover:bg-blue-100 storyblok__outline">See Customers</a>
			</div>
		</>
	);
}

export default BelowHero;
