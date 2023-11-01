import React from "react";
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

function Madeby() {
	return (
		<div className="flex flex-col items-center gap-6 ">
			<p className="text-white">This website was made by Joshua Garvey </p>
			<div className="flex flex-row gap-4 pb-4">
				<AiOutlineLinkedin color="white" size="4em" />
				<AiOutlineInstagram color="white" size="4em" />
				<AiOutlineMail color="white" size="4em" />
			</div>
		</div>
	);
}

export default Madeby;
