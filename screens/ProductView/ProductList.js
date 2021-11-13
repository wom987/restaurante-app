import React from "react";
import { View, StyleSheet } from "react-native";
import ProductItem from "./ProductItem";

function ProductList(props) {
  return (
    <View style={style.item}>
      <ProductItem data={props.data} />
    </View>
  );
}

export default ProductList;

const style = StyleSheet.create({
  item: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    marginEnd: 15,
    marginStart: 15,
  },
});
