import React from "react";

function GalleryItem({ imgUrl }) {
	return (
		<>
			<img src={imgUrl} alt={"service image"} className="w-full h-auto md:h-48 object-cover cursor-pointer" />
		</>
	);
}

export default GalleryItem;
