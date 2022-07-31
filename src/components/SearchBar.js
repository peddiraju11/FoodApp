import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = () => {
    return (
        <View style={styles.headerView}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                styles={{
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        marginRight: 5,
                        alignItems: 'center',
                        flexDirection: 'row'
                    },
                    textInput: {
                        backgroundColor: '#eee',
                        marginTop: 7,
                        borderRadius: 20,
                        fontWeight: '800'
                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb',
                    },
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 10, alignItems: 'center' }}>
                        <Ionicons name='location-sharp' size={24} />
                    </View>
                )}

                renderRightButton={() => (
                    <View style={{
                        marginRight: 10, alignItems: 'center', flexDirection: 'row',
                        backgroundColor: '#fff', padding: 10, borderRadius: 30
                    }}>
                        <AntDesign name='clockcircle' size={14}
                            style={{
                                marginRight: 5,
                            }} />
                        <Text>Search</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    headerView: {
        margin: 10,
        flexDirection: 'row',
    }
})