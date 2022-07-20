import React from 'react';
import './BlueColor.css';
import Header from '../../Header/Header';
import Promo from '../Promo/Promo';

function BlueColor({handleClick}) {
    return (
        <div className="blue-color">
            <Header isActive={false}/>
            <Promo handleClick={handleClick}/>
        </div>
    );
}

export default BlueColor;