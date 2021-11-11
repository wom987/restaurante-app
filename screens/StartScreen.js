import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Styles from "./Util";
import Button from "./Components/Button";

export class StartScreen extends Component {
  render() {
    return (
      <View style={Styles.content}>
        <Image source={require("../assets/logo.png")} style={Styles.image} />
        <Text style={Styles.header}>Restaurante Sin nombre</Text>
        <Text style={Styles.paragraph}>Sera un gusto atenderle</Text>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("LoginScreen")}
          text="INICIAR SESSION"
        />
        <Button
          mode="outlined"
          onPress={() => navigation.navigate("RegisterScreen")}
          text="REGISTRARSE"
        />
      </View>
    );
  }
}

export default StartScreen;
