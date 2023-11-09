import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, children, primary = true }) => {
	const buttonClasses = `
    lg:px-10 py-2 my-4 rounded shadow-md lg: transition duration-200 text-lg lg:text-lg font-bold focus:outline-none  px-4 dark:text-white dark:border-white dark:border-2 text-black
    ${primary ? "dark:bg-lighterdark bg-white text-black hover:bg-[#FEBD16] border-2 border-black" : "bg-gray-100 text-black  border-black border-2  hover:bg-gray-100"}
    text-base
  `;

	return to ? (
		<Link
			to={to}
			className={buttonClasses}
			onClick={() => {
				window.scrollTo(0, 0); // Scroll to the top when the link is clicked
			}}
		>
			{children}
		</Link>
	) : (
		<button className={buttonClasses}>{children}</button>
	);
};

export default Button;
