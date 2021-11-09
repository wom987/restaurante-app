import React from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const borderSize = 100;

function Options() {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Image
        source={require("./../assets/main-image.jpg")}
        style={style.imageMain}
      />
      <View style={{ alignSelf: "flex-start" }}>
        <TouchableHighlight
          onPress={() => navigation.navigate("Product")}
          underlayColor="white"
          style={style.touch}
        >
          <Image source={require("./../assets/main.png")} style={style.image} />
        </TouchableHighlight>
        <Text style={style.text}>Menu</Text>
      </View>

      <View style={{ alignSelf: "flex-end" }}>
        <TouchableHighlight
          onPress={() => navigation.navigate("Pedidos")}
          underlayColor="white"
          style={style.touch}
        >
          <Image source={require("./../assets/main.png")} style={style.image} />
        </TouchableHighlight>
        <Text style={style.text}>Mis pedidos</Text>
      </View>
    </View>
  );
}

export default Options;

const style = StyleSheet.create({
  imageMain: {
    marginTop: "10%",
    width: "90%",
    height: "60%",
    borderRadius: "30px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
  },
  touch: {
    width: borderSize,
    height: borderSize,
    borderRadius: borderSize / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: borderSize * 0.8,
    height: borderSize * 0.8,
    borderRadius: (borderSize * 0.8) / 2,
  },
  text: {
    color: "#000",
    fontWeight: "bold ",
    fontSize: 22,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
