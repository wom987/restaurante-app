import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CategoryItem from './CategoryItem';

function Categories() {
    return (
        <View style={{ flexDirection: 'column', flex: 1 }}>
            <View style={styles.categoryView}>
                <Text style={styles.category}>Categorías</Text>
            </View>
            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ marginStart: 5 }}>
                <CategoryItem />
            </ScrollView>

            <View style={[styles.categoryView, { marginTop: 10, marginBottom: 5 }]}>
                <Text style={styles.category}>Productos</Text>
            </View>
        </View>

    )
}

export default Categories

const styles = StyleSheet.create({
    categoryView: {
        marginStart: 15,
        marginEnd: 15
    },
    category: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
});

