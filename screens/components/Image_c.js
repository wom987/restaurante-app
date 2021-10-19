import React from 'react'
import { Image, StyleSheet } from 'react-native'

function Image_c(props) {
    return (
        <Image style={style.image} source={props.url} />
    )
}

export default Image_c

const style = StyleSheet.create({
    image: {
        height: 140,
        width: 140,
    },
})
