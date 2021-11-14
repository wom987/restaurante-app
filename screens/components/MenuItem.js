import React from "react";
import { Text, View, TouchableHighlight,Image } from "react-native";
import Styles from '../Util';
const MenuItem = (props) => {
  return (
    <View style={Styles.menuView}>
      <TouchableHighlight
        onPress={props.onClickAction}
        underlayColor="white"
        style={Styles.touch}
      >
        <Image source={props.source} style={Styles.imageMenuItem} />
      </TouchableHighlight>
      <Text style={Styles.menuItemText}>{props.itemText}</Text>
    </View>
  );
};
export default MenuItem;
