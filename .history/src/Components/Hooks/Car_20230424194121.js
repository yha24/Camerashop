import { useState } from 'react';
import { ReactDOM } from 'react-dom/client';

function Car(){
    const[car,setCar] = userState({
        brand:'Ford',
        model:'Mustang',
        year:'1964'
    })

    return(
        <>
        <h3>My{brand}</h3>
        <p>
            It is a {color} {model} from {year}</p></>
    )
}