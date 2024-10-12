
import React from "react";
import Header from "./Header"; 
import BookingForm from "./BookingForm"; 
import InfoPanel from "./InfoPanel"; 
import Flights from "./Flights";
import RegistrationForm from "./RegistrationForm"

const App = () => {

	return (
		<div>
			<Header />
			 <h1>Поездки по самым низким ценам!</h1>  
			{/* <RegistrationForm/> */}
			<BookingForm/>
      {/* <Flights/>  */}
			<InfoPanel />
		</div>
	);
};

export default App;
