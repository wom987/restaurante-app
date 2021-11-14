import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import db from "../../assets/database/database-connection";
import firebase from "../../database/Db";
//redux import
import { useDispatch, useSelector } from "react-redux";

function Payment({ route }) {
  //getting userID from redux
  const userId = useSelector((state) => state);
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  const navigation = useNavigation();

  const red = "#ffc4c4";
  const gray = "#f5f8f9";

  const [expiryDate, setExpiryDate] = useState("");
  const [validExpiryDate, setValidExpiryDate] = useState(true);

  const [card, setCard] = useState("");
  const [validCard, setValidCard] = useState(true);

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(true);

  const [cvv, setCvv] = useState("");
  const [validCvv, setValidCvv] = useState(true);

  const { subtotal, iva, total, products } = route.params;
  const handleExpiryDate = (date) => {
    setExpiryDate(date);
  };

  const handleCardChange = (value) => {
    let formattedVal = value.replace(/\D/g, "");
    setCard(formattedVal);
  };

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleCvvChange = (value) => {
    setCvv(value);
  };

  function cleanCart() {
    db.transaction((tx) => {
      tx.executeSql("DELETE FROM  Products", [], (tx, results) => {
        navigation.navigate("Product");
      });
    });
  }

  const updateVal = () => {
    if (expiryDate.length != 0) setValidExpiryDate(true);
    else setValidExpiryDate(false);

    if (card.length != 0) setValidCard(true);
    else setValidCard(false);

    if (name.length != 0) setValidName(true);
    else setValidName(false);

    if (cvv.length != 0) setValidCvv(true);
    else setValidCvv(false);
  };

  const submit = () => {
    if (
      expiryDate.length != 0 &&
      card.length != 0 &&
      name.length != 0 &&
      cvv.length != 0
    ) {
      let lista = products.map((i) => {
        return {
          id: i.idPro,
          description: i.descriptionProduct,
          image: i.imageUri,
          name: i.nameProduct,
          price: i.priceProduct,
          quantity: i.quantityProduct,
        };
      });

      const now = new Date();
      const offsetMs = now.getTimezoneOffset() * 60 * 1000;
      const dateLocal = new Date(now.getTime() - offsetMs);
      const str = dateLocal.toISOString().slice(0, 19);

     

      let payment = {
        total: total,
        name: name,
        cardNumber: card,
        expiryDate: expiryDate,
        cvv: cvv,
      };

      let pedido = {
        user: userId.userID,
        dateTime: str,
        products: lista,
        payment: payment,
      };

      try {
        firebase.db.collection("Orders").add(pedido);
        cleanCart();
        navigation.navigate("Product");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View
      style={{
        backgroundColor: "#fff",
        height: windowHeight,
        width: windowWidth,
        padding: 20,
        paddingTop: 5,
      }}
    >
      <Text style={[style.category, { marginBottom: 15 }]}>
        Detalles Del Pedido
      </Text>

      <ItemShadowPrice>
        <View style={style.detail}>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontWeight: "400", fontSize: 15, color: "#A1A1A1" }}>
              Subtotal
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 15, color: "#A1A1A1" }}>
              IVA
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 15, color: "#A1A1A1" }}>
              Domicilio
            </Text>
          </View>

          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 15, color: "#646464" }}
            >
              $ {subtotal}
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 15, color: "#646464" }}
            >
              $ {iva}
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 15, color: "#646464" }}
            >
              $ 0.00
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#646464" }}>
            -------------------------------------
          </Text>
        </View>

        <View style={style.detail}>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontWeight: "400", fontSize: 18, color: "#A1A1A1" }}>
              Total
            </Text>
          </View>

          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 18, color: "#646464" }}
            >
              $ {total}
            </Text>
          </View>
        </View>
      </ItemShadowPrice>

      <Text style={[style.category, { marginBottom: 15, marginTop: 15 }]}>
        Detalles de Pago
      </Text>

      <View style={{ marginTop: 5 }}>
        <Text style={[style.labelText, { color: "#A4A4A4", marginTop: 10 }]}>
          Nombre del Titular
        </Text>
        <ItemShadow style={{ backgroundColor: validName ? gray : red }}>
          <TextInput
            onChangeText={(value) => handleNameChange(value)}
            style={[
              style.textInput,
              { outlineStyle: "none", backgroundColor: validName ? gray : red },
            ]}
            placeholder="Mark Zuckerberg"
            placeholderTextColor="#CFD0CF"
          />
        </ItemShadow>
      </View>
      <View>
        <Text style={[style.labelText, { color: "#A4A4A4", marginTop: 10 }]}>
          Número de Tarjeta
        </Text>
        <ItemShadow style={{ backgroundColor: validCard ? gray : red }}>
          <TextInput
            style={[
              style.textInput,
              { outlineStyle: "none", backgroundColor: validCard ? gray : red },
            ]}
            maxLength={16}
            value={card}
            onChangeText={(value) => handleCardChange(value)}
            placeholder="####-####-####-####"
            placeholderTextColor="#CFD0CF"
          />
        </ItemShadow>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ marginStart: 15 }}>
          <Text
            style={[
              style.labelText,
              { color: "#A4A4A4", marginTop: 5, marginBottom: 2 },
            ]}
          >
            Expiración
          </Text>
          <ItemShadow style={{ backgroundColor: validExpiryDate ? gray : red }}>
            <TextInput
              style={[
                style.textInput,
                {
                  outlineStyle: "none",
                  width: 100,
                  backgroundColor: validExpiryDate ? gray : red,
                },
              ]}
              maxLength={4}
              onChangeText={(value) => handleExpiryDate(value)}
              placeholder="MM-YY"
              placeholderTextColor="#CFD0CF"
            />
          </ItemShadow>
        </View>

        <View style={{ marginStart: 15 }}>
          <Text
            style={[
              style.labelText,
              { color: "#A4A4A4", marginTop: 5, marginBottom: 2 },
            ]}
          >
            CVV
          </Text>
          <ItemShadow style={{ backgroundColor: validCvv ? gray : red }}>
            <TextInput
              style={[
                style.textInput,
                {
                  outlineStyle: "none",
                  width: 100,
                  backgroundColor: validCvv ? gray : red,
                },
              ]}
              maxLength={4}
              onChangeText={(value) => handleCvvChange(value)}
              placeholder="123"
              placeholderTextColor="#CFD0CF"
            />
          </ItemShadow>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={[style.add]}
          onPress={() => {
            updateVal();
            submit();
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 22 }}> Confirmar </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.add, style.cancel]}
          onPress={() => {
            cleanCart();
          }}
        >
          <Text style={{ fontWeight: "350", fontSize: 15, color: "#A4A4A4" }}>
            Cancelar todo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Payment;

const ItemShadow = styled.View`
  margin: 8px;
  border-radius: 10px;
  box-shadow: 0 0 0px #ccc;
`;

const ItemShadowPrice = styled.View`
  border-radius: 10px;
  box-shadow: 0 0 0px #ccc;
  background-color: #f5f8f9;
  width: 100%;
  height: 210px;
  padding: 5px 20px 5px 20px;
`;

const style = StyleSheet.create({
  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  cancel: {
    backgroundColor: "#ffff",
    borderWidth: 0.5,
    borderColor: "#A4A4A4",
  },
  add: {
    width: "48%",
    height: 55,
    padding: 15,
    borderRadius: 18,
    backgroundColor: "#FCC636",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  category: {
    fontSize: 24,
    fontWeight: "bold",
    marginStart: 5,
    marginTop: 10,
  },
  textInput: {
    width: "100%",
    height: 28,
    marginBottom: 10,
    paddingLeft: 25,
    padding: 10,
    borderWidth: 0,
    borderRadius: 20,
    marginTop: 10,
    color: "#38304B",
    backgroundColor: "#F5F8F9",
    fontWeight: "500",
  },

  labelText: {
    fontSize: 15,
    marginStart: 8,
    fontWeight: "400",
  },
});
