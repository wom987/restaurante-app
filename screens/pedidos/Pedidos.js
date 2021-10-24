import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Item from "./Item";
import PedidosService from "../services/PedidosService";
import styled from "styled-components/native";

export default function Pedidos() {
  let pedidos = PedidosService;
  const pedidosList = (pedidos) => {
    console.log(pedidos);
    console.log("pedidos: ");
    return pedidos.map((c) => {
      return <Item pedido={c} />;
    });
  };

  return (
    <View style={style.parent}>
      <Title>
        <Text style={style.text}>Pedidos recientes</Text>
      </Title>

      {pedidosList(pedidos)}
    </View>
  );
}

const Title = styled.View`
  margin: 5px;
  border-radius: 10px;
  box-shadow: 0 0 18px #ccc;
  background-color: #fafafa;
  width: 95%;
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
