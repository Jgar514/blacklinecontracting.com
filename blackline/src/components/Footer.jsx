import React from "react";
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import Madeby from "./Madeby";
import { business } from "../data/data";

function Footer() {
	return (
		<div className="bg-black h-auto py-4 w-full flex flex-col gap-y-4">
			<h1 className="text-white text-3xl">Contact Us</h1>

			{/* Author */}
			<div>
				<Madeby />
			</div>

			{/* End Author */}

			<div className="text-white flex flex-col gap-y-4">
				{/* Name and About */}
				<div>
					<h1 className="text-xl">{business.name}</h1>
					<p>{business.about}</p>
				</div>
				{/* End Name and About */}

				{/* Business Hours */}
				<div>
					<h1 className="text-xl">Business Hours</h1>
					<p>Mon-Fri</p>
					<p>Sunday</p>
					<p>Badge maybe</p>
				</div>
				{/* End Business Hours */}

				{/* Contact Us */}
				<div>
					<h1 className="text-xl">Contact Us</h1>
					<p>Address</p>
					<p>{business.phone}</p>
					<p>Badge maybe</p>
					<div className="flex flex-row">
						<AiOutlineLinkedin color="white" size="2em" />
						<AiOutlineInstagram color="white" size="2em" />
						<AiOutlineMail color="white" size="2em" />
					</div>
				</div>
				{/* End Contact Us */}
			</div>
		</div>
	);
}

export default Footer;
