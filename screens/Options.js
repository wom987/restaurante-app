import React from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

function Options() {
  const navigation = useNavigation();

  return (
    <View style={style.item}>
      <TouchableHighlight
        onPress={() => navigation.navigate("Product")}
        underlayColor="white"
        style={style.optionItem}
      >
        <ItemShadow>
          <View style={style.categoryCard}>
            <Image
              source={require("./../assets/main.png")}
              style={style.optionIcon}
            />
            <Text style={style.text}>Menu</Text>
          </View>
        </ItemShadow>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => navigation.navigate("Pedidos")}
        underlayColor="white"
        style={style.optionItem}
      >
        <ItemShadow>
          <View style={style.categoryCard}>
            <Image
              source={require("./../assets/main.png")}
              style={style.optionIcon}
            />
            <Text style={style.text}>Mis pedidos</Text>
          </View>
        </ItemShadow>
      </TouchableHighlight>
    </View>
  );
}

export default Options;

const ItemShadow = styled.View`
  margin: 5px;
  border-radius: 30px;
  box-shadow: 0 0 18px #ccc;
  background-color: #fafafa;
  width: 100%;
  height: 170px;
  padding: 20px 0px 20px 20px;
`;

const style = StyleSheet.create({
  item: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    marginEnd: 15,
    marginStart: 15,
  },
  optionIcon: {
    width: 170 / 2,
    height: 123 / 2,
  },
  optionItem: {
    height: "45%",
    width: "45%",
    margin: "2%",
  },
  text: {
    color: "#000",
    fontWeight: "bold ",
    fontSize: 22,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});
