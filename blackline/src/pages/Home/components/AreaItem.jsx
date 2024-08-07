import React from "react";

function AreaItem({ state, counties, imgUrl, index }) {
	return (
		<div className="flex flex-col gap-4 w-full border-2 border-black dark:border-white bg-white dark:bg-dark py-4 ">
			<div className="flex flex-col w-full gap-6 md:flex-row dark:text-white">
				<div className="flex flex-col w-full items-center px-4 gap-4  ">
					<div>
						<h1 className="text-4xl py-4 w-full "> {state}</h1>
					</div>
					<img className="w-auto h-60" src={imgUrl} />
				</div>
				<div className="w-full h-auto pl-2 pb-4 py-4">
					<div className="container  grid grid-cols-3 gap-0 p-2 pl-2">
						{counties.map((item, Any_name) => (
							<span key={Any_name} className=" gap-x-2 px-0">
								{item}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default AreaItem;
