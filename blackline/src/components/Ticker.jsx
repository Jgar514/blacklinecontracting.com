import React from "react";

function Ticker() {
	return (
		<div
			className="bg-[#FEBD16]
		 mt-0 border-black border-y-2 mb-4 py-0"
		>
			<div className="overflow-x-hidden ">
				<div className="px-6 animate-marquee whitespace-nowrap textdecoration-bold text-base text-black font-bold  ">
					<span className=" mx-4">USA</span>
					<span className=" mx-4">USA</span>
					<span className="mx-4">USA</span>
					<span>Marquee Item 3</span>
				</div>
			</div>
		</div>
	);
}

export default Ticker;
