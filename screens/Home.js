import React from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

const borderSize = 100;
const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View style={style.container}>
      <Image
        source={require("./../assets/main-image.jpg")}
        style={style.imageMain}
      />
      <View style={style.items}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableHighlight
            onPress={() => navigation.navigate("Product")}
            underlayColor="white"
            style={style.touch}
          >
            <Image
              source={require("./../assets/menu-circle.jpg")}
              style={style.image}
            />
          </TouchableHighlight>
          <Text style={style.text}>Menu</Text>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableHighlight
            onPress={() => navigation.navigate("Pedidos")}
            underlayColor="white"
            style={style.touch}
          >
            <Image
              source={require("./../assets/pedido-circle.jpg")}
              style={style.image}
            />
          </TouchableHighlight>
          <Text style={style.text}>Mis pedidos</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableHighlight
            onPress={() => {
              //updated the state with the user id
              dispatch({
                type: "USER/REMOVEID",
                payload: {
                  userId: "",
                },
              });
              navigation.navigate("StartScreen");
            }}
            underlayColor="white"
            style={style.touch}
          >
            <Image
              source={require("./../assets/logout.png")}
              style={style.image}
            />
          </TouchableHighlight>
          <Text style={style.text}>Salir</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

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

    backgroundColor: "white",
    alignItems: "center",
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
  items: {
    flexDirection: "row",
  },
});
