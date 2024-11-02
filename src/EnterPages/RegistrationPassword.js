import React from "react";
import { useNavigate } from "react-router";

import imgButtonNext from "../style/img/button-next.png"

const RegistrationPassword = () =>{
	const navigate = useNavigate();

	const handleNavToProfile = () =>{
		navigate('/profile/profile-info');
	}

	return(
		<div className="registration">
			<h1>Регистрация</h1>
			<p>Введите пароль</p>
			<input type="password"></input>
			<p>Повторите пароль</p>
			<input type="password"></input>
			<button type="button" className="button-next" onClick={handleNavToProfile}>Далее<img src={imgButtonNext} alt="next"></img></button>
		</div>
	);
}

export default RegistrationPassword