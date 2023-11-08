import React from "react";
import { types } from "../../../data";
import Button from "../../../components/global/Button";
import { Link } from "react-router-dom";
import MiddleLine from "../../../components/ui/MiddleLine";

//Commercial, resedential, custom cards

const ProjectCard = ({ name, img, link }) => {
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<div className="w-full  lg:w-1/3 p-4">
			<div className="bg-white rounded-lg shadow-md overflow-hidden">
				<Link to={link}>
					<div className="w-full h-80 md:h-96 bg-cover bg-center relative" onClick={scrollToTop} style={{ backgroundImage: `url(${img})` }}>
						<div className="bg-black bg-opacity-50 text-white text-4xl py-4 px-4 absolute bottom-0 left-0 w-full text-center">{name}</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

const ServiceCategory = () => {
	return (
		// Our Homepage Service Options

		<div id="works" className="h-full w-full py-8 lg:py-10 bg-gray-200 dark:bg-[#22262F]">
			<div className="container mx-auto gap-10  ">
				<MiddleLine title="Services" />

				{/* mapping through our work types from Data>data.js types */}

				<div className="flex flex-wrap justify-between ">
					{types.map((project, index) => (
						<ProjectCard key={`project-${index}`} {...project} />
					))}
				</div>

				{/* Our button */}

				<div className="text-center mt-6">
					<Button to="/services">All Services</Button>
				</div>
			</div>
		</div>
	);
};

export default ServiceCategory;
