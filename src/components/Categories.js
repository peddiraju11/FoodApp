import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Categories() {
    return (
        <View style={{ backgroundColor: '#fff', marginTop: 5, paddingTop: 10, paddingBottom: 10, }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View key={index} style={{ flexDirection: 'column', alignItems: 'center', marginLeft: 15, marginRight: 15 }}>
                        <Image source={item.image} style={{ height: 35, width: 35 }} resizeMode="contain" />
                        <Text style={{ fontSize: 13, fontWeight: '900' }}>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})

const items = [
    {
        image: require("../../assets/images/shopping-bag.png"),
        text: "Pick-up",
    },
    {
        image: require("../../assets/images/soft-drink.png"),
        text: "Soft Drinks",
    },
    {
        image: require("../../assets/images/bread.png"),
        text: "Bakery Items",
    },
    {
        image: require("../../assets/images/fast-food.png"),
        text: "Fast Foods",
    },
    {
        image: require("../../assets/images/deals.png"),
        text: "Deals",
    },
    {
        image: require("../../assets/images/coffee.png"),
        text: "Coffee & Tea",
    },
    {
        image: require("../../assets/images/desserts.png"),
        text: "Desserts",
    },
];