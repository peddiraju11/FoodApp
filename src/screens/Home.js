import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItem from '../components/RestaurantItem'


const Home = () => {
    return (
        <SafeAreaView style={styles.styleheader}>
            <View style={styles.styleView}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem />
                <RestaurantItem />
                <RestaurantItem />
                <RestaurantItem />
                <RestaurantItem />

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    styleheader: {
        backgroundColor: '#eee',
        flex: 1
    },
    styleView: {
        backgroundColor: '#FFF',
    },
})
export default Home
