import React, { useState } from "react";
import pokemonList from "./pokemonList";
import { choice, formatPokemon } from "./helpers";

//Select element to choose from common pokemon
function PokemonSelect({ add, pokemon = pokemonList }){
    const [pokeIdx, setPokeIdx] = useState(0);
    const handleChange = e => {
        setPokeIdx(e.target.value);
    };

    return(
        <div>
            <select onChange={handleChange}>
                {pokemon.map((p.idx) => (
                    <option key={idx} value={idx}>
                        {p}
                    </option>
                ))}
            </select>
            <button onClick={() => add(formatPokemon, pokemon[pokeIdx])}>
                Throw Pokeball!
            </button>
            <button onClick = {() => add(formatPokemon, choice(pokemon))}>
                I'm feeling lucky
            </button>
        </div>
    );
}

export default PokemonSelect;