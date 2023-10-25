import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, children, primary = true }) => {
	const buttonClasses = `
    px-4 py-2 rounded shadow-md transition duration-200 text-lg font-bold focus:outline-none
    ${primary ? "bg-gray-50 text-black hover:bg-blue-700 border-2 border-black" : "bg-[#FEBD16] text-black  border-black border-2 hover:bg-gray-100"}
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
