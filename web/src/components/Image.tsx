import React from 'react';
import "./App.css";


interface ImageProps {
    letters: string,
    sex: string
}

const Image: React.FC<ImageProps> = ({ letters, sex }) => (
    <div className="idcard-image">
        <img src={`./assets/${sex.toLowerCase() === 'm' ? 'male.png' : 'female.png'}`} alt="" />
        <p>{letters}</p>
    </div>
);

export default Image;
