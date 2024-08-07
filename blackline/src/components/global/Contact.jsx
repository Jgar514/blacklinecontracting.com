import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MiddleLine from "../ui/MiddleLine";

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
		<div className="bg-gray-100 dark:bg-[#1B1D22] w-full flex flex-col gap-8 justify-center py-4 md:px-4 ">
			{/* section heading with line separator  */}
			<div className="lg:px-20">
				<MiddleLine title="Message Us" />
			</div>

			<div className="flex justify-center p-2 md:p-8">
				<div className="border-4 px-4 py-8 rounded-xl bg-white dark:bg-lighterdark border-black dark:border-gray-200 flex flex-col shadow-lg mb-8 mx-2 md:w-2/3 w-full lg:w-1/2 lg:h-auto ">
					{/* form  heading */}
					<h1 className="text-2xl dark:text-white font-bold -my-2 mb-2">Let's Work Together!</h1>

					{/* Form  */}
					<form ref={formRef} onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 px-2">
						{/* Form Email */}
						<label className="flex flex-col">
							<span className="text-xl dark:text-white text-black mb-2 font-semibold">Your email:</span>
							<input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="py-2 px-4 bg-white  text-black rounded-lg border-2 border-black font-medium lg:w-1/2 " />
						</label>

						{/* Form Message */}
						<label className="flex flex-col">
							<span className="text-xl text-black mb-2 font-semibold dark:text-white">Your Message:</span>
							<textarea rows={7} name="message" value={form.message} onChange={handleChange} placeholder="Feel free to reach out!" className="py-2 px-4 bg-white text-black rounded border-2 border-black font-medium dark:bg-gray-200 " />
						</label>

						{/* form submit button */}
						<button type="submit" className="py-3 px-8 rounded-xl border-2 border-black w-50 text-black font-bold bg-yellow-400 hover:bg-yellow-500 shadow-md" disabled={loading}>
							{loading ? "Sending..." : "Send"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
