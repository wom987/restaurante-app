import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Description({ route }) {
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation();

    const [total, setTotal] = useState(1)

    const increase = () => {
        setTotal(total + 1)
    }

    const decrease = () => {
        if (total != 1) {
            setTotal(total - 1)
        } else {
            setTotal(1)
        }
    }

    const {
        idProduct,
        nameProduct,
        imageUri,
        priceProduct,
        descriptionProduct
    } = route.params;

    let totalPay = parseFloat(JSON.parse(JSON.stringify(priceProduct.substring(1)))) * parseFloat(total);
    
    return (
        <ScrollView>
            <View style={{ height: windowHeight, backgroundColor: '#ffff' }}>
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row-reverse' }}>
                        <TouchableOpacity style={style.buttonStyle}>
                            <Image source={require('../../assets/shopping.png')} style={{ height: 24, width: 24 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={style.cardImage}>
                        <Image source={JSON.parse(JSON.stringify(imageUri))} style={style.imageMain} />
                    </View>
                    <Text style={style.productName}>{JSON.parse(JSON.stringify(nameProduct))}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={style.prices}>{JSON.parse(JSON.stringify(priceProduct))}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={[style.buttonStyle, { marginEnd: 15 }]} onPress={decrease}>
                                <Image source={require('../../assets/minus.png')} style={{ height: 24, width: 24 }} />
                            </TouchableOpacity>
                            <Text style={style.number}>{total}</Text>
                            <TouchableOpacity style={[style.buttonStyle, { backgroundColor: '#FCC636', marginStart: 15 }]} onPress={increase}>
                                <Image source={require('../../assets/plus.png')} style={{ height: 24, width: 24 }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={style.description}>
                        {JSON.parse(JSON.stringify(descriptionProduct))}
                    </Text>
                    <View style={[style.detail, { flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 15, marginTop: 15 }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/ic_star.png')} style={{ height: 24, width: 24 }}></Image>
                            <Text style={{ fontWeight: 'bold', color: '#212121' }}> 5.0 </Text>
                        </View>
                        <Text>|</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/clock.png')} style={{ height: 24, width: 24 }}></Image>
                            <Text style={{ fontWeight: 'bold', color: '#212121' }}> 20 min </Text>
                        </View>
                    </View>

                    <TouchableOpacity style={[style.add]} onPress={() =>
                        navigation.push('Car', {
                            idProduct: idProduct,
                            nameProduct: nameProduct,
                            priceProduct: totalPay,
                            numberProduct: total,
                            imageUri: imageUri
                        })
                    }>
                        <Text style={{ fontWeight: 'bold', fontSize: 22 }}> AGREGAR </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    )
}


const style = StyleSheet.create({
    cardImage: {
        height: 325,
        width: window.width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageMain: {
        height: 300,
        width: 300
    },
    productName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#212121'
    },
    prices: {
        marginTop: 10,
        color: '#F66E2F',
        fontSize: 30,
        fontWeight: 'bold'
    },
    buttonStyle: {
        width: 50,
        height: 50,
        padding: 5,
        borderRadius: 15,
        color: '#000',
        fontWeight: 'bold',
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center'
    },
    add: {
        width: '100%',
        height: 55,
        padding: 15,
        borderRadius: 20,
        backgroundColor: '#FCC636',
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#212121',
    },
    description: {
        marginTop: 15,
        fontSize: 17,
        color: '#979797'

    },
    detail: {
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#FAFAFA',
        padding: 15,
        width: window.width
    }
});