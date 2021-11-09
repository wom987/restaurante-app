import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Item from "./Item";
import firebase from "../../database/Db";
import styled from "styled-components/native";
import NavigationButtoms from "../components/NavigationButtoms";
import db from "../../assets/database/database-connection";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    let isMounted = true;
    firebase.db.collection("Orders").onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.docs.forEach((doc) => {
        let price = doc.data().payment.total;
        const { dateTime, products } = doc.data();
        items.push({
          fecha: dateTime.replace("T", " "),
          precio: price,
          products,
          id: doc.id,
        });
      });
      if (isMounted) setPedidos(items);
    });

    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Products'",
        [],
        function (tx, res) {
          if (res.rows.length == 0) {
            txn.executeSql("DROP TABLE IF EXISTS Products", []);
            txn.executeSql(
              "CREATE TABLE IF NOT EXISTS Products(product_id INTEGER PRIMARY KEY AUTOINCREMENT, idPro VARCHAR(100), nameProduct VARCHAR(100), imageUri VARCHAR(200), priceProduct DECIMAL(10,2), descriptionProduct VARCHAR(500), quantityProduct INTEGER)",
              []
            );
          }
        }
      );
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const pedidosList = (pedidos) => {
    return pedidos.map((c) => {
      return <Item pedido={c} key={c.id} />;
    });
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <NavigationButtoms />
      <View style={style.parent}>
        <Title>
          <Text style={style.text}>Pedidos recientes</Text>
        </Title>

        {pedidosList(pedidos)}
      </View>
    </View>
  );
}

const Title = styled.View`
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 18px #ccc;
  background-color: #fafafa;
  width: 85%;
  padding: 20px 0px 20px 20px;
`;

const style = StyleSheet.create({
  text: {
    color: "#212121",
    fontWeight: "bold",
    fontSize: 20,
  },
  parent: {
    alignItems: "center",
    justifyContent: "center",
  },
});
