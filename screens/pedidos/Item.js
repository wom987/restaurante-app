import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import db from "../../assets/database/database-connection";

export default function Item(props) {
  const navigation = useNavigation();
  const productsArray = props.pedido.products;

  const currency = "$ ";
  return (
    <TouchableHighlight
      onPress={() => {}}
      underlayColor="white"
      style={{ width: "90%" }}
    >
      <ItemShadow>
        <Text style={style.date}>{props.pedido.fecha}</Text>
        <View style={style.item}>
          <Text style={style.prices}>{currency + props.pedido.precio}</Text>
        </View>
      </ItemShadow>
    </TouchableHighlight>
  );
}

const ItemShadow = styled.View`
  margin: 5px;
  border-radius: 30px;
  box-shadow: 0 0 18px #ccc;
  background-color: #fafafa;
  width: 95%;
  padding: 20px 0px 20px 20px;
`;

const style = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  prices: {
    marginHorizontal: 10,
    color: "#F66E2F",
    fontSize: 23,
    fontWeight: "bold",
  },
  date: {
    color: "#212121",
    fontWeight: "bold",
    fontSize: 15,
    borderRadius: 30,
  },
});
