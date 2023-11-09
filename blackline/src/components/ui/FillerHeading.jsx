import React from "react";
import Button from "../global/Button";

function FillerHeading({ heading, p }) {
	return (
		<div className=" flex flex-col justify-center mb-0 w-full  lg:w-full text-center pb-0 py-6 md:pb-8 lg:py-6">
			<h3 className="mb-4 text-4xl  font-bold text-black dark:text-white">{heading}</h3>
			<p className="dark:text-white text-lg md:text-xl lg:text-2xl font-light text-grey-200 px-2">{p}</p>
		</div>
	);
}

export default FillerHeading;
