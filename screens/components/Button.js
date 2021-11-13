import React, { Component } from "react";
import { Text, View, Pressable } from "react-native";
import Styles from "../Util";

const Button = (props) => {
  return (
    <Pressable style={[{ width: "100%" }]} onPress={props.onPress}>
      <View
        style={[
          Styles.content,
          Styles.buttonStyle,
          props.mode === "contained"
            ? {
                backgroundColor: "#560CCE",
              }
            : {
                backgroundColor: "#fff",
              },
        ]}
      >
        <Text
          style={[
            Styles.buttonText,
            props.mode === "outlined"
              ? {
                  color: "#560CCE",
                }
              : {
                  color: "#fff",
                },
          ]}
        >
          {props.text}
        </Text>
      </View>
    </Pressable>
  );
};
export default Button;
