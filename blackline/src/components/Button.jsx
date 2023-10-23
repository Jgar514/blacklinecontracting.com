import React from "react";

const Button = (props) => {
	return (
		<div className="flex justify-center my-2">
			
				<p className="py-2">
					<a className="bg-white/30 border-1 mb-3 inline-flex justify-center items-center rounded border-2 border-black px-6 py-2 font-bold text-black shadow-md transition duration-200 md:mr-4 md:w-auto uppercase">{props.children}</a>
				</p>
			
		</div>
	);
};

export default Button;
