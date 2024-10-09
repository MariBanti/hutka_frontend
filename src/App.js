
import React from "react";
import Header from "./Header"; 
import BookingForm from "./BookingForm"; 
import InfoPanel from "./InfoPanel"; 
import Flights from "./Flights";

const App = () => {

	return (
		<div>
			<Header />
			<h1>Поездки по самым низким ценам!</h1>
      <BookingForm/>
      <Flights/>
			<InfoPanel />
		</div>
	);
};

export default App;
