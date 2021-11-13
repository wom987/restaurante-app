import React, { Component } from "react";
import { Text, View, Pressable, TextInput } from "react-native";
import Styles from "../Util";

const Input = (props) => {
  return (
    <View style={{ width: "100%" }}>
      <Text style={Styles.label}>{props.title}</Text>
      <Text style={[Styles.error,{color:"red"}]}>{props.error}</Text>
      <TextInput secureTextEntry={props.password} style={[Styles.textInput,{marginLeft:1}]} placeholder={props.title} onChangeText={props.onTextChange} />
    </View>
  );
};
export default Input;
