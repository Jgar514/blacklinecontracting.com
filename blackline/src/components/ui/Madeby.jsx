import React from "react";
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

function Madeby() {
	return (
		<div className="flex flex-col items-center gap-6">
			<p className="text-white">This website was made by Joshua Garvey</p>
			<div className="flex flex-row gap-4 pb-4">
				<a href="https://www.linkedin.com/in/josh-garvey/">
					<AiOutlineLinkedin color="white" size="4em" />
				</a>
				<a href="https://www.instagram.com/joshgarvey">
					<AiOutlineInstagram color="white" size="4em" />
				</a>
				<a href="mailto:josh.t.garvey@gmail.com">
					<AiOutlineMail color="white" size="4em" />
				</a>
			</div>
		</div>
	);
}

export default Madeby;
