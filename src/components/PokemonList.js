import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";
import PokemonCard from "./PokemonCard";

const PokemonList = (props) => {
  const { pokemons, loadPokemon, IsNext } = props;
  //console.log(props.pokemons)
  const loadMore = () => {
    loadPokemon();
  };
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContainer}
      onEndReached={IsNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        IsNext && (
          <ActivityIndicator size="large" style={styles.spinner} color="#000" />
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
    marginTop:Platform.OS === "android" ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 80 : 60,
  },
});

export default PokemonList;
