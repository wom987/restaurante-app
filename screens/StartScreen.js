import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Styles from "./Util";
import Button from "./components/Button";

const StartScreen = ({ navigation }) => {
  return (
    <View style={Styles.content}>
      <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
        <Image source={require("../assets/logo.png")} style={Styles.image} />
        <Text style={Styles.header}>Restaurante Sin nombre</Text>
        <Text style={Styles.paragraph}>Sera un gusto atenderle</Text>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("LoginSCreen")}
          text="INICIAR SESSION"
        />
        <Button
          mode="outlined"
          onPress={() => navigation.navigate("RegisterScreen")}
          text="REGISTRARSE"
        />
      </View>
    </View>
  );
};

export default StartScreen;
