import React from "react";
import { View, Image, Text } from "react-native";
import Styles from "../Util";
const FooterProduct = (props) => {
  return (
    <View
      style={[
        Styles.detailStyle,
        {
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: 15,
          marginTop: 15,
        },
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../../assets/ic_star.png")}
          style={{ height: 24, width: 24 }}
        ></Image>
        <Text style={{ fontWeight: "bold", color: "#212121" }}> 5.0 </Text>
      </View>
      <Text>|</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../../assets/clock.png")}
          style={{ height: 24, width: 24 }}
        ></Image>
        <Text style={{ fontWeight: "bold", color: "#212121" }}> 20 min </Text>
      </View>
    </View>
  );
};
export default FooterProduct;
