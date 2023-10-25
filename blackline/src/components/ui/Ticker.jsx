import React from "react";

function Ticker() {
	return (
		<div
			className="bg-[#FEBD16]
		 mt-0 border-black border-y-2 mb-4 py-0 "
		>
			<div className="relative overflow-x-hidden flex flex-row  ">
				<div className="px-6 animate-marquee whitespace-nowrap textdecoration-bold text-base text-black font-bold  ">
					<span className=" mx-2">USA</span>
					<span className=" mx-2">USA</span>
					<span className="mx-2">USA</span>
					<span className="ml-6">All Veterans Get 20% Off</span>
				</div>
				<div className="px-6 animate-marquee2  whitespace-nowrap textdecoration-bold text-base text-black font-bold  ">
					<span className=" mx-2">USA</span>
					<span className=" mx-2">US</span>
					<span className="mx-2">USA</span>
					<span className="ml-6">All Veterans Get 20% Off</span>
				</div>
			</div>
		</div>
	);
}

export default Ticker;
