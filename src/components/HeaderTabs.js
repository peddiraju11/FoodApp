import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs() {

    const [activeTab, setActiveTab] = useState("Delivery")

    return (
        <View style={styles.parentView}>
            <HeaderButton
                text="Delivery"
                btncolor="#FFF"
                textcolor="#000"
                activeTab={activeTab}
                setActiveTab={setActiveTab} />
            <HeaderButton text="Pickup"
                btncolor="#000"
                textcolor="#FFF"
                activeTab={activeTab}
                setActiveTab={setActiveTab} />
        </View>
    )
}

const HeaderButton = (props) => (
    <TouchableOpacity style={{
        backgroundColor: props.activeTab === props.text ? "#000" : "#FFF",
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 30
    }}
        onPress={() => props.setActiveTab(props.text)}
    >
        <Text style={{
            color: props.activeTab === props.text ? "#FFF" : "#000",
            fontSize: 15,
            fontWeight: '900'
        }}>{props.text}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    parentView: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
})