import React from "react";
import hero from "../assets/headerimages/hero.jpg";

function Header({ title }) {
	return (
		<div className="border-b-4 border-black bg-cover bg-center flex items-center justify-center h-46 md:h-128 w-full mt-0" style={{ backgroundImage: `url(${hero})` }}>
			<div className=" container mx-auto">
				<div className="flex items-center justify-center ">
					<div className="bg-white/40 w-full md:w-10/12 lg:w-10/12 px-4 py-16 text-center flex flex-col gap-y-2 mt-8">
						<h1 className="   text-black underline  md:text-4xl lg:text-7xl font-bold text-3xl">{title}</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
