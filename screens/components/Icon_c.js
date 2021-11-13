import React from 'react'
import { Image, StyleSheet } from 'react-native'
import icons from './../services/Sources';

function Icon_c() {
    return (
        <Image source={icons.iconUri} style={style.iconSize}></Image>
    )

}
export default Icon_c

const style = StyleSheet.create({
    iconSize: {
        height: 20,
        width: 20,
    }
})