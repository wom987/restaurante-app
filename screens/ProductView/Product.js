import React from 'react';
import Headers from './Headers';
import { View } from 'react-native';
import Products from './../ProductView/ProductList';
import Categories from './Categories';

function Product() {

    const data = {
        banner: 'Lo Más Rápido en',
        mainWord: 'Comida'
    }

    return (
        <View>
            <Headers url={require('./../../assets/main.png')} datas={data} />
            <Categories />
            <Products />
        </View>
    );
}

export default Product;