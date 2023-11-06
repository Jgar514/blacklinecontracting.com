import Navbar from "./components/global/Navbar";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/global/Footer";
import Gallery from "./pages/Gallery/Gallery";
import Services from "./pages/Services/Services";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/forms/Contact";
import ContactPage from "./pages/Contact/ContactPage";
function App() {
	return (
		<>
			<div className="bg-white flex flex-col">
				<Navbar />

				<div className="w-full h-full bg-gray-100 mt-8 pt-10 ">
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
			</div>
		</>
	);
}

export default App;
