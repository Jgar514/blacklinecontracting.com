import React, { useState } from "react";
import Button from "./Button";
import { HiOutlineMenu } from "react-icons/hi";
import Ticker from "./Ticker";

const Nav = () => {
	let Links = [
		{ name: "HOME", link: "/home" },
		{ name: "SERVICES", link: "/services" },
		{ name: "ABOUT", link: "/about" },

		{ name: "GALLERY", link: "/gallery" },
		{ name: "CONTACT", link: "/contact" },
	];
	let [open, setOpen] = useState(false);
	return (
		<div className="shadow-md w-full fixed top-0 left-0   bg-white lg:  mb-0 z-40 pt-4 lg:pt-0   flex flex-col justify-between ">
			<div className="flex flex-row pb-2 lg:pb-2 px-6  lg:px-8 justify-between items-center ">
				<div className=" flex lg:w-1/2 md:justify-center lg:pr-8">
					<a href="/home">
						<div
							className=" font-bold text-2xl  cursor-pointer flex  font-[Poppins] 
      text-gray-800  flex-col  py-0 "
						>
							<h1 className=" underline underline-offset-4 text-2xl md:text-3xl mb-0">Blackline Contracting </h1>

							<p className="text-lg s">443-534-19xx</p>
						</div>
					</a>
				</div>
				{/* <p>4435341999</p> */}
				<div>
					<div onClick={() => setOpen(!open)} className="text-5xl absolute right-8 top-6 cursor-pointer  lg:hidden">
						<HiOutlineMenu name={open ? "close" : "menu"} color={open ? "red" : "black"}></HiOutlineMenu>
					</div>

					<ul className={`lg:flex lg:items-center bg-white z-50  lg:pb-0 pb-12 absolute lg:static  border-4 border-black lg:border-0 lg:z-auto  left-0 pr-4 w-full  lg:w-auto lg:gap-6 lg:pl-0 pl-9  transition-all duration-300 ease-in ${open ? "top-20  " : "top-[-540px] "}`}>
						{Links.map((link) => (
							<li key={link.name} className="lg:ml-8 text-xl lg:my-0 my-7">
								<a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">
									{link.name}
								</a>
							</li>
						))}
						<div className="px-4 lg:px-0 ">
							<Button>
								<a href="./contact">Get Started</a>
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
