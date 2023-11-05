import React from "react";

function SliderItem({ imgUrl }) {
	return (
		<div className="h-fit lg:p-0">
			<img src={imgUrl} alt="service image" className="h-auto object-cover w-full" />
		</div>
	);
}

export default SliderItem;
