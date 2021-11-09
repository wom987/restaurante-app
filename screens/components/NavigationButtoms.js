import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NavigationButtoms() {
  const navigation = useNavigation();

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginStart: 20,
          backgroundColor: "white",
          marginEnd: 20,
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={[styles.buttonStyle, { alignSelf: "flex-start" }]}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            source={require("../../assets/back.png")}
            style={{ height: 24, width: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonStyle, { alignSelf: "flex-end" }]}
          onPress={() => {
            navigation.navigate("Car");
          }}
        >
          <Image
            source={require("../../assets/shopping.png")}
            style={{ height: 24, width: 24 }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 50,
    height: 50,
    padding: 5,
    borderRadius: 15,
    color: "#000",
    fontWeight: "bold",
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
