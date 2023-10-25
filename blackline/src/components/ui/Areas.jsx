import React from "react";
import areas from "../../data/areas";
import AreaItem from "./AreaItem";
function Areas() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
				{areas.map((project, index) => (
					<div key={index}>
						<AreaItem imgUrl={project.imgUrl} state={project.state} counties={project.counties.sort()} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Areas;
