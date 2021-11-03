import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { DatabaseConnection } from "../../assets/database/database-connection";

export default function Item(props) {
  const db = DatabaseConnection.getConnection();
  const navigation = useNavigation();
  const productsArray = props.pedido.products;
  const submitAgain = () => {
    cleanCart();
    productsArray.forEach((i) => {
      addProduct(i);
    });

    navigation.navigate("Car");
  };

  const addProduct = (product) => {
    db.transaction(function (tx) {
      tx.executeSql(
        "INSERT INTO Products (idPro, nameProduct, imageUri, priceProduct, descriptionProduct, quantityProduct) VALUES (?,?,?,?,?,?)",
        [
          product.id,
          product.name,
          product.image,
          product.price * product.quantity,
          product.description,
          product.quantity,
        ],
        () => {}
      );
    });
  };

  function cleanCart() {
    db.transaction((tx) => {
      tx.executeSql("DELETE FROM  Products", [], () => {});
    });
  }

  const currency = "$ ";
  return (
    <TouchableHighlight onPress={() => {}} underlayColor="white">
      <ItemShadow>
        <Text style={style.date}>{props.pedido.fecha}</Text>
        <View style={style.item}>
          <Text style={style.prices}>{currency + props.pedido.precio}</Text>
          <TouchableHighlight
            onPress={() => {
              submitAgain();
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
  date: {
    color: "#212121",
    fontWeight: "bold",
    fontSize: 15,
    borderRadius: 30,
  },
});
