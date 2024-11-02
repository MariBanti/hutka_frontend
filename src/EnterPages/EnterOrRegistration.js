import React from "react";
import { useNavigate } from "react-router";

const EnterOrRegistration = () =>{
	const navigate = useNavigate();

	const handleNavToCode = () =>{
		navigate('/enter/registration-code');
	}

	return(
		<div className="enter-or-registration">
			<h1>Вход или регистрация</h1>
			<label for="reg-phone-number">Введите номер телефона</label>
			<input type="number" id="reg-phone-number" placeholder="+375(xx)xxx-xx-xx"></input>
			<button type="button" className="button">Войти</button>
			<button type="button" className="button" onClick={handleNavToCode}>Зарегистироваться</button>
		</div>
	);
}

export default EnterOrRegistration