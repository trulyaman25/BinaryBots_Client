import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Header from "./components/navigation/header/header";
import Home from "./section/home";
import MemberPage from "./section/memberPage";
import Contact from "./section/contact";
import Footer from "./components/navigation/footer/footer";

function HomeRoutes() {
	return (
		<Router>
			<MainRoutes />
			<AnalyticsRoutes />
		</Router>
	);
}

function AnalyticsRoutes() {
	return (
		<Router>
			<Analytics />
			<SpeedInsights />
		</Router>
	);
}

function MainRoutes() {
	const location = useLocation();

	return (
		<>
			{location.pathname === "/" && <Header /> }
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/member/:memberID" element={<MemberPage />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
}

export default HomeRoutes;