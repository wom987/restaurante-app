import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';
import category from './../services/CategoryService';

function CategoryItem() {

    let renderCategoryCard = () => {
        let categoryCard = [];

        category.forEach(element => {

            if (element.selected === true) {
                categoryCard.push(
                    <View>
                        <ItemShadow style={{ backgroundColor: '#FCC636' }}>
                            <View style={[style.categoryCard, { backgroundColor: '#FCC636' }]}>
                                <Image source={element.categoryUri} style={style.categoryIcon} />
                                <Text style={[style.categoryName, { fontWeight: 'bold' }]}>{element.categoryName}</Text>
                            </View>
                        </ItemShadow>
                    </View>
                )
            } else {
                categoryCard.push(
                    <View>
                        <ItemShadow>
                            <View style={style.categoryCard}>
                                <Image source={element.categoryUri} style={style.categoryIcon} />
                                <Text style={style.categoryName}>{element.categoryName}</Text>
                            </View>
                        </ItemShadow>
                    </View>
                )
            }
        });
        return categoryCard;
    }

    return (
        <>
            {renderCategoryCard()}
        </>
    )
}

export default CategoryItem

const ItemShadow = styled.View`
    margin:10px;
    border-radius:10px;
    box-shadow:0 0 10px #ccc;
    background-color:#FAFAFA;
    width:100;
    height:120px;
    padding:5px;
`

const style = StyleSheet.create({
    categoryCard: {
        backgroundColor: '#FAFAFA',
        padding: 8,
        flexDirection: 'column',
        alignItems: 'center'
    },
    categoryName: {
        fontSize: 20,
        fontColor: '#000'
    },
    categoryIcon: {
        height: 60,
        width: 64,
    },

});