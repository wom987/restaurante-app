import React from 'react'
import textStyle from '../../../assets/styles/Text.Component.Styles';
import loginData from '../../../assets/Services/Text'
import { Text, StyleSheet, View } from 'react-native';

const TextDafault = () => {
    return (
        <View style={estilo.texto}>
            <Text style={[textStyle.colorDefault, { fontWeight: 'bold' }]}>{loginData.userName} {loginData.userId}</Text>
        </View>
    )
}

export default TextDafault

const estilo = StyleSheet.create({
    texto: {
        marginTop: '10%',
        alignSelf: 'center',
        marginBottom: 15,
    }
})