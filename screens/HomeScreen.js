import { Button, FlatList, TouchableHighlight, StyleSheet, Text, TextInput, View, Image, Animated } from "react-native";
import { useState, useEffect } from "react";

const HomeScreen = ({ navigation, GetStore, allStore }) => {
    const [search, setSearch] = useState("")
    const [fadeIn] = useState(new Animated.Value(0));

    useEffect(() => {
        fetch("https://www.cheapshark.com/api/1.0/stores")
            .then((res) => res.json())
            .then((json) => GetStore(json))
    }, [])
    useEffect(() => {
        console.log('trigger Home animation')
        Animated.timing(
            fadeIn, {
                toValue: 1,
                duration: 2500,
                useNativeDriver: true,
            }).start();
    })

    const GameShops = ({ item }) => {
        return (
            <TouchableHighlight onPress={() => navigation.navigate('Store', {storeID: item.storeID})}>
                <Animated.View style={{...styles.item, opacity: fadeIn,}}>
                    <Image source={{ uri: "https://www.cheapshark.com/" + item.images.logo }} style={{ width: 60, height: 60 }} />
                    <Text>{item.storeName}</Text>
                </Animated.View>
            </TouchableHighlight>

        )
    }

    return (
        <View style={{ flex: 1 }}>
            <TextInput
                onChangeText={setSearch}
                value={search}
                style={styles.input}
            />
            <Button title="Search"
                onPress={() => navigation.navigate('Search', { searchText: search })}
            />
            <FlatList data={allStore} renderItem={GameShops}/>
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
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'purple'
    },
    input: {
        height: 44,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        width:200,
        left:85,
        backgroundColor: '#e8e8e8',
    },

});

export default HomeScreen