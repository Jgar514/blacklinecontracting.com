import React from "react";
import Header from "../../components/global/Header";
import Contact from "../../components/forms/Contact";

function ContactPage() {
	return (
		<div className="">
			<Header title="Contact" />
			<div className="p-4">
				<Contact />
			</div>
		</div>
	);
}

export default ContactPage;
