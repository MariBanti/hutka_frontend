import React from "react";
import { useNavigate } from "react-router";

import imgArrowLeft from "./style/img/Arrow left.png";
import imgPlus from "./style/img/Plus circle.png";
import imgMinus from "./style/img/Minus circle.png";

const RegistretionForm = () => {
	const navigate = useNavigate();

	return (
		<div className="registration-form">
			<div className="return">
				<button className="returnBackToMainPage" onClick={() => navigate("/")}>
					<img src={imgArrowLeft} alt="назад"></img>Вернуться назад
				</button>
			</div>

			<div className="registrationInfo">
				<div className="registrationFlight">
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
				</div>

				<div className="busInfo">
					<div className="labelForInfo">Информация о машине</div>
					<div className="busModel">
						Модель: Mercedez-Benz Sprinter
						<br />
						Цвет: Белый
						<br />
						Номер: 3780 MP-7
					</div>
				</div>
			</div>

			<div className="clientInfo">
				<form className="clientContactInfo" action="index.html" method="post">
					<div>Контактная информация</div>
					<label for="inputName">Имя*</label>
					<input
						type="text"
						id="registrationInputName"
						placeholder="Имя"
					></input>
					<label for="inputSurname">Фамилия*</label>
					<input
						type="text"
						id="registrationInputSurname"
						placeholder="Фамилия"
					></input>
					<label for="inputMiddleName">Отчество*</label>
					<input
						type="text"
						id="registrationInputMiddleName"
						placeholder="Отчество"
					></input>
					<label for="inputPhone">Телефон*</label>
					<input
						type="tel"
						id="registrationInputPhone"
						autofocus="autofocus"
						required="required"
						pattern="\+375\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
						placeholder="+375(___)___-__-__"
					></input>
				</form>

				<div className="ticketType">
					<div className="ticketText">Тип билета</div>
					<form action="index.html" className="typeForm">
						<div className="adult">
							<button type="button" id="minusAdult">
								<img src={imgMinus} alt="минус"></img>
							</button>
							<input type="number" value="0" min={1} max={10}></input>
							<label for="adultTicket">Взрослый</label>
							<button type="button" id="plusAdult">
								<img src={imgPlus} alt="плюс"></img>
							</button>
						</div>
						<div className="benefit">
							<button type="button" id="minusBenefit">
								<img src={imgMinus} alt="минус"></img>
							</button>
							<input type="number" min={1} max={10} value="0"></input>
							<label for="benefitTicket">Льготный</label>
							<button type="button" id="plusBenefit">
								<img src={imgPlus} alt="плюс"></img>
							</button>
						</div>
					</form>
					<div className="textAboutbenefit">
						Льготный билет распространяется на детей до 7 лет, ветеранов и
						инвалидов 1 группы. При посадке необходимо предъявить подтверждающий
						документ.
					</div>
					<div className="resultPrice">Итого:64 Br</div>
					<div className="buttonsForBookOrBuy">
						<button type="submit" className="bookButton" onClick={()=>navigate('/confirmedbook')}>
							Забронировать
						</button>
						<button type="button" className="buyButton">
							Оплатить
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegistretionForm;
