import React from "react";
import Header from "../../components/global/Header";
import Contact from "../../components/global/Contact";
import { business } from "../../data";

function About() {
	return (
		<>
			<Header title="About" />
			<section className="bg-gray-100 dark:bg-[#1B1D22] py-12">
				<div className="container mx-auto px-4 dark:text-white ">
					<h2 className="text-3xl font-bold mb-6">About {business.name}</h2>
					<p className="text-gray-700 dark:text-white mb-6">At {business.name}, we are committed to shaping your vision into reality. With over 29 years of experience in the construction industry, we have proudly served The DMV with exceptional general contracting services. Our unwavering dedication to quality, integrity, and innovation has made us a trusted partner for both residential and commercial construction projects.</p>

					<div className="bg-white dark:bg-[#22262F] p-6 rounded-lg shadow-md mb-6 dark:text-white">
						<h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
						<ul className="list-disc pl-6 text-gray-700 dark:text-white">
							<li>
								<strong>Quality Craftsmanship:</strong> At the heart of every project is a commitment to craftsmanship. Our team of skilled professionals takes pride in delivering the highest quality work, ensuring your construction project stands the test of time.
							</li>
							<li>
								<strong>Client-Centric Approach:</strong> We put our clients at the center of everything we do. Your needs, preferences, and aspirations are our top priority. We listen carefully to your ideas and work collaboratively to bring your vision to life.
							</li>
							<li>
								<strong>Integrity and Transparency:</strong> Honesty and transparency are the foundations of our business. We maintain clear and open communication throughout every phase of the project, so you are always informed about progress, budget, and any potential changes.
							</li>
							<li>
								<strong>Innovation:</strong> We stay at the forefront of industry trends and technology to ensure that your project benefits from the latest advancements in construction. Our innovative solutions not only enhance the final product but also contribute to sustainability and efficiency.
							</li>
						</ul>
					</div>

					<h3 className="text-2xl font-bold mb-4">Our Services</h3>
					<p className="text-gray-700 dark:text-white  mb-6">From concept to completion, {business.name} offers a comprehensive range of construction services, including:</p>

					<ul className="list-disc pl-6 pb-4 mb-4text-gray-700 dark:text-white">
						<li>
							<strong>New Construction:</strong> We specialize in ground-up construction for residential and commercial properties, offering tailored solutions that match your unique needs.
						</li>
						<li>
							<strong>Renovations and Remodeling:</strong> Whether it's a home renovation, office remodeling, or tenant improvements, we breathe new life into existing structures.
						</li>
						<li>
							<strong>Additions:</strong> Expanding your space? We're experts in creating seamless additions that seamlessly integrate with your existing property.
						</li>
						<li>
							<strong>Design-Build:</strong> Our design-build approach streamlines the construction process by bringing together design and construction services under one roof for efficiency and cost savings.
						</li>
						<li>
							<strong>Project Management:</strong> Our experienced project managers ensure that every aspect of your project, from planning to execution, runs smoothly and efficiently.
						</li>
					</ul>

					<div className="bg-white  dark:bg-[#22262F] p-4 rounded-lg shadow-md mb-6">
						<h3 className="text-2xl font-bold mb-4">Why Choose {business.name}?</h3>
						<ul className="list-disc pl-6 text-gray-700 dark:text-white">
							<li>
								<strong>Proven Track Record:</strong> Our portfolio showcases a diverse range of successfully completed projects, demonstrating our expertise and commitment to excellence.
							</li>
							<li>
								<strong>Licensed and Insured:</strong> We are fully licensed and insured, providing peace of mind to our clients and protecting your investment.
							</li>
							<li>
								<strong>Dedicated Team:</strong> Our team comprises experienced professionals who take pride in their work and share a common goal of exceeding client expectations.
							</li>
							<li>
								<strong>Community Involvement:</strong> We are committed to giving back to the communities we serve and supporting local initiatives.
							</li>
						</ul>
					</div>

					<p className="text-gray-700 dark:text-white">
						<strong>Get Started</strong>
						<br />
						Ready to embark on your next construction project? Contact {business.name} today to discuss your ideas and receive a free consultation. We look forward to making your vision a reality with the same dedication and craftsmanship that define our company.
					</p>
				</div>
			</section>
			<div className=" bg-gray-100  pb-8 dark:bg-[#1B1D22]">
				<Contact />
			</div>
		</>
	);
}

export default About;
