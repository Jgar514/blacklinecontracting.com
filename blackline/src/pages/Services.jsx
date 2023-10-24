import React from "react";
import FillerHeading from "../components/FillerHeading";
import Lists from "../components/Lists";
import Contact from "../components/Contact";
import Header from "../components/Header";

function Services() {
	return (
		<>
			<Header title="Services" />
			<div className="mt-10">
				<FillerHeading heading="Services" />
				<Lists />
				<Lists />
				<Contact />
			</div>
		</>
	);
}

export default Services;
