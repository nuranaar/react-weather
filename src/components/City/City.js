import React from 'react'
import "./City.css"

export default function City(props) {
    let temp;
    switch (props.degree) {
        case 'kelvin':
            temp = Math.round(props.temp) + "K";
            break;
        case 'celcius':
            temp = Math.round(props.temp - 273.15) + "°C";
            break;
        case 'fahrenheit':
            temp = Math.round((props.temp - 273.15) * 9 / 5 + 32) + "°F";
            break;
        default:
            temp = props.temp;
            break;
    }
    return (
        <div>
            <button className='delete' onClick={props.clicked}> - </button>
            <span>{props.name} {temp} </span>
        </div>
    )
}
