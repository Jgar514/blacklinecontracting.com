import React, { useState } from "react";
import Button from "./Button";
import { HiOutlineMenu } from "react-icons/hi";
import Ticker from "./Ticker";

const Nav = () => {
	let Links = [
		{ name: "HOME", link: "/home" },
		{ name: "SERVICES", link: "/services" },
		{ name: "ABOUT", link: "/about" },

		{ name: "CONTACT", link: "/contact" },
		{ name: "GALLERY", link: "/gallery" },
	];
	let [open, setOpen] = useState(false);
	return (
		<div className="shadow-md w-full fixed top-0 left-0 h-[90px] lg:h-[90px] bg-white mb-0 z-40 py-4">
			<div className="md:flex items-center justify-between   md:px-10 px-7 ">
				<div
					className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
				>
					{/* <span className="text-3xl text-indigo-600 mr-1 pt-2">
						<ion-icon name="logo-ionic"></ion-icon>
					</span> */}
					<div className=" flex flex-col bg-white py-0">
						<h1 className=" underline underline-offset-4 text-2xl mb-0">Blackline Contracting </h1>

						<p className="text-lg s">443-534-19xx</p>
					</div>
					{/* <p>4435341999</p> */}
				</div>

				<div onClick={() => setOpen(!open)} className="text-5xl absolute right-8 top-6 cursor-pointer  md:hidden">
					<HiOutlineMenu name={open ? "close" : "menu"} color={open ? "red" : "black"}></HiOutlineMenu>
				</div>

				<ul className={`md:flex md:items-center z-50 mt-10 md:pb-0 pb-12 absolute md:static bg-gray-50 border-4 border-black md:z-auto  left-0 w-full  md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${open ? "top-10 " : "top-[-540px] "}`}>
					{Links.map((link) => (
						<li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
							<a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">
								{link.name}
							</a>
						</li>
					))}
					<a href="./contact">
						<Button>Get Started</Button>
					</a>
				</ul>
			</div>
			<div className="mt-2">
				<Ticker />
			</div>
		</div>
	);
};

export default Nav;
