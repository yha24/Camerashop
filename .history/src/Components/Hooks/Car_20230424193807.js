import { useState } from 'react';
import { ReactDOM } from 'react-dom/client';

function Car(){
    const[brand, setBrand]=useState('Ford');
    const[model, setModel]=useState('Mustang');
    const[year, setYear]=useState('1964');
    const[color, setColor]=useState('red');

    return(
        <>
        <h3>My{brand}</h3>
        <p>
            It is a {color} {model} from </p></>
    )
}