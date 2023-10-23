import React from "react";
import { types } from "../data/overview";

const ProjectCard = ({ index, name, img }) => {
	return (
		<div className="flex flex-col w-full items-center  bg-white mt-0 px-8 py-8">
			<div className=" bg-cover bg-center flex   items-end m justify-center h-96 md:h-128 w-full mt-0 py-6 " style={{ backgroundImage: `url(${img})` }}>
				<div>
					<h1 className="text-white text-5xl p-4 mb-6 bg-black/50 ">{name}</h1>
				</div>
			</div>
		</div>
	);
};

const ServingCard = () => {
	return (
		<>
			<div id="works" className="h-full w-full  flex flex-wrap  justify-center py-0 mt-0">
				<div className="mt-0 flex justify-evenly   flex-wrap gap-2 w-full">
					{types.map((project, index) => (
						<ProjectCard key={`project-${index}`} index={index} {...project} />
					))}
				</div>
			</div>
		</>
	);
};

export default ServingCard;
