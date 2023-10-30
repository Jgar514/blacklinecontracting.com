import React from "react";
import Header from "../../components/global/Header";
import Contact from "../../components/forms/Contact";

function ContactPage() {
	return (
		<div className="bg-gray-100">
			<Header title="Contact" />
			<div className="flex justify-center py-6 flex-col items-center gap-8">
				<h1 className="text-2xl">- Call Us Today -</h1>
				<h1 className="font-bold text-4xl underline">443-534-19xx</h1>
			</div>
			<div className="p-4">
				<Contact />
			</div>
		</div>
	);
}

export default ContactPage;
