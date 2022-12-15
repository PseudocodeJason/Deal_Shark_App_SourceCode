import { Button, FlatList, StyleSheet, Text, TextInput, TouchableHighlight, View, Alert, Image, Animated } from "react-native";
import { useState, useEffect } from "react";
import * as Linking from 'expo-linking';
import { Circle } from 'react-native-progress';

const GameScreen = ({ navigation, route, game, SearchGameID, store }) => {
    const [fadeIn] = useState(new Animated.Value(0));
    const { gameID } = route.params
    const [isFetching, setIsFetching] = useState("")
    const [title, setTitle] = useState("")
    //This URL is the Redriect that the api uses THIS IS PROVIDED BY THE API meaning they get a cut of the money spent.
    //https://www.cheapshark.com/redirect?dealID=

    useEffect(() => {
        setIsFetching(true)
        fetch("https://www.cheapshark.com/api/1.0/games?id=" + gameID)
            .then((res) => res.json())
            .then((json) => {
                setIsFetching(false)
                SearchGameID(json, store)
                setTitle(json.info.title)
            })
    }, []);
    useEffect(() => {
        Animated.timing(
            fadeIn, {
                toValue: 1,
                duration: 1000,
                delay: 500,
                useNativeDriver: true,
            }).start();
    })
    
    const ImageRender = ({ item }) => {
        return (
            <View>
                <Image source={{ uri: item.thumb }} style={{ width: 160, height: 90 }} />
            </View>
        )
    }

    const GameResults = ({ item }) => {
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
                <Animated.View style={{...styles.item, opacity: fadeIn,}}>
                    <Text>Store: {item.storeName}</Text>
                    <Text>Current Price: {item.price}</Text>
                    <Text>Retail Price: {item.retailPrice}</Text>
                    <Text style={{
                        color: Math.round(item.savings) >= 75 ? "#00ff1e" :
                            Math.round(item.savings) >= 50 ? "green" :
                                Math.round(item.savings) >= 25 ? "orange" :
                                    "red"
                    }}>You Save {Math.round(item.savings)}%</Text>
                </Animated.View>
            </TouchableHighlight>
        )


    }

    return (
        <View>
            {isFetching && (
                <View>
                    <Circle size={200} indeterminate={true} alignItems='center' />
                </View>
            )}
            {!isFetching && (
                <View>
                    <Text style={{ textAlign: "center" }}>{title}</Text>
                    <FlatList scrollEnabled={false}
                        data={Object.values(game)} renderItem={ImageRender} />
                    <FlatList data={game.deals} renderItem={GameResults} />
                </View>
            )}
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

export default GameScreen