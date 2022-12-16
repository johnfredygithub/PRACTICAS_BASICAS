import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavoriteScreen from "../screens/Favorite";
import PokemonScreen from "../screens/Pokemon";
const Stack = createStackNavigator();

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "Favoritos",
        }}
      />
       <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ title: "", headerTransparent: true }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default FavoriteNavigation;
