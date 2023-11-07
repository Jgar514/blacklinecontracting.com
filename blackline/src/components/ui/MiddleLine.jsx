import React from "react";

function MiddleLine({ title, p }) {
	return (
		<div className="flex flex-col p-4 py-2 px-6 ">
			<div className="w-full flex flex-row justify-center px-2 md:py-8 py-2 ">
				<div className="flex flex-col flex-1   ">
					<div className="h-1/2 "></div>
					<div className="border-t-2 border-black dark:border-white"></div>
				</div>
				<div className=" w-fit flex  items-center p-4">
					<h1 className=" text-4xl  font-heebo font-bold md:text-4xl lg:text-5xl dark:text-white">{title}</h1>
				</div>
				<div className="flex flex-col flex-1   ">
					<div className="h-1/2"></div>
					<div className="border-t-2 border-black dark:border-white"></div>
				</div>
			</div>
			<div>
				<p className="text-lg md:text-xl lg:text-2xl font-light text-grey-200 px-0 dark:text-white">{p}</p>
			</div>
		</div>
	);
}

export default MiddleLine;
