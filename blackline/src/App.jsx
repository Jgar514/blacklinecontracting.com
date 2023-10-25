import Navbar from "./components/ui/Navbar";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/ui/Footer";
import Gallery from "./pages/Gallery/Gallery";
import Services from "./pages/Services/Services";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/forms/Contact";
import ContactPage from "./pages/Contact/ContactPage";
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
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
