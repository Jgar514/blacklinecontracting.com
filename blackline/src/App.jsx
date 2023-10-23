import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
function App() {
	return (
		<>
			<div className="bg-white">
				<Navbar />
			</div>

			<div className="w-full h-full bg-white mt-8 pt-10 ">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/about" element={<About />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
