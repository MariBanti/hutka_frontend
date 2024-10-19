import React from "react";

const Flight = () =>{
	return(
		<div className="flight-card">
		<div className="flight-info">
				<div className="time">
						<div className="departure-time">12:30</div>
						<hr></hr>
						<div className="travel-time">90мин</div>
						<hr></hr>
						<div className="arrival-time">14:00</div>
				</div>
				<div className="trip-towns">
						<div className="departure">
								<div className="city">Минск</div>
								<div className="station">Центральный автовокзал</div>
						</div>
						<div className="arrival">
								<div className="city">Гродно</div>
								<div className="station">Автовокзал</div>
						</div>
				</div>
				<div className="other-info">
						<div className='bus-info'>
								<div className="bus-model">Марка: Mercedes</div>
								<div className="bus-number">Номер: 1234</div>
						</div>
						<a href="#Detail" className="details-link">Детали</a>
				</div>
		</div>
		<div className="flight-price">
				<div className="price">20Br</div>
				<button className="order-button">Заказать</button>
		</div>
</div>
	);
}

export default Flight;