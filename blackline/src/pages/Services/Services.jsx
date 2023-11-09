import React from "react";
import Header from "../../components/global/Header";
import FillerHeading from "../../components/ui/FillerHeading";
import ServFolder from "./components/ServFolder";
import { comarray, resarray } from "../../data/allservices";
import ComServicesSlider from "./components/ComServicesSlider";
import ResServicesSlider from "./components/ResServicesSlider";
import Contact from "../../components/global/Contact";

function Services() {
	// a list of our commercial services from comarray in Data > allservices

	const comlistItems = comarray.map((service, index) => (
		<li key={index}>
			<div className="text-base font-bold whitespace-nowrap">{service.title}</div>
		</li>
	));

	// a list of our residential services from resarray in Data > allservices

	const reslistItems = resarray.map((service, index) => (
		<li key={index}>
			<div className="text-base font-bold whitespace-nowrap">{service.title}</div>
		</li>
	));

	return (
		<>
			<div className="flex flex-col gap-4 lg:gap-2">
				<Header title="Services" />
				<FillerHeading heading="Our Services" p="Explore our wide range of commercial and residential services." />

				{/* Service Containers */}

				{/* Commercial Service Container */}

				<div className="lg:p-10 py-6">
					<ServFolder category="Commercial" listItems={comlistItems} />
					<ComServicesSlider />
				</div>

				{/* Residential Service Container */}
				<div className="lg:p-10">
					<ServFolder category="Residential" listItems={reslistItems} />
					<ResServicesSlider />
				</div>

				<Contact />
			</div>
		</>
	);
}

export default Services;
