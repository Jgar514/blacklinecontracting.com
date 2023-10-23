import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				"service_ns8qgbt",
				"template_38zmczo",

				{
					from_name: form.name,
					to_name: "Josh",
					from_email: form.email,
					to_email: "Josh.T.Garvey@gmail.com",
					message: form.message,
				},
				"_7JwO9aCUs9RLdDia"
			)
			.then(
				() => {
					setLoading(false);
					alert("Thank you. I will get back to you as soon as possible.");

					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);

					alert("Ahh, something went wrong. Please try again.");
				}
			);
	};

	return (
		<div className=" w-full px-4 " id="contact">
			<div className="mb-6">
				<h1 className="text-2xl">Lets Work Together!</h1>
			</div>
			<div className="border-4 px-4 py-4 rounded-xl border-black flex flex-col ">
				<form ref={formRef} onSubmit={handleSubmit} className="mt-0 flex flex-col gap-8">
					<label className="flex flex-col">
						<span className="text-black text-xl mb-4 pt-0">Your email:</span>
						<input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email?" className="bg-white dark:bg-gray-100 py-4 px-6 placeholder:text-black text-black rounded-lg outline-2 border-black border-2 font-medium dark:border-2 dark:border-yellow-400" />
					</label>
					<label className="flex flex-col">
						<span className="text-black font-medium mb-4 text-xl ">Your Message:</span>
						<textarea rows={7} name="message" value={form.message} onChange={handleChange} placeholder="Feel free to reach out!" className="dark:bg-gray-100 py-4 px-6 bg-white placeholder:text-black text-black rounded border-2 border-black dark:border-yellow-400 font-medium" />
					</label>

					<button type="submit" className=" py-3 px-8 rounded-xl outline w-50 text-black font-bold shadow-md shadow-primary">
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
