import React from "react";
import Button from "./Button";

function FillerHeading({ heading, p }) {
	return (
		<div className="mb-2 w-full md:w-8/12 lg:w-8/12 text-center pb-0 py-2 md:pb-8 lg:pb-8">
			<h3 className="mb-4 text-4xl font-heebo font-bold text-black">{heading}</h3>
			<p className="text-lg md:text-xl lg:text-2xl font-light text-grey-200 px-2">{p}</p>
		</div>
	);
}

export default FillerHeading;
