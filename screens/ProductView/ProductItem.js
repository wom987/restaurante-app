import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import Icon_c from '../components/Icon_c';
import Title_c from '../components/Title_c';
import product from '../services/ProductService';


function ProductItem() {
    let renderIcon = () => {
        let icon = [];
        for (let i = 0; i < 5; i++) {
            icon.push(
                <Icon_c />
            );
        }
        return icon;
    }

    let renderCard = () => {
        let card = [];

        product.forEach(element => {
            card.push(
                <ItemShadow>

                    <View style={{ flexDirection: 'row', height: 110 }}>
                        <View style={{ flexDirection: 'column' }}>

                            <View style={style.icon}>
                                {renderIcon()}
                            </View>
                            <View style={style.item}>
                                <Title_c name={element.nombre} />
                            </View>

                            <Text style={style.prices}>{element.precio}</Text>

                        </View>
                        <Image source={element.imageUri} style={style.iconSize}></Image>
                    </View>
                    <View style={style.bottomCard}>
                        <Text style={style.stars}>{element.discount}</Text>
                        <View style={style.logo}>
                            <Image source={element.plusLogo} style={style.plusIcon}></Image>
                        </View>
                    </View>

                </ItemShadow>
            )
        });
        return card;
    }

    return (
        <>
            {renderCard()}
        </>
    )

}

export default ProductItem

const ItemShadow = styled.View`
    margin:5px;
    border-radius:30px;
    box-shadow:0 0 18px #ccc;
    background-color:#FAFAFA;
    width:100%;
    height:170px;
    padding:20px 0px 20px 20px;
`

const style = StyleSheet.create({
    bottomCard: {
        height: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    prices: {
        color: '#F66E2F',
        fontSize: 23,
        fontWeight: 'bold'
    },
    item: {
        justifyContent: 'start',
        overflow: 'hidden',
    },
    icon: {
        flexDirection: 'row',
    },
    iconSize: {
        height: 120,
        width: 120,
    },
    plusIcon: {
        height: 30,
        width: 30,
    },
    logo: {
        height: 40,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: '#FCC636'
    },
    stars: {
        fontSize: 14,
        fontWeight: 'italic',
        color: '#979797'
    }
})
