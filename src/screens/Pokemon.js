import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";
import Icon from "react-native-vector-icons/FontAwesome5";
import Favorite from "../components/Pokemon/Favorite";
import useAuth from "../hooks/useAuth";
const Pokemon = (props) => {
  const {
    route: { params },
    navigation,
  } = props;

  const [pokemon, setPokemon] = useState(null);
  const { auth } = useAuth();
  let id = pokemon?.id;

  useEffect(() => {
       navigation.setOptions({
      headerRight: () => auth && <Favorite id={id} />,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="white"
          style={{ marginLeft: 20, fontSize: 25 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params,pokemon]);
  

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;




  
  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types}></Type>
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
};

export default Pokemon;
