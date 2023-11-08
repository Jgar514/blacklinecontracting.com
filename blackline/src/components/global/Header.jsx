import React from "react";
import hero from "../../assets/headerimages/hero.jpg";
import { Link } from "react-router-dom";
const Header = ({ title }) => {
	return (
		<div className="border-b-4 border-black bg-cover bg-center flex items-center justify-center h-46 w-full mt-0" style={{ backgroundImage: `url(${hero})` }}>
			<div className="bg-white/40 dark:bg-[#23272F]/70 w-full h-full md:w-10/12 lg:w-10/12 px-4 py-16 text-center flex flex-col justify-center items-center gap-y-2 mt-8 pr-16">
				<nav className="flex" aria-label="Breadcrumb">
					<ol className="inline-flex items-center space-x-1 md:space-x-3">
						<li className="inline-flex items-center">
							<Link to="/home" className="inline-flex items-center font-medium text-gray-700 dark:text-white hover:text-blue-600 text-xl dark:hover:text-white">
								<svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
									<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
								</svg>
								Home
							</Link>
						</li>

						<li aria-current="page">
							<div className="flex items-center">
								<svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
								</svg>
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
