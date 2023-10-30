import React from "react";
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import Madeby from "../ui/Madeby";
import { business } from "../../data/data";
import Button from "../global/Button";
import { Link } from "react-router-dom";
import FooterItem from "./FooterItem";

function Footer() {
	return (
		<div className="bg-black h-auto py-4 w-full flex flex-col gap-y-4 items-center -mt-4">
			<h1 className="text-white text-3xl">Contact Us</h1>

			{/* Author */}
			<div>
				<Madeby />
			</div>

			<FooterItem name={business.name} about={business.about} hours={business.hours} address={business.address} phone={business.phone} />
		</div>
	);
}

export default Footer;
