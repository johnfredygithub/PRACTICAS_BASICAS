import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NoLogged = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        PARA VER ESTA PANTALLA TIENES QUE INICIAR SESSION
      </Text>
      <Button
        title="IR AL LOGIN "
        onPress={() => navigation.navigate("Account")}
      ></Button>
    </View>
  );
};
export default NoLogged;
const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 50,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
});
