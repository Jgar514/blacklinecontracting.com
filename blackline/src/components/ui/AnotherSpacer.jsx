import React from "react";

function AnotherSpacer() {
	return (
		<div className="w-full flex flex-row justify-center  p-6">
			<div className="flex flex-col flex-1   ">
				<div className="h-1/2 border-r-2 border-black"></div>
				<div className="border-t-2 h-1/2  border-black"></div>
			</div>
			<div className=" w-fit flex items-center p-4">
				<h1 className="text-5xl">OUR COMPANY</h1>
			</div>
			<div className="flex flex-col flex-1   ">
				<div className="h-1/2"></div>
				<div className="border-t-2 border-black border-l-2 h-1/2"></div>
			</div>
		</div>
	);
}

export default AnotherSpacer;
