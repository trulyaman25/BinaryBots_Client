import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';

import Header from "./components/navigation/header/header";
import Home from "./section/home";
import MemberPage from "./section/memberPage";
import Contact from "./section/contact";
import Footer from "./components/navigation/footer/footer";

function RoutesApp() {
	return (
		<Router>
			{/* <Header /> */}
			<MainRoutes />
			<Analytics />
			<Footer />
		</Router>
	);
}

function MainRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/member/:memberID" element={<MemberPage />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
}

export default RoutesApp;