import React, { useState, useEffect } from "react";
import Button from "./Button";
import { HiOutlineMenu } from "react-icons/hi";
import Ticker from "./Ticker";
import ThemeSwitcher from "./themeswitcher";

const Nav = () => {
	let Links = [
		{ name: "HOME", link: "/home" },
		{ name: "SERVICES", link: "/services" },
		{ name: "ABOUT", link: "/about" },

		{ name: "GALLERY", link: "/gallery" },
		{ name: "CONTACT", link: "/contact" },
	];
	let [open, setOpen] = useState(false);
	// const [theme, setTheme] = useState(null);
	// useEffect(() => {
	// 	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	// 		setTheme("dark");
	// 	} else {
	// 		setTheme("dark");
	// 	}
	// }, []);
	// const handleThemeSwitch = () => {
	// 	setTheme(theme === "dark" ? "light" : "dark");
	// };
	// useEffect(() => {
	// 	if (theme === "dark") {
	// 		document.documentElement.classList.add("dark");
	// 	} else {
	// 		document.documentElement.classList.remove("dark");
	// 	}
	// }, [theme]);
	// const sun = (
	// 	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-8 h-8 stroke-yellow-300">
	// 		<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
	// 	</svg>
	// );

	// const moon = (
	// 	<svg xmlns="http://www.w3.org/2000/svg" fill="black-gradient" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
	// 		<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
	// 	</svg>
	// );
	return (
		<div className="shadow-md w-full fixed top-0 left-0   bg-white dark:bg-[#1B1D22] lg:  mb-0 z-50 pt-4 lg:pt-0   flex flex-col justify-between dark:text-white ">
			<div className="flex flex-row pb-2 lg:pb-2 px-6  lg:px-8 justify-between items-center ">
				<div className=" flex lg:w-1/2 md:justify-center lg:pr-8">
					<a href="/home">
						<div
							className=" font-bold text-2xl  cursor-pointer flex  font-[Poppins] 
      text-gray-800 dark:text-white   flex-col  py-0 "
						>
							<h1 className=" underline underline-offset-4 text-2xl md:text-3xl mb-0">Blackline Contracting </h1>

							<p className="text-lg s">443-534-19xx</p>
						</div>
					</a>
				</div>

				{/* <p>4435341999</p> */}
				<div className="flex flex-row gap-2">
					<div className="text-2xl flex items-center cursor-pointer lg:hidden justify-center ">
						<ThemeSwitcher />
					</div>
					<div onClick={() => setOpen(!open)} className="text-5xl cursor-pointer  lg:hidden">
						<HiOutlineMenu name={open ? "close" : "menu"} className="dark:stroke-white stroke-black"></HiOutlineMenu>
					</div>

					<ul className={`lg:flex lg:items-center bg-white dark:bg-[#22262F] lg:dark:bg-transparent z-50  lg:pb-0 pb-12 absolute lg:static  border-4 border-black lg:border-0 lg:z-auto  left-0 pr-4 w-full  lg:w-auto lg:gap-6 lg:pl-0 pl-9  transition-all duration-400 ease-in ${open ? "top-20  " : "top-[-540px] "}`}>
						{Links.map((link) => (
							<li key={link.name} className="lg:mr-8 text-xl lg:my-0 my-7">
								<a href={link.link} className="text-gray-800 dark:text-gray-100 hover:text-gray-400 duration-500">
									{link.name}
								</a>
							</li>
						))}
						<div className="z-20   right-20 top-6 ">
							{/* <button type="button" onClick={handleThemeSwitch} className="fixed  right-20 lg:right-6 lg:top-6 top-6 bg-white border-2 border-transparent  dark:bg-transparent text-lg p-1 rounded-md z-30">
								{theme === "dark" ? sun : moon}
							</button> */}
						</div>
						<div className="hidden text-3xl lg:flex items-center cursor-pointer  justify-center ">
							<ThemeSwitcher />
						</div>

						<div className="px-0 lg:px-0 lg:w-52  ">
							<Button>
								<a className="lg:w-80" href="./contact">
									Get Started
								</a>
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
