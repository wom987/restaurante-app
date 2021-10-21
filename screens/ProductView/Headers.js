import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styled from 'styled-components/native';

export default function Headers(props) {
    return (
        <ItemShadow>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
                <View style={{ flexDirection: 'column', width: 130 }}>
                    <Text style={styles.text}>{props.datas.banner}</Text>
                    <Text style={styles.mainWord}>{props.datas.mainWord}</Text>
                </View>
                <Image source={props.url} style={styles.logo} />
            </View>

        </ItemShadow>
    );
}

const ItemShadow = styled.View`
    border:0px;
    margin:15px;
    border-radius:15px;
    box-shadow:0 0 10px #ccc;
    background-color:#FFEDCE;
    width:window.width;
    height:170px;
    padding:10px 30px 5px 30px;
`

const styles = StyleSheet.create({

    logo: {
        width: 170,
        height: 123,
    },
    text: {
        color: '#000',
        fontWeight: "bold ",
        fontSize: 22,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    mainWord: {
        color: '#FCC636',
        fontWeight: "bold",
        fontSize: 27,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    }
});
