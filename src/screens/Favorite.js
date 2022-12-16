import React, { useState, useCallback } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonFavoriteApi } from "../api/favorite";
import { getPokemonDetailsApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";
import useAuth from "../hooks/useAuth";
import Nologged from "../components/Pokemon/NoLogged";

const Favorite = () => {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonFavoriteApi();
          console.log("ffffffffffffffff", response);
          const pokemonArray = [];
          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailsApi(id);
            pokemonArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }
          setPokemons(pokemonArray);
        })();
      }
      console.log(pokemons);
    }, [auth])
  );

  

  return !auth ? (
    <Nologged />
  ) : (
    <PokemonList pokemons={pokemons}> </PokemonList>
  );
};

export default Favorite;
