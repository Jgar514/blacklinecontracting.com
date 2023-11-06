import React from "react";
import { types } from "../../../data";
import Button from "../../../components/global/Button";
import { Link } from "react-router-dom";
import MiddleLine from "../../../components/ui/MiddleLine";
// Import your Button component

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
		<div id="works" className="h-full w-full py-8 lg:py-10 bg-gray-200">
			<div className="container mx-auto gap-10  ">
				<MiddleLine title="Services" />
				<div className="flex flex-wrap justify-between ">
					{types.map((project, index) => (
						<ProjectCard key={`project-${index}`} {...project} />
					))}
				</div>
				<div className="text-center mt-6">
					<Button to="/services">All Services</Button>
				</div>
			</div>
		</div>
	);
};

export default ServiceCategory;
