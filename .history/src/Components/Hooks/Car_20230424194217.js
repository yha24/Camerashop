import { useState } from 'react';
import { ReactDOM } from 'react-dom/client';

function Car(){
    const[car,setCar] = userState({
        brand:'Ford',
        model:'Mustang',
        year:'1964',
        color:'red'
    });

    return(
        <>
        <h3>My{car.brand}</h3>
        <p>
            It is a {car.color} {car.model} from {cảyear}</p></>
    )
}