import { Button, FlatList, TouchableHighlight, StyleSheet, Text, TextInput, View, Image, Alert } from "react-native";
import { useState, useEffect } from "react";
import * as Linking from 'expo-linking';
import {Circle} from 'react-native-progress';


const StoreScreen = ({ navigation, route }) => {
    const [store, setStore] = useState([])
    const { storeID } = route.params
    const [isFetching, setIsFetching] = useState("")

    useEffect(() => {
        setIsFetching(true)
        fetch('https://www.cheapshark.com/api/1.0/deals?storeID=' + storeID)
            .then((res) => res.json())
            .then((json) => {
                setStore(json)
                setIsFetching(false)
            })
    }, [])

    const StoreRender = ({ item }) => {
        return (
            <TouchableHighlight onPress={() => Alert.alert('Confirm', 'You are about to leave the app', [{
                text: 'Okay',
                onPress: () => {
                    Linking.openURL("https://www.cheapshark.com/redirect?dealID=" + item.dealID)
                },
              },
              {
                text: 'Cancel',
                onPress: () => {
                  console.log('No was pressed');
                },
              }])}>
                <View style={styles.item}>
                    <Image source={{ uri: item.thumb }} style={{ width: 160, height: 60 }} />
                    <Text>Title: {item.title}</Text>
                    <Text>Normal Price: $ {item.normalPrice}</Text>
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
            {isFetching && (
                <View>
                 <Circle size={200} indeterminate={true} alignItems='center'/>
                </View>
            )}
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
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'orange'
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
    red: {
        color: 'red',
    }

});

export default StoreScreen