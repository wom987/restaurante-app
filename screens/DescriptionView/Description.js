import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Description() {
    return (
        <ScrollView>
            <View style={{ height: window.height }}>
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row-reverse' }}>
                        <TouchableOpacity style={style.buttonStyle}>
                            <Image source={require('../../assets/shopping.png')} style={{ height: 24, width: 24 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={style.cardImage}>
                        <Image source={require('../../assets/products/pizza.png')} style={style.imageMain} />
                    </View>
                    <Text style={style.productName}>Salad</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={style.prices}>$ 10.25</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={style.buttonStyle}>
                                <Image source={require('../../assets/minus.png')} style={{ height: 24, width: 24 }} />
                            </TouchableOpacity>
                            <Text style={style.number}>  1  </Text>
                            <TouchableOpacity style={[style.buttonStyle, { backgroundColor: '#FCC636' }]}>
                                <Image source={require('../../assets/plus.png')} style={{ height: 24, width: 24 }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={style.description}>
                        There are many variation of passages
                        of Lorem ipsum availabl, but the majority
                        have suffered alteration in some form.
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

                    <TouchableOpacity style={[style.add]}>
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
        color: '#212121'
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