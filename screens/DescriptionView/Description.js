import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
//components
import Controls from "../components/Controls";
import FooterProduct from "../components/FooterProduct";
import db from "../../assets/database/database-connection";
export default function Description({ route }) {
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();

  const [total, setTotal] = useState(1);

  const increase = () => {
    setTotal(total + 1);
  };

  const decrease = () => {
    if (total != 1) {
      setTotal(total - 1);
    } else {
      setTotal(1);
    }
  };

  const { idProduct, nameProduct, imageUri, priceProduct, descriptionProduct } =
    route.params;

  let totalPay =
    parseFloat(JSON.parse(JSON.stringify(priceProduct))) * parseFloat(total);

  const addProduct = () => {
    db.transaction(function (tx) {
      tx.executeSql(
        "SELECT * FROM Products WHERE nameProduct=?",
        [nameProduct],
        (tx, results) => {
          if (results.rows.length == 0) {
            tx.executeSql(
              "INSERT INTO Products (idPro, nameProduct, imageUri, priceProduct, descriptionProduct, quantityProduct) VALUES (?,?,?,?,?,?)",
              [
                idProduct,
                nameProduct,
                imageUri,
                totalPay.toFixed(2),
                descriptionProduct,
                parseInt(total),
              ],
              (tx, results) => {
                navigation.navigate("Car");
              }
            );
          } else {
            let quantity;
            let previousTotal;
            for (let i = 0; i < results.rows.length; ++i) {
              quantity = results.rows.item(i).quantityProduct;
              previousTotal = results.rows.item(i).priceProduct;
            }

            let totalPayAdditional =
              parseFloat(
                JSON.parse(JSON.stringify(priceProduct.substring(1)))
              ) * parseFloat(total);
            let finaltotal = totalPayAdditional + previousTotal;
            let newQuantityTotal = quantity + total;

            tx.executeSql(
              "UPDATE Products SET priceProduct=?, quantityProduct=? WHERE nameProduct=?",
              [finaltotal, newQuantityTotal, nameProduct],
              (tx, results) => {
                navigation.navigate("Car");
              }
            );
          }
        }
      );
    });
  };

  return (
    <ScrollView>
      <View style={{ height: windowHeight, backgroundColor: "#ffff" }}>
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: "row-reverse" }}>
            <TouchableOpacity
              style={style.buttonStyle}
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
          <View style={style.cardImage}>
            <Image source={imageUri} style={style.imageMain} />
          </View>
          <Text style={style.productName}>
            {JSON.parse(JSON.stringify(nameProduct))}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={style.prices}>
              {JSON.parse(JSON.stringify(priceProduct))}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Controls
              control="less"
              action={decrease}
              image={require("../../assets/minus.png")}
              />
              <Text style={style.number}>{total}</Text>
              <Controls
              control="plus"
              action={increase}
              image={require("../../assets/plus.png")}
              />
            </View>
          </View>
          <Text style={style.description}>
            {JSON.parse(JSON.stringify(descriptionProduct))}
          </Text>
         <FooterProduct/>
          <TouchableOpacity style={[style.add]} onPress={addProduct}>
            <Text style={{ fontWeight: "bold", fontSize: 22 }}> AGREGAR </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  cardImage: {
    height: 325,
    width: window.width,
    justifyContent: "center",
    alignItems: "center",
  },
  imageMain: {
    height: 300,
    width: 300,
  },
  productName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#212121",
  },
  prices: {
    marginTop: 10,
    color: "#F66E2F",
    fontSize: 30,
    fontWeight: "bold",
  },
  add: {
    width: "100%",
    height: 55,
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#FCC636",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#212121",
  },
  description: {
    marginTop: 15,
    fontSize: 17,
    color: "#979797",
  },
  
});
