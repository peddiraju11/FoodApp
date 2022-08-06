import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RestaurantItem = () => {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 10 }}>
            <View style={{ marginTop: 10, padding: 15, backgroundColor: "#fff" }}>
                <RestaurantImage />
                <RestaurantInfo />
            </View>
        </TouchableOpacity>
    )
}

const RestaurantImage = () => (
    <View>
        <Image source={{ uri: "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" }}
            style={{ height: 180, width: "100%" }} />
        <TouchableOpacity style={{ position: 'absolute', right: 15, top: 15 }}>
            <MaterialCommunityIcons name='heart-outline' size={25} color="#FFF" />
        </TouchableOpacity>
    </View>

)

const RestaurantInfo = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Farm House Kitchen</Text>
            <Text style={{ fontSize: 13, color: '#0EE' }}>30-45 Min</Text>
        </View>
        <Text style={{ backgroundColor: '#00E', borderRadius: 30, padding: 5, color: "#fff", alignItems: 'center' }} >4.5</Text>
    </View>

)


export default RestaurantItem

const styles = StyleSheet.create({})