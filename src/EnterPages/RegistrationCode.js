import React from "react";
import { useNavigate } from "react-router";

import imgButtonNext from "../style/img/button-next.png"

const RegistrationCode = () =>{

	const navigate = useNavigate();

	const handleNavToInfo = () =>{
		navigate('/enter/registration-info')
	}

	return(
		<div className="registration">
			<h1>Регистрация</h1>
			<p>Код выслан на +375(хх)ххх-хх-хх</p>
			<input type="number" placeholder="Введите код из SMS"></input>
			<div className="next"><p id="get-new-code">Получить новый код можно через 1мин</p>
			<button type="button" onClick={handleNavToInfo} className="button-next">Далее<img src={imgButtonNext} alt="next"></img></button></div>
		</div>
	);
}

export default RegistrationCode