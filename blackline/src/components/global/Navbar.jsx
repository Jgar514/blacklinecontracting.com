import React, { useState, useEffect } from "react";
import Button from "./Button";
import { HiOutlineMenu } from "react-icons/hi";
import Ticker from "./Ticker";
import ThemeSwitcher from "./themeswitcher";
import { Link } from "react-router-dom";

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const closeMenu = () => {
		setMenuOpen(false);
	};
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "auto",
		});
	};
	let Links = [
		{ name: "HOME", link: "/home" },
		{ name: "SERVICES", link: "/services" },
		{ name: "ABOUT", link: "/about" },

		{ name: "GALLERY", link: "/gallery" },
		{ name: "CONTACT", link: "/contact" },
	];
	let [open, setOpen] = useState(false);

	return (
		<div className="shadow-md w-full fixed top-0 left-0 bg-white dark:bg-[#1B1D22] lg:mb-0 z-50 pt-4 lg:pt-0 flex flex-col justify-between dark:text-white">
			<div className="flex flex-row pb-2 lg:pb-2 px-6 lg:px-8 justify-between items-center">
				<div className="flex lg:w-1/2 md:justify-center lg:pr-8">
					<Link to="/home">
						<div className="font-bold text-2xl cursor-pointer flex font-[Poppins] text-gray-800 dark:text-white flex-col py-0">
							<h1 className="underline underline-offset-4 text-2xl md:text-3xl mb-0">Blackline Contracting</h1>
							<p className="text-lg">443-534-19xx</p>
						</div>
					</Link>
				</div>

				<div className="flex flex-row gap-4">
					<div className="text-2xl flex items-center cursor-pointer lg:hidden justify-center">
						<ThemeSwitcher />
					</div>

					<div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
						<button onClick={() => setMenuOpen(!menuOpen)}>
							<HiOutlineMenu className="dark:stroke-white stroke-black text-4xl lg:hidden" />
						</button>
					</div>

					<ul className={`lg:flex lg:items-center bg-white dark:bg-[#22262F] lg:dark:bg-transparent z-50 lg:pb-0 pb-12 absolute lg:static border-4 border-black lg:border-0 lg:z-auto left-0 pr-4 w-full lg:w-auto lg:gap-6 lg:pl-0 pl-9 transition-all duration-400 ease-in ${menuOpen ? "top-20" : "top-[-540px]"}`}>
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
						<div className="hidden text-3xl lg:flex items-center cursor-pointer justify-center">
							<ThemeSwitcher />
						</div>

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
					</ul>
				</div>
			</div>

			<div className="">
				<Ticker />
			</div>
		</div>
	);
};

export default Nav;
