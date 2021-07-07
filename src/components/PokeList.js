//Stateless component, just regular javaScript functions that return jsx
// We don't need to create a class here, so we don't have to import the Component class

import React from 'react';
import PokeCell from './PokeCell';
import { pokeClasses } from '../pokeClasses';
import './styles/PokeList.css';

const PokeList = ({ handleOnClick }) => {

    //Apply the array prototype map to the pokeClasses array
    const cells = pokeClasses.map(pokeClass => {

        //For each element of the array return a PokeCell tag
        // then store this array of PokeCells in a new variable called 'cells'
        return (
            <PokeCell
                key = {pokeClass.id}
                pokeClass = {pokeClass}
                handleOnClick = {handleOnClick}
            />
        );
    });

    return (

        //Rendering cells in the list by placing them inside the parent element as a HTML element
        <section className = "poke-list">
            {cells}
        </section>
    )
}

export default PokeList;