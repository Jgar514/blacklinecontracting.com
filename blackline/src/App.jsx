import Navbar from "./Navbar";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<div className="w-full h-screen bg-red-500 mt-8 pt-10 ">
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
