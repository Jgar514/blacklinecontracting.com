import React from "react";
import { types } from "../../data/overview";
import Button from "../../components/global/Button"; // Import your Button component

const ProjectCard = ({ name, img }) => {
	return (
		<div className="w-full md:w-1/2 lg:w-1/3 p-4">
			<div className="bg-white rounded-lg shadow-md overflow-hidden">
				<div className="w-full h-80 md:h-96 bg-cover bg-center relative" style={{ backgroundImage: `url(${img})` }}>
					<div className="bg-black bg-opacity-50 text-white text-4xl py-4 px-4 absolute bottom-0 left-0 w-full text-center">{name}</div>
				</div>
			</div>
		</div>
	);
};

const ServingCard = () => {
	return (
		<div id="works" className="h-full w-full py-8 bg-gray-100">
			<div className="container mx-auto">
				<h2 className="text-4xl font-bold text-center mb-4">Services</h2>
				<div className="flex flex-wrap">
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

export default ServingCard;
