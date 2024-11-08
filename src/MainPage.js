import React, { useEffect } from "react";

import BookingForm from "./BookingForm";
import InfoPanel from "./InfoPanel";
import Sales from "./Sales";

const MainPage = () => {
	useEffect(() => {
		const hash = window.location.hash;
		if (hash) {
			const section = document.querySelector(hash);
			if (section) {
				section.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, []);

	return (
		<div>
			<h1>Поездки по самым низким ценам!</h1>
			<BookingForm />
			<InfoPanel />
			<div id="main-page-sales">
				<Sales />
			</div>
		</div>
	);
};

export default MainPage;
