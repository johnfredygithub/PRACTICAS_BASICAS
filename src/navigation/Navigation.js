import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";


import PokedexNavigation from "./PokedexNavigation";
import FavoriteNavigation from "./FavoriteNavigation";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName="pokedex">
      
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size}></Icon>
          ),
        }}
      ></Tab.Screen>
      

      <Tab.Screen
        name="pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeBall(),
        }}
      ></Tab.Screen>
      
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "MI CUENTA",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size}></Icon>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};


function renderPokeBall() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    ></Image>
  );
}

export default Navigation;
