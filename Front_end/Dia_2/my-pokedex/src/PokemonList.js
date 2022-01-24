import React from "react";
import pokemons from "./data";
import GetImage from "./GetImage";

class PokemonList extends React.Component {
  render () {
    return (
      <div className="allPokes">
        {pokemons.map(poke => (
          <div key={poke.id} className='Pokemon'>
            <div className="info">
            <p>{poke.name}</p>
            <p>{poke.type}</p>
            <p>Average Weight: {poke.averageWeight.value}{poke.averageWeight.measurementUnit}</p>
            </div>
            <GetImage src={poke.image} />
          </div>
        ))}
      </div>
    )
  }
}

export default PokemonList; 