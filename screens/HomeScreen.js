import { Button, FlatList, TouchableHighlight, StyleSheet, Text, TextInput, View, Image } from "react-native";
import { useState, useEffect } from "react";

const HomeScreen = ({ navigation, GetStore, allStore }) => {
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("https://www.cheapshark.com/api/1.0/stores")
            .then((res) => res.json())
            .then((json) => GetStore(json))
    }, [allStore == []])

    const GameShops = ({ item }) => {
        return (
            <TouchableHighlight onPress={() => navigation.navigate('Store', {storeID: item.storeID})}>
                <View style={styles.item}>
                    <Image source={{ uri: "https://www.cheapshark.com/" + item.images.logo }} style={{ width: 60, height: 60 }} />
                    <Text>{item.storeName}</Text>
                </View>
            </TouchableHighlight>

        )
    }

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
            <FlatList data={allStore} renderItem={GameShops} />
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