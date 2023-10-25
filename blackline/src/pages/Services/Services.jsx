import React from "react";
import { commercialservices, residentialservices, comarray, resarray } from "./allservices";
import ComServicesSlider from "./ComServicesSlider";
import ResServicesSlider from "./ResServicesSlider";
import FillerHeading from "../../components/ui/FillerHeading";
import Lists from "../../components/ui/Lists";
import Contact from "../../components/forms/Contact";
import Header from "../../components/ui/Header";

function Services() {
	const comlistItems = comarray.map((service, index) => (
		<li key={index}>
			<div className="text-sm font-bold whitespace-nowrap">{service.title}</div>
		</li>
	));

	const reslistItems = resarray.map((service, index) => (
		<li key={index}>
			<div className="text-sm font-bold whitespace-nowrap">{service.title}</div>
		</li>
	));

	return (
		<>
			<Header title="Services" />
			<div className="mt-10">
				<div className="mb-8">
					<h1 className="text-2xl underline font-bold">Services Offered</h1>
					<p className="text-lg text-gray-600">Explore our wide range of commercial and residential services.</p>
					<div className="mt-6">
						<h2 className="text-xl underline font-bold">Commercial</h2>
						<ul className="grid grid-cols-2 gap-4 py-2 px-6">{comlistItems}</ul>
						<ComServicesSlider />
					</div>
					<div className="mt-8">
						<h2 className="text-xl underline font-bold">Residential</h2>
						<ul className="grid grid-cols-2 gap-4 py-2 px-6">{reslistItems}</ul>
						<ResServicesSlider />
					</div>
				</div>
			</div>
			<Contact />
		</>
	);
}

export default Services;
