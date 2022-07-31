import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'


const Home = () => {
    return (
        <SafeAreaView style={styles.styleheader}>
            <View style={styles.styleView}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <Categories />
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
