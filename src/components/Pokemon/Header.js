import React from "react";
import { View, SafeAreaView, Text, Image, StyleSheet } from "react-native";
import { capitalize } from "lodash";
import getColorBypokemonType from "../../utils/getColorBypokemonType";

const Header = (props) => {
  const { name, order, image, type } = props;
  const color = getColorBypokemonType(type);
  
  const bgStyles = [{ backgroundColor:color, ...styles.bg }];
  return (
    <>
      <View style={bgStyles}></View>
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View styles={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 350,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  bgStyles: {
    flex: 1,
    justifyContent: "center",
    alingItems: "center",
    top: 30,
  },
  content: {
    marginHorizontal: 50,
    marginTop: 30,
  },
  header: {
    flexDirection:"row",
    justifyContent:"space-between",
    alingItems:"center",
    paddingTop:27
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alingItems: "center",
    top: 30,
  },

  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
});

export default Header;
