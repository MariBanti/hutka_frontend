import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import MainPage from "./MainPage";
import Flights from "./Flights";
import RegistrationForm from "./RegistrationForm";

const App = () => {
	return (
		<div>
			<Header />
			{/* <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/trips" element={<Flights />} />
			<Route path="/booking" element={<RegistrationForm />} />
    </Routes> */}
		<MainPage/>
		<Flights />
		<RegistrationForm />
		</div>
	);
};

export default App;
