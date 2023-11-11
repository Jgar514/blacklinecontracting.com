import React, { useState, useEffect } from "react";
import Button from "./Button";
import { HiOutlineMenu } from "react-icons/hi";
import Ticker from "./Ticker";
import ThemeSwitcher from "./themeswitcher";
import { Link } from "react-router-dom";

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	//to close navigation menu after selecting page

	const closeMenu = () => {
		setMenuOpen(false);
	};

	//to start each page at the top like a page reload

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "auto",
		});
	};

	//our pages, our routes, our navigation items

	let Links = [
		{ name: "HOME", link: "/home" },
		{ name: "SERVICES", link: "/services" },
		{ name: "ABOUT", link: "/about" },
		{ name: "GALLERY", link: "/gallery" },
		{ name: "CONTACT", link: "/contact" },
	];

	// Container for nav and ticker
	return (
		<div className="flex flex-col justify-between w-full pt-4 bg-white dark:bg-dark dark:text-white fixed top-0 left-0  z-50 shadow-md">
			{/* Container for main part of nav */}

			<div className="flex flex-row justify-between items-center pb-2 lg:pb-2 px-6 lg:px-8 ">
				{/* Upper Left Logo/Business Name and Number */}

				<div className="flex lg:w-1/2 md:justify-center lg:pr-8">
					<Link to="/home">
						<div className="font-bold text-2xl cursor-pointer flex font-[Poppins] text-gray-800 dark:text-white flex-col py-0">
							<h1 className="underline underline-offset-4 text-2xl md:text-3xl mb-0">Blackline Contracting</h1>
							<p className="text-lg">443-534-19xx</p>
						</div>
					</Link>
				</div>

				{/* Theme switcher for non-desktops */}

				<div className="flex flex-row gap-4">
					<div className="text-2xl flex items-center cursor-pointer lg:hidden justify-center">
						<ThemeSwitcher />
					</div>

					{/* Hamburger Icon */}

					<div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
						<button onClick={() => setMenuOpen(!menuOpen)}>
							<HiOutlineMenu className="dark:stroke-white stroke-black text-4xl lg:hidden" />
						</button>
					</div>

					{/* nav menu  */}

					<ul
						className={`
												pl-9 pb-12 w-full left-0 pr-4 z-50 absolute transition-all duration-400 ease-in 
											bg-white dark:bg-dark border-4 border-black
											 	lg:flex lg:items-center lg:static lg:dark:bg-transparent lg:border-0 lg:z-auto lg:pb-0 lg:pl-0 lg:w-auto lg:gap-6
												 ${menuOpen ? "top-20" : "top-[-540px]"}`}
					>
						{/* Map through our links variable/our pages defined above */}
						{Links.map((link) => (
							<li key={link.name} className="lg:mr-8 text-xl lg:my-0 my-7">
								<Link
									to={link.link}
									onClick={() => {
										closeMenu();
										scrollToTop();
									}}
									className="text-gray-800 dark:text-gray-100 hover:text-gray-400 duration-500"
								>
									{link.name}
								</Link>
							</li>
						))}

						{/* Theme Switcher on desktops */}

						<div className="hidden text-3xl lg:flex items-center cursor-pointer justify-center">
							<ThemeSwitcher />
						</div>

						{/* Get Stared CTA button leads to contact page */}
						<div className="px-0 lg:px-0 lg:w-52">
							<Button>
								<Link
									to="/contact"
									onClick={() => {
										closeMenu();
										scrollToTop();
									}}
									className="lg:w-80"
								>
									Get Started
								</Link>
							</Button>
						</div>
						{/* End Get Started Button */}
					</ul>
				</div>
			</div>

			{/* Ticker animated banner  */}
			<div className="">
				<Ticker />
			</div>
		</div>
	);
};

export default Nav;
