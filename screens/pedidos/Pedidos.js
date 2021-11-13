import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Item from "./Item";
import firebase from "../../database/Db";
import styled from "styled-components/native";
import NavigationButtoms from "../components/NavigationButtoms";
import db from "../../assets/database/database-connection";
import { useSelector } from "react-redux";
export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const userId = useSelector((state) => state);

  useEffect(() => {
    let isMounted = true;
    firebase.db.collection("Orders").onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.docs.forEach((doc) => {
        let price = doc.data().payment.total;
        const { dateTime, products } = doc.data();
        if (doc.data().user == userId.userID) {
          items.push({
            fecha: dateTime.replace("T", " "),
            precio: price,
            products,
            id: doc.id,
          });
        }
      });
      if (isMounted) setPedidos(items);
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

  console.log(pedidos);
  //console.log(userId);
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <NavigationButtoms />
      <View style={style.parent}>
        <Title>
          <Text style={style.text}>Pedidos recientes</Text>
        </Title>
        {pedidos.length > 0 ? (
          pedidosList(pedidos)
        ) : (
          <Text style={style.prices}>No hay pedidos recientes</Text>
        )}
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
  prices: {
    marginHorizontal: 10,
    color: "#F66E2F",
    fontSize: 23,
    fontWeight: "bold",
  },
});
