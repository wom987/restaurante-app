import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import styled from "styled-components/native";
import Icon_c from "../components/Icon_c";
import Title_c from "../components/Title_c";
import product from "../services/ProductService";
import { useNavigation } from "@react-navigation/native";

export default function Item(props) {
  const detalles = (idPedido) => {};
  const submitAgain = (pedido) => {};
  const currency = "$ ";
  console.log("props: ");
  console.log(props);

  return (
    <TouchableHighlight onPress={() => {}} underlayColor="white">
      <ItemShadow>
        <Text style={style.date}>{props.pedido.fecha}</Text>
        <View style={style.item}>
          <Text style={style.prices}>{currency + props.pedido.precio}</Text>
          <TouchableHighlight
            style={style.details}
            onPress={() => {
              detalles(props.pedido.detalles);
            }}
            underlayColor="white"
          >
            <Text>...</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              submitAgain(props.pedido);
            }}
            underlayColor="white"
          >
            <Text style={style.again}>Otra vez!</Text>
          </TouchableHighlight>
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
    width: "90%",
  },
  prices: {
    marginHorizontal: 10,
    color: "#F66E2F",
    fontSize: 23,
    fontWeight: "bold",
  },
  again: {
    marginHorizontal: 10,
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "red",
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  details: {
    marginHorizontal: 10,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50 / 2,
    backgroundColor: "green",
  },
  date: {
    color: "#212121",
    fontWeight: "bold",
    fontSize: 15,
    borderRadius: 30,
  },
});
