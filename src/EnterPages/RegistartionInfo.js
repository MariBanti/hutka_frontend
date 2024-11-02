import React from "react";
import { useNavigate } from "react-router";

import imgButtonNext from "../style/img/button-next.png"

const RegistrationInfo = () =>{
	const navigate = useNavigate();

	const handleNavToPassword = () =>{
		navigate('/enter/registration-password');
	}
	return(
		<div className="registration">
			<h1>Регистрация</h1>
			<p>Введите информацию о себе</p>
			<input type="text" placeholder="Фамилия"></input>
			<input type="text" placeholder="Имя"></input>
			<input type="text" placeholder="Отчество"></input>
			<button type="button" onClick={handleNavToPassword} className="button-next">Далее<img src={imgButtonNext} alt="next"></img></button>
		</div>
	);
}

export default RegistrationInfo