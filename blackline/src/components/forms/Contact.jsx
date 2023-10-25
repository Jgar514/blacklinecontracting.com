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
		<div className="w-full px-4  pt-2 pb-8 p-6 rounded-lg   mb-6" id="contact ">
			<div className="mb-6 ">
				<h1 className="text-2xl font-bold">Let's Work Together!</h1>
			</div>
			<div className="border-4 px-4 py-4 rounded-xl border-black flex flex-col shadow-lg">
				<form ref={formRef} onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
					<label className="flex flex-col">
						<span className="text-xl text-black mb-2 font-semibold">Your email:</span>
						<input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="py-2 px-4 bg-white text-black rounded-lg border-2 border-black font-medium" />
					</label>
					<label className="flex flex-col">
						<span className="text-xl text-black mb-2 font-semibold">Your Message:</span>
						<textarea rows={7} name="message" value={form.message} onChange={handleChange} placeholder="Feel free to reach out!" className="py-2 px-4 bg-white text-black rounded border-2 border-black font-medium" />
					</label>
					<button type="submit" className="py-3 px-8 rounded-xl outline w-50 text-black font-bold bg-yellow-400 hover:bg-yellow-500 shadow-md" disabled={loading}>
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
