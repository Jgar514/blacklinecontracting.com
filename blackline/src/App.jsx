import Navbar from "./components/global/Navbar";
import ThemeSwitcher from "./components/global/themeswitcher";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/global/Footer";
import Gallery from "./pages/Gallery/Gallery";
import Services from "./pages/Services/Services";
import { Route, Routes } from "react-router-dom";

import ContactPage from "./pages/Contact/ContactPage";
import Test from "./pages/Test";
import React, { useState, useEffect } from "react";
function App() {
	return (
		<>
			<div className="bg-white dark:bg-[#1B1D22] flex flex-col">
				<Navbar />

				{/* Our Pages */}
				<div className="w-full h-full bg-gray-200 mt-8 pt-10 dark:bg-[#1B1D22]">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/services" element={<Services />} />
						<Route path="/about" element={<About />} />
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/contact" element={<ContactPage />} />
					</Routes>
				</div>
				{/* End Pages */}

				<Footer />
			</div>
		</>
	);
	x;
}

export default App;
