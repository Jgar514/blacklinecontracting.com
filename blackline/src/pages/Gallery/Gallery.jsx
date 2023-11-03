import React from "react";
import GalleryItem from "./GalleryItem";
import gallery from "../../data/gallery";
import Header from "../../components/global/Header";
import Contact from "../../components/forms/Contact";
function Gallery() {
	return (
		<>
			<Header title="Gallery" />
			<div className=" bg-gray-100 flex flex-col items-center justify-center px-4 py-8 md:flex-row">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
					{gallery.map((item, index) => (
						<div key={index} className="group relative overflow-hidden rounded-lg hover:shadow-lg transition-transform transform hover:scale-105 p- bg-gray-500  h-96">
							<img src={item.imgUrl} alt={`Gallery Item ${index}`} className="w-full h-auto border-0 border-black" />
							{/* <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-70 w-full text-white text-lg font-bold">Description</div> */}
						</div>
					))}
				</div>
			</div>
			<Contact />
		</>
	);
}

export default Gallery;
