import React, { useState } from 'react';


const BookingForm = ({ onSubmit }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [passengers, setPassengers] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!from || !to || !date || !passengers) {
            setIsValid(false); 
            return;
        }

        setIsValid(true);
        onSubmit({ from, to, date, passengers }); 
    };

    return (
        <form className="booking-bar" onSubmit={handleSubmit}>
            <div>
                <select className="select_from" value={from} onChange={(e) => setFrom(e.target.value)} style={{ borderColor: !isValid && !from ? 'red' : '' }}>
                    <option value="">Откуда</option>
                    <option value="Минск">Минск</option>
                    <option value="Гродно">Гродно</option>
                    <option value="Брест">Брест</option>
                    <option value="Могилев">Могилев</option>
                    <option value="Гомель">Гомель</option>
                    <option value="Солигорск">Солигорск</option>
                    <option value="Мозырь">Мозырь</option>
                    <option value="Орша">Орша</option>
                    <option value="Барановичи">Барановичи</option>
                </select>
            </div>
            <div>
                <select className="select_to" value={to} onChange={(e) => setTo(e.target.value)} style={{ borderColor: !isValid && !to ? 'red' : '' }}>
                    <option value="">Куда</option>
                    <option value="Минск">Минск</option>
                    <option value="Гродно">Гродно</option>
                    <option value="Брест">Брест</option>
                    <option value="Могилев">Могилев</option>
                    <option value="Гомель">Гомель</option>
                    <option value="Солигорск">Солигорск</option>
                    <option value="Мозырь">Мозырь</option>
                    <option value="Орша">Орша</option>
                    <option value="Барановичи">Барановичи</option>
                </select>
            </div>
            <div>
                <input type="date" className="select_date" value={date} onChange={(e) => setDate(e.target.value)} style={{ borderColor: !isValid && !date ? 'red' : '' }} />
                Дата
            </div>
            <div>
                <select id="select_pas" value={passengers} onChange={(e) => setPassengers(e.target.value)} style={{ borderColor: !isValid && !passengers ? 'red' : '' }}>
                    <option value="">Пассажиры</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <button type="submit" className="search-button" id="search-button">Поиск</button>
        </form>
    );
};

export default BookingForm;