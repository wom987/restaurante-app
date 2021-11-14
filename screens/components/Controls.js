import React from "react";
import { TouchableOpacity, Image } from "react-native";
import Styles from "../Util";
const Controls = (props) => {
  return (
    <TouchableOpacity
      style={[
        Styles.btnControls, props.control=="plus"?
        { backgroundColor: "#FCC636", marginStart: 15 }:{ marginEnd: 15 },
      ]}
      onPress={props.action}
    >
      <Image
        source={props.image}
        style={Styles.imageControl}
      />
    </TouchableOpacity>
  );
};
export default Controls;
