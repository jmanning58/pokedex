//Component that will act as a template for each of the 150 Pokemon that are going to be rendered in the PokeList

import React from 'react';
import sprites from '../assets/sprites.png';
import './styles/PokeCell.css';

//Create a new function called PokeCell holding clickable image
const PokeCell = ({ pokeClass, handleOnClick }) => {
    const { id, backgroundPosition } = pokeClass;
    const style = { backgroundImage: `url(${sprites})`, 
    backgroundPosition };

    return <button onClick = {() => handleOnClick(id)} 
    style = {style} className = "poke-cell"></button>
};

export default PokeCell;