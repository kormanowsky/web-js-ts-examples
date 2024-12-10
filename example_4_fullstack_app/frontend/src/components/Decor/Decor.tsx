import React from "react";

import decor from './assets/decor.png';

import './Decor.css';

export const Decor: React.FC = () => {
    return <img className="decor" src={decor} />
};