import { Button, FlatList, TouchableHighlight, StyleSheet, Text, TextInput, View } from "react-native";
import { useState, useEffect } from "react";

const HomeScreen = ({ navigation }) => {
    const [search, setSearch] = useState("")
    const [store, setStore] = useState([])

    useEffect(() => {
        fetch("https://www.cheapshark.com/api/1.0/stores")
        .then((res) => res.json())
        .then((json) => setStore(json))
    })

    return (
        <View>
            <TextInput
                onChangeText={setSearch}
                value={search}
                style={styles.input}
            />
            <Button title="Search"
                onPress={() => navigation.navigate('Search', { searchText: search })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        borderWidth: 1,
        margin: 5,
        borderColor: 'black',
        padding: 10,
        borderRadius: 4,
        backgroundColor: 'white'
    },
    input: {
        height: 44,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#e8e8e8',
    },

});

export default HomeScreen