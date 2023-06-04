import Card from './iterm';
import {usestate} from 'react';
import axios from 'axios';
import React,{useEffect, useReducer} from 'react';

function App(){
    const [listProduct, setlistProduct]= usestate([]);
    const [type, setType]= usestate('');
    const getData= () => {
        axios
        .get ('')
        .then((res))=>{
            
        }
    }
}