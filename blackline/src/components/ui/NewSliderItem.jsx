import React from "react";

function NewSliderItem({ imgUrl }) {
	return (
		<div className="h-fit">
			<img src={imgUrl} alt="service image" className="h-auto object-cover w-full" />
		</div>
	);
}

export default NewSliderItem;
