import { useState } from 'react';
import { ReactDOM } from 'react-dom/client';

function Car(){
    const[car,setCar] = userState({
        brand:'F'
    })

    return(
        <>
        <h3>My{brand}</h3>
        <p>
            It is a {color} {model} from {year}</p></>
    )
}