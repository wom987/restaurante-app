import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import styled from 'styled-components/native';
import Title_c from './../components/Title_c';
import { Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { DatabaseConnection } from '../../assets/database/database-connection';
import App from './../../App';

const db = DatabaseConnection.getConnection();

function Car() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation();

    let [flatListItems, setFlatListItems] = useState([]);

    useEffect(() => {
        refresh();
    }, []);

    const refresh = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM Products',
                [],
                (tx, results) => {
                    let temp = [];
                    for (let i = 0; i < results.rows.length; ++i) {
                        temp.push(results.rows.item(i));
                    }
                    setFlatListItems(temp);
                }
            );
        });
    }

    function calculatePaymentDetail() {
        let total = 0.00;
        let subtotal = 0.00;
        let iva = 0.00;

        flatListItems.forEach(element => {
            total += element.priceProduct;
        })

        subtotal = (total - (total * 0.13));
        iva = (total * 0.13);

        let data = {
            subtotal: subtotal.toFixed(2),
            iva: iva.toFixed(2),
            total: total.toFixed(2)
        }

        return data;
    }


    function deleteUser(id) {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM  Products where product_id=?',
                [id],
                (tx, results) => {
                    refresh()
                }
            );
        });
    };


    let listItemView = (item) => {
        return (
            <ItemShadow style={{ backgroundColor: '#ffff' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: '#fff' }} key={item.product_id}>
                    <Image source={item.imageUri} style={style.iconSize} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={style.item}>
                                <Title_c name={item.nameProduct} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text style={style.prices}>$ {(item.priceProduct).toFixed(2)}</Text>
                                <Text style={style.stars}>x{item.quantityProduct}</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => { deleteUser(item.product_id) }}>
                                <Image source={require('../../assets/delete.png')} style={style.delete} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ItemShadow>
        );

    };

    return (
        <View style={{ height: windowHeight, width: windowWidth, backgroundColor: '#ffff' }}>
            <Text style={style.category}>Tu Carrito</Text>
            <View style={[style.main]}>

                <FlatList
                    data={flatListItems}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => listItemView(item)}
                    style={{ backgroundColor: '#ffff', padding: 20 }}
                />
                <TouchableOpacity style={[style.add, { marginStart: 30, marginEnd: 30 }]} onPress={() => { navigation.navigate('Product') }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../assets/arrow-left.png')} style={{ height: 50, width: 50, marginRight: 15 }} />
                        <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#2AB059' }}>Seguir comprando.</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={{ marginTop: 'auto' }}>
                <ItemShadowPrice>
                    <View style={style.detail}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontWeight: '400', fontSize: 20, color: '#A1A1A1' }}>Subtotal</Text>
                            <Text style={{ fontWeight: '400', fontSize: 20, color: '#A1A1A1' }}>IVA</Text>
                            <Text style={{ fontWeight: '400', fontSize: 20, color: '#A1A1A1' }}>Domicilio</Text>
                        </View>

                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#646464' }}>$ {calculatePaymentDetail().subtotal}</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#646464' }}>$ {calculatePaymentDetail().iva}</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#646464' }}>$ 0.00</Text>

                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#646464' }}>
                            -------------------------------------
                        </Text>
                    </View>

                    <View style={style.detail}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontWeight: '400', fontSize: 20, color: '#A1A1A1' }}>Total</Text>
                        </View>

                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#646464' }}>$ {calculatePaymentDetail().total}</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={[style.pay]} onPress={() => {
                        navigation.navigate('Payment', {
                            subtotal: calculatePaymentDetail().subtotal,
                            iva: calculatePaymentDetail().iva,
                            total: calculatePaymentDetail().total
                        });
                    }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 22 }}> PAGAR </Text>
                    </TouchableOpacity>

                </ItemShadowPrice>
            </View>


        </View>
    )
}

export default Car

const ItemShadow = styled.View`
    margin:5px;
    border-radius:30px;
    box-shadow:0 0 18px #ccc;
    background-color:#FAFAFA;
    width:98%;
    height:110px;
    padding:5px 20px 5px 20px;
`

const ItemShadowPrice = styled.View`
    border-top-left-radius:30px;
    border-top-right-radius:30px;
    box-shadow:0 0 18px #ccc;
    background-color:#FAFAFA;
    width:100%;
    height:310px;
    padding:5px 20px 5px 20px;
`

const style = StyleSheet.create({
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25
    },
    add: {
        width: '90%',
        height: 55,
        padding: 15,
        borderRadius: 20,
        backgroundColor: '#EDF7EF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,

    },
    pay: {
        width: '100%',
        height: 55,
        padding: 15,
        borderRadius: 20,
        backgroundColor: '#FCC636',
        alignItems: 'center',
        justifyContent: 'center'
    },

    delete: {
        height: 32,
        width: 32,
        marginRight: 10
    },
    main: {
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    category: {
        fontSize: 24,
        fontWeight: 'bold',
        marginStart: 25,
        marginTop: 15
    },
    item: {
        justifyContent: 'start',
        overflow: 'hidden',
    },
    prices: {
        color: '#F66E2F',
        fontSize: 23,
        fontWeight: 'bold'
    },
    iconSize: {
        marginTop: 5,
        height: 90,
        width: 90,
        marginRight: 10,
        marginStart: 10
    },
    stars: {
        fontSize: 15,
        fontWeight: 'italic',
        color: '#979797',
        marginLeft: 15

    }
})