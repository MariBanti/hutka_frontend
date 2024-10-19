import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import MainPage from "./MainPage";
import Flights from "./Flights";
import RegistrationForm from "./RegistrationForm";
import ConfirmedBook from "./ConfirmedBook";

const App = () => {
	return (
		<div>
			<Header />
			<Router>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/trips" element={<Flights />} />
					<Route path="/booking" element={<RegistrationForm />} />
					<Route path="/confirmedbook" element={<ConfirmedBook />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
