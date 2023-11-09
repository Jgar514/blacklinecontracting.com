import React from "react";
import Header from "../../components/global/Header";
import Contact from "../../components/global/Contact";
import MiddleLine from "../../components/ui/MiddleLine";
import ThemeSwitcher from "../../components/global/themeswitcher";

function ContactPage() {
	return (
		<div className="bg-gray-100 dark:bg-[#1B1D22]">
			<Header title="Contact" />

			<div className="pt-8 lg:px-20">
				<MiddleLine title="Call Us Today" />
				<div className="flex justify-center py-6 flex-col items-center gap-8 ">
					<h1 className="font-bold text-4xl underline dark:text-[#4D98B6]">443-534-19xx</h1>
				</div>
			</div>
			<div className="md:p-4 lg:px-20">
				<Contact />
			</div>
		</div>
	);
}

export default ContactPage;
