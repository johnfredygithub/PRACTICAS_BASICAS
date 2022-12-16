import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";

import useAuth from "../../hooks/useAuth";
import { getPokemonFavoriteApi } from "../../api/favorite";
const UserData = () => {
  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0);
   
  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonFavoriteApi();
          setTotal(size(response));
        } catch (error) {
          setTotal(0)
        }
      })();
    }, [])
  );

  return (
    <View style={styles.content}>
      <View style={styles.TitleBlock}>
        <Text style={styles.title}>WELCOME</Text>
        <Text style={styles.title}>{`${auth.firsname} ${auth.lastname}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth.firsname} ${auth.lastname}`} />
        <ItemMenu title="USERNAME" text={`${auth.username}`} />
        <ItemMenu title="EMAIL" text={`${auth.email}`} />
        <ItemMenu title="TOTAL FAVORITOS" text={total} />
      </View>
      <Button
        title="desconectarse"
        onPress={logout}
        style={styles.btnLogout}
      ></Button>
    </View>
  );
};

export default UserData;

function ItemMenu(props) {
  const { title, text } = props;
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}</Text>
      <Text style={StyleSheet.title}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  TitleBlock: {
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginTop: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnLogout: {
    paddingTop: 20,
  },
});
