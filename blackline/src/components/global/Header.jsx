import React from "react";
import hero from "../../assets/headerimages/hero.jpg";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

// component at the top of each page with breadcrumbs

const Header = ({ title }) => {
	return (
		<div className="border-b-4 border-black bg-cover bg-center flex items-center justify-center h-46 w-full " style={{ backgroundImage: `url(${hero})` }}>
			<div className="bg-white/40 dark:bg-[#23272F]/70 w-full h-full  md:w-full px-4 py-16 text-center flex flex-col justify-center items-center gap-y-2 mt-8 pr-16">
				<nav className="flex" aria-label="Breadcrumb">
					<ol className="inline-flex items-center space-x-1 md:space-x-3">
						{/* Home Breadcrumb */}

						<li className="inline-flex items-center">
							<Link to="/home" className="inline-flex items-center font-medium text-gray-700 dark:text-white hover:text-blue-600 text-xl dark:hover:text-white">
								<BsFillHouseDoorFill />
								Home
							</Link>
						</li>

						{/* Current Page Breadcrumb */}

						<li aria-current="page">
							<div className="flex items-center">
								<IoIosArrowForward />
								<span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-white">
									<h1 className="text-black dark:text-white underline md:text-4xl font-bold text-3xl">{title}</h1>
								</span>
							</div>
						</li>
					</ol>
				</nav>
			</div>
		</div>
	);
};

export default Header;
