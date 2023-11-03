import React from "react";
import { commercialservices, residentialservices, comarray, resarray } from "../../data/allservices";
import ComServicesSlider from "./ComServicesSlider";
import ResServicesSlider from "./ResServicesSlider";
import FillerHeading from "../../components/ui/FillerHeading";
// import Lists from "../../components/ui/Lists";
import Contact from "../../components/forms/Contact";
import Header from "../../components/global/Header";
import ServiceItem from "./ServiceItem";

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
			<div id="topOfServices">
				<div className="bg-gray-100">
					<Header title="Services" />

					<div className="pt-10 bg-gray-100 ">
						<div className="mb-8 w-full">
							<div className="bg-gray-100">
								<h1 className="text-4xl md:text-4xl font-bold text-center underline mb-4">Our Services</h1>
								<p className="text-lg text-gray-600 text-center mb-8">Explore our wide range of commercial and residential services.</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 bg-gray-100 w-full lg:px-10">
								<div className="mt-0 py-0 lg:p-0  ">
									<h2 className="text-3xl font-bold underline mb-0 px-4 py-4 lg:p-10 bg-white w-fit border-2 rounded-t-2xl ">Commercial</h2>
									<div className="lg:  lg:p-">
										<ul className="grid grid-cols-2 lg:grid-cols-3 gap-2 pl-6 py-6 bg-white lg:p-10">{comlistItems}</ul>

										<div className="bg-white pb-4">
											<ComServicesSlider />
										</div>
									</div>
									{/* Move it inside this section */}
								</div>
								<div className="mt-0 py-6 bg-gray-100  " id="middleOfServices">
									<h2 className="text-3xl font-bold underline mb-0 px-4 py-4 bg-white w-fit border-2 rounded-t-2xl">Residential</h2>
									<ul className="grid grid-cols-2 gap-2 pl-6 py-6 bg-white ">{reslistItems}</ul>
									<div className="bg-white pb-4">
										<ResServicesSlider />
									</div>
									{/* Move it inside this section */}
								</div>
							</div>
						</div>
					</div>
					<Contact />
				</div>
			</div>
		</>
	);
}

export default Services;
