import '../style/header.css';
import Cart from '../Cart';
import Admin from './Admin';
import { Routes,Route} from "react-router-dom";
import React from 'react';

// Các thành phần React và mã khác ở đây


class header extends React.Component {
  render() {
    return (
        <div className='header'>
            <img className='img' src='https://www.sacvang.com/data/02/logo-banh-kem-07.jpg'></img>
            <div className='menu'>
              <ul >
                <li>
                    <a href="/">TRANG CHỦ</a>
                </li>
                <li>
                  <a href="/Admin">ADMIN</a>
                </li>
              </ul>
            </div>
        </div>
        
    );
  }
}

export default header;
