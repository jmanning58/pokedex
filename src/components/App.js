import Pokemon from '../Pokemon';

//Stateful components have their own state
// The App component is going to be stateful because it will hold states of Pokemon data
import React, { Component } from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';

//Importing the stylesheet at the top to add the styles of our components
import './styles/App.css';

//Create a new class App that extends Component
class App extends Component {

  //A constructor is required to initialize the state
  constructor() {

    //In the constructor always call the super() function, since it's being extended from
    super();

    //Declare the initial state
    this.state = {
      pokemon: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
      const pokemon = new Pokemon(data);
      this.setState({ pokemon });
    })
    .catch(err => console.log(err));
  }

  //Always returns jsx syntax, a mix of javaScript and HTML
  render() {

    //Can only return one element so we need to create a parent element and nest children inside
    // returning a nested element we need to wrap it within parentheses
    return (

      //All components that you want to render are placed as HTML tags
      // Place the PokeList component as a self-closing HTML tag inside the parent element
      <div className = "App">
        <PokeList handleOnClick = {this.handleOnClick} />
        <DetailView pokemon = {this.state.pokemon} />
      </div>
    );
  }
}

export default App;