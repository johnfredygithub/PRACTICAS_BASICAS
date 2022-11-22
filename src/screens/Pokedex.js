import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { getPokemonApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  useEffect(() => {
    (async () => {
      ////funcion autoejecutable
      await loadPokemon();
    })();
  }, []);

  /////obtener pokemon
  const loadPokemon = async () => {
    try {
      const response = await getPokemonApi(nextUrl);
      setNextUrl(response.next);
      console.log(response);

      /////details url
      const pokemonArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
        ///  console.log("aaaaaaaaaaaaaaa", pokemonArray);
      }
      setPokemons([...pokemons, ...pokemonArray]);
      //      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList IsNext={nextUrl} pokemons={pokemons} loadPokemon={loadPokemon}></PokemonList>
    </SafeAreaView>
  );
};

export default Pokedex;
