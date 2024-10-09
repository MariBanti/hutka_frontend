import React from 'react';

import imgUtka from './style/img/utka.png'
import imgHelpCircle from './style/img/Help circle.png'
import imgPhone from './style/img/Phone.png'
import imgStar from './style/img/Star.png'
import imgAvatar from './style/img/Generic avatar.png'


const Header = () => {
    return (
        <header>
            <img className="utka_logo" src={imgUtka} alt="Logo" width="70px" />
            <div className="logo">Хутка!</div>
            <nav>
                <div>
                    <img src={imgHelpCircle} height="30px" alt="Помощь" />
                    <a href="#Help">Помощь</a>
                </div>
                <div>
                    <img src={imgPhone} height="30px" alt="Контакты" />
                    <a href="#Contacts">Контакты</a>
                </div>
                <div>
                    <img src={imgStar} height="30px" alt="Акции" />
                    <a href="#Salary">Акции</a>
                </div>
            </nav>
            <img src={imgAvatar} height="50px" alt="Аватар" />
            <button className="registration-button">Регистрация</button>
        </header>
    );
};

export default Header;