import React from "react";


import { services } from "../constants";


import { BsArrowDownRight } from "react-icons/bs";

const ProjectCard = ({ index, name, preview, description, tags, image, title }) => {
	return (
		<div className=" mt-0 mb-0 ">
			<div className="flex flex-col gap-2 w-full sm:w-[360px]   border-b-2 border-t-2 dark:border-red-700 border-black  rounded-xl  dark:bg-gray-700 bg-gray-200 pb-2 pt-0 shadow-lg dark:shadow-[#f7f7f7]  ">
				<h1 className="text-[26px] px-4 py-2 w-fit text-black bg-gray-50 bg-opacity-80 rounded-lg border-2 border-black">{title}</h1>
				<div className="w-full relative pt-2 bg-gray-800 pb-2 ">
					<img src={image} alt={name} className="border-2 border-black" />
					<div className="h-1/6 absolute flex w-full bottom-2  justify-end">
						<div className="w-fit h-full absolute flex  items-center  rounded justify-end bottom-0 bg-gray-950 gap-4 opacity-80 px-4">
							<span className="text-white  text-lg text-bold   ">"removed"</span>
						</div>
					</div>
				</div>
				{/* <div className="h-15 w-full border-black border-2 flex justify-center">
					<div className="w-full bg-yellow-50 flex  items-center p-2">
						<p className="text-black">Description</p>
					</div>
				</div> */}
				<div onClick={() => window.open(show_project_link, "_blank")} className="cursor-pointer">
					<div className="h-10 w-full  flex justify-center">
						<div className="w-3/5 bg-yellow-50 flex justify-center items-center rounded-full border-black shadow-black shadow-2xl border-2">
							<p className="text-black ">"removedb1" </p>
						</div>
					</div>
				</div>
				<div onClick={() => window.open(source_code_link, "_blank")} className="cursor-pointer">
					<div className="h-10 w-full  flex justify-center">
						<div className="w-3/5 bg-yellow-50 flex justify-center items-center rounded-full border-black border-2 shadow-black shadow-2xl">
							<p className="text-black">Read More</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Works = () => {
	return (
		<>
			<div id="works" className="h-full w-full  flex flex-wrap py-0 mt-2">
				{/* <div className="w-full flex">
          <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            idk
            In this course, you'll learn the following: - ThreeJS - a powerful 3D graphics library for rendering and animating the 3D model - React Three Fiber - a popular library for creating 3D graphics with ThreeJS in React - TailwindCSS - a popular utility-first CSS styling framework.
          </motion.p>
        </div> */}

				<div className="mt-0 flex justify-evenly   flex-wrap gap-8">
					{services.map((project, index) => (
						<ProjectCard key={`project-${index}`} index={index} {...project} />
					))}
				</div>
			</div>
		</>
	);
};

export default Works;
