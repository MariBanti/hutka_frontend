import React from "react";
import Flight from "./Flight";

import imgHere from "./style/img/location_on.png";
import imgCancel from "./style/img/cancel.png";

const Flights = () => {
	return (
		<main>
			<div className="listOfFlight">
				<div className="sortFlights">
					<div className="stops">
						Остановки
						<input
							type="placeholder"
							id="departure-stop"
							value="Отправление"
						></input>
						<hr></hr>
						<input
							type="placeholder"
							id="arrival-stop"
							value="Прибытие"
						></input>
					</div>

					<div className="sort">
						Сортировать по
						<div className="sortButton">
							<button className="sortButtonTime">Времени</button>
							<hr></hr>
							<button className="sortButtonPrice">Цене</button>
						</div>
					</div>
				</div>
				<div className="flights">
					<Flight />
					<Flight />
					<Flight />
				</div>
			</div>
		</main>
	);
};

export default Flights;
