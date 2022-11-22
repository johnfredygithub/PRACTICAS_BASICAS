import React from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import getColorBypokemonType from "../utils/getColorBypokemonType";
import { capitalize } from "lodash";
import { useNavigation } from "@react-navigation/native";
////COMPONENT
const PokemonCard = (props) => {
  const { pokemon } = props;
  const pokemonColor = getColorBypokemonType(pokemon.type);
  ///console.log(pokemonColor);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles }; ////estilos color

  const navigation = useNavigation(); ///

  const goToPokemon = () => {
    navigation.navigate("Pokemon", {id:pokemon.id});////screens pokemon 
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image}></Image>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

////stylos
const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "white",
    fontSize: 11,
  },
  name: {
    color: "#fff",
    fontWeight: "bottom",
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});

export default PokemonCard;
