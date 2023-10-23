import React from "react";
import GalleryItem from "../components/GalleryItem";
import gallery from "../data/gallery";
import Header from "../components/Header";
function Gallery() {
	return (
		<>
			<Header title="Gallery" />
			<div className="flex flex-col w-full md:flex-row items-center justify-center px-8 py-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-auto">
					{gallery.map((gallery) => (
						<GalleryItem key={gallery.index} imgUrl={gallery.imgUrl} />
					))}
				</div>
			</div>
		</>
	);
}

export default Gallery;
