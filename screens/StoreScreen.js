import { Button, FlatList, TouchableHighlight, StyleSheet, Text, TextInput, View, Image } from "react-native";
import { useState, useEffect } from "react";


const StoreScreen = ({ navigation, route }) => {
    const [store, setStore] = useState([])
    const { storeID } = route.params

    useEffect(() => {
        fetch('https://www.cheapshark.com/api/1.0/deals?storeID=' + storeID)
            .then((res) => res.json())
            .then((json) => setStore(json))
    }, [])

    const StoreRender = ({ item }) => {
        return (
            <TouchableHighlight>
                <View style={styles.item}>
                    <Image source={{ uri: item.thumb }} style={{ width: 160, height: 60 }} />
                    <Text>Title: {item.title}</Text>
                    <Text>Nomral Price: $ {item.normalPrice}</Text>
                    <Text style={styles.red}>Sale Price: $ {item.salePrice}</Text>
                    <Text>{Math.round(item.savings)}% off</Text>
                    <Text style={{
                        color: item.metacriticScore >= 80 ? "green" :
                            item.metacriticScore >= 65 ? "orange" :
                                "red"
                    }}>Metacritic score: {item.metacriticScore}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    return (
        <View>
            <Text>Available deals</Text>
            <FlatList data={store} renderItem={StoreRender} />
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
    red: {
        color: 'red',
    }

});

export default StoreScreen