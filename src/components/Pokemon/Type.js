import React from "react";
import { View, Text, StyleSheet, ViewBase } from "react-native";
import { map,capitalize } from "lodash";
import getColorBypokemonType from "../../utils/getColorBypokemonType";
const Type = (props) => {
  const { types } = props;
console.log("------------------->",props) 
  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            backgroundColor: getColorBypokemonType(item.type.name),
          }}
        >
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});

export default Type;
