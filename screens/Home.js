import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { useDispatch } from "react-redux";
import MenuItem from "./components/MenuItem";
const Home = ({ navigation }) => {
  //redux var
  const dispatch = useDispatch();
  return (
    <View style={style.container}>
      {/* banner image */}
      <Image
        source={require("./../assets/main-image.jpg")}
        style={style.imageMain}
      />
      <View style={style.items}>
        {/* menu Items */}
        <MenuItem
          onClickAction={() => navigation.navigate("Product")}
          source={require("./../assets/menu-circle.jpg")}
          itemText="Menu"
        />
        <MenuItem
          onClickAction={() => navigation.navigate("Pedidos")}
          source={require("./../assets/pedido-circle.jpg")}
          itemText="Mis pedidos"
        />
        <MenuItem
          onClickAction={() => {
            //updated the state with the user id
            dispatch({
              type: "USER/REMOVEID",
              payload: {
                userId: "",
              },
            });
            navigation.navigate("StartScreen");
          }}
          source={require("./../assets/logout.png")}
          itemText="Salir"
        />
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
  items: {
    flexDirection: "row",
  },
});
