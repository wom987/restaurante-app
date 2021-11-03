import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Item from "./Item";
import firebase from "../../database/Db";
import styled from "styled-components/native";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
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
      setPedidos(items);
    });
  });

  const pedidosList = (pedidos) => {
    return pedidos.map((c) => {
      return <Item pedido={c} key={c.id} />;
    });
  };

  return (
    <View>
      <Text style={style.text}>Pedidos recientes</Text>
      <View style={style.parent}>

        {pedidosList(pedidos)}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    color: "#212121",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: '#fff',
    marginStart: 20,
    marginEnd: 20,
    marginBottom:20
  },
  parent: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff'
  },
});
