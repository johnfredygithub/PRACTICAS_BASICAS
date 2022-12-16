import { set } from "lodash";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { addPokemonFavoriteApi,RemovePokemonFavoriteApi} from "../../api/favorite";
import { isPokemonFavoriteApi } from "../../api/favorite";

const Favorite = (props) => {
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);
  const { id } = props;

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id,reloadCheck]);

  
  const onReloadFavorite = () => {
    setReloadCheck((prev) => !prev);
  };

  
  const addFavorite = async () => {
    try {
      await addPokemonFavoriteApi(id);
      onReloadFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  
  const removeFavorite = async() => {
  try {
    await RemovePokemonFavoriteApi(id)
    onReloadFavorite();
  } catch (error) {
    console.log(error);
  }    
  };

  return (
    <Icon
      name={isFavorite ? "heart" : "heart-outline"}
      color="#fff"
      size={30}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    ></Icon>
  );
};

export default Favorite;
