import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import ExpiryDateInput from "credit-card-expiry-date";
import { useNavigation } from "@react-navigation/native";
import { DatabaseConnection } from '../../assets/database/database-connection';

const db = DatabaseConnection.getConnection();


function Payment({ route }) {
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    const navigation = useNavigation();

    const [expiryDate, setExpiryDate] = useState({
        value: ""
    });

    const [card, setCard] = useState('');

    const handleExpiryDate = date => {
        setExpiryDate({
            value: date
        });
    };

    function cleanCart() {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM  Products',
                [],
                (tx, results) => {
                    navigation.navigate('Product')
                }
            );
        });
    };

    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setCard(value);
    };


    const {
        subtotal,
        iva,
        total
    } = route.params;

    return (
        <View style={{ backgroundColor: '#fff', height: windowHeight, width: windowWidth, padding: 20, paddingTop: 5 }}>
            <Text style={[style.category, { marginBottom: 15 }]}>Detalles Del Pedido</Text>

            <ItemShadowPrice>
                <View style={style.detail}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontWeight: '400', fontSize: 15, color: '#A1A1A1' }}>Subtotal</Text>
                        <Text style={{ fontWeight: '400', fontSize: 15, color: '#A1A1A1' }}>IVA</Text>
                        <Text style={{ fontWeight: '400', fontSize: 15, color: '#A1A1A1' }}>Domicilio</Text>
                    </View>

                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#646464' }}>$ {subtotal}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#646464' }}>$ {iva}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#646464' }}>$ 0.00</Text>

                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#646464' }}>
                        -------------------------------------
                    </Text>
                </View>

                <View style={style.detail}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontWeight: '400', fontSize: 18, color: '#A1A1A1' }}>Total</Text>
                    </View>

                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#646464' }}>$ {total}</Text>
                    </View>
                </View>
            </ItemShadowPrice>

            <Text style={[style.category, { marginBottom: 15, marginTop: 15 }]}>Detalles de Pago</Text>

            <View style={{ marginTop: 5 }}>
                <Text style={[style.labelText, { color: '#A4A4A4', marginTop: 10 }]}>Nombre del Titular</Text>
                <ItemShadow>
                    <TextInput
                        style={[style.textInput, { outlineStyle: 'none' }]}
                        placeholder='Mark Zuckerberg'
                        placeholderTextColor='#CFD0CF'
                    />
                </ItemShadow>
            </View>
            <View>
                <Text style={[style.labelText, { color: '#A4A4A4', marginTop: 10 }]}>Número de Tarjeta</Text>
                <ItemShadow>
                    <TextInput
                        style={[style.textInput, { outlineStyle: 'none' }]}
                        maxLength={16} value={card}
                        onChange={handleChange}
                        placeholder='####-####-####-####'
                        placeholderTextColor='#CFD0CF'
                    />
                </ItemShadow>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Text style={[style.labelText, { color: '#A4A4A4', marginTop: 5, marginBottom: 10 }]}>Expiración</Text>
                    <View style={{ width: "120 px", marginStart: 5 }}>

                        <ExpiryDateInput
                            label="Expiry Date"
                            onChange={date => handleExpiryDate(date)}
                            value={expiryDate}
                            disabled={false}
                            onBlur={date => handleExpiryDate(date)}
                        />
                    </View>
                </View>
                <View style={{ marginStart: 15 }}>
                    <Text style={[style.labelText, { color: '#A4A4A4', marginTop: 5, marginBottom: 2 }]}>CVV</Text>
                    <ItemShadow>
                        <TextInput
                            style={[style.textInput, { outlineStyle: 'none', width: 100 }]}
                            maxLength={4}
                            placeholder='123'
                            placeholderTextColor='#CFD0CF'
                        />
                    </ItemShadow>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: "space-between" }}>
                <TouchableOpacity style={[style.add]} >
                    <Text style={{ fontWeight: 'bold', fontSize: 22 }}> Confirmar </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.add, style.cancel]} onPress={() => { cleanCart() }}>
                    <Text style={{ fontWeight: '350', fontSize: 22, color: '#A4A4A4' }}> Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Payment

const ItemShadow = styled.View`
  margin: 8px;
  border-radius: 10px;
  box-shadow: 0 0 0px #ccc;
  background-color: #F5F8F9;
`;

const ItemShadowPrice = styled.View`
    border-radius: 10px;
    box-shadow:0 0 0px #ccc;
    background-color:#F5F8F9;
    width:100%;
    height:210px;
    padding:5px 20px 5px 20px;
`

const style = StyleSheet.create({
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    cancel: {
        backgroundColor: '#ffff',
        borderWidth: 0.5,
        borderColor: '#A4A4A4'
    },
    add: {
        width: '48%',
        height: 55,
        padding: 15,
        borderRadius: 18,
        backgroundColor: '#FCC636',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    category: {
        fontSize: 24,
        fontWeight: 'bold',
        marginStart: 5,
        marginTop: 10
    },
    textInput: {
        width: '100%',
        height: 28,
        marginBottom: 10,
        paddingLeft: 25,
        padding: 10,
        borderWidth: 0,
        borderRadius: 20,
        marginTop: 10,
        color: '#38304B',
        backgroundColor: '#F5F8F9',
        fontWeight: '500'
    },

    labelText: {
        fontSize: 15,
        marginStart: 8,
        fontWeight: '400'
    },
});