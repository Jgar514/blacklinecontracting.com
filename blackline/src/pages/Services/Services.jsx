import React from "react";
import { commercialservices, residentialservices, comarray, resarray } from "../../data/allservices";
import ComServicesSlider from "./ComServicesSlider";
import ResServicesSlider from "./ResServicesSlider";
import FillerHeading from "../../components/ui/FillerHeading";
// import Lists from "../../components/ui/Lists";
import Contact from "../../components/forms/Contact";
import Header from "../../components/global/Header";

function Services() {
	const comlistItems = comarray.map((service, index) => (
		<li key={index}>
			<div className="text-base font-bold whitespace-nowrap">{service.title}</div>
		</li>
	));

	const reslistItems = resarray.map((service, index) => (
		<li key={index}>
			<div className="text-base font-bold whitespace-nowrap">{service.title}</div>
		</li>
	));

	return (
		<>
			<Header title="Services" />
			<div className="mt-10">
				<div className="mb-8">
					<h1 className="text-4xl md:text-4xl font-bold text-center underline mb-4">Our Services</h1>
					<p className="text-lg text-gray-600 text-center mb-8">Explore our wide range of commercial and residential services.</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
						<div className="mt-6">
							<h2 className="text-3xl font-bold underline mb-4 pl-4">Commercial</h2>
							<ul className="grid grid-cols-2 gap-2 pl-6">{comlistItems}</ul>
							<ComServicesSlider /> {/* Move it inside this section */}
						</div>
						<div className="mt-6 mb-8">
							<h2 className=" font-bold underline mb-4 pl-4 text-3xl">Residential</h2>
							<ul className="grid grid-cols-2 gap-2 pl-6">{reslistItems}</ul>
							<ResServicesSlider />
						</div>
					</div>
				</div>
			</div>
			<Contact />
		</>
	);
}

export default Services;
