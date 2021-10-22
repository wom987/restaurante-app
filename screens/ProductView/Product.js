import React, { useEffect } from 'react';
import Headers from './Headers';
import { View } from 'react-native';
import Products from './../ProductView/ProductList';
import Categories from './Categories';
import { DatabaseConnection } from '../../assets/database/database-connection';
const db = DatabaseConnection.getConnection();

function Product() {
    useEffect(() => {
        db.transaction(function (txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='Products'",
                [],
                function (tx, res) {
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS Products', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS Products(product_id INTEGER PRIMARY KEY AUTOINCREMENT, idPro VARCHAR(100), nameProduct VARCHAR(100), imageUri VARCHAR(200), priceProduct DECIMAL(10,2), descriptionProduct VARCHAR(500), quantityProduct INTEGER)',
                            []
                        );
                    }
                }
            );
        });
    }, []);

    const data = {
        banner: 'Lo Más Rápido en',
        mainWord: 'Comida'
    }

    return (
        <View style={{ backgroundColor: '#fff' }}>
            <Headers url={require('./../../assets/main.png')} datas={data} />
            <Categories />
            <Products />
        </View>
    );
}

export default Product;