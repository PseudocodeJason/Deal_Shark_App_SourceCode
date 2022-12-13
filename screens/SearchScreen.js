import { Button, FlatList, TouchableHighlight, StyleSheet, Text, TextInput, View } from "react-native";
import { useState, useEffect } from "react";
import {Circle} from 'react-native-progress';

const SearchScreen = ({ navigation, route, SearchGameTitle, apiList }) => {
    const { searchText } = route.params
    const [search, setSearch] = useState("")
    const [isFetching, setIsFetching] = useState("")
    const SearchResults = ({ item }) => {

        return (
            <TouchableHighlight onPress={() => navigation.navigate('Game', { gameID: item.gameID })}>
                <View style={styles.item}>
                    <Text>Title: {item.external}</Text>
                    <Text>Price: {item.cheapest}</Text>
                </View>
            </TouchableHighlight>

        )
    }

    useEffect(() => {
        setIsFetching(true)
        fetch("https://www.cheapshark.com/api/1.0/games?title=" + searchText)
            .then((res) => res.json())
            .then((json) => {
                SearchGameTitle(json)
                setIsFetching(false)
            })
            
    }, [])
    return (
        <View>
            <TextInput
                onChangeText={setSearch}
                value={search}
                style={styles.input}
            />
            <Button title="Search"
                onPress={() => fetch("https://www.cheapshark.com/api/1.0/games?title=" + search)
                    .then((res) => res.json())
                    .then((json) => SearchGameTitle(json))}
            />
            {isFetching && (
                <View>
                 <Circle size={200} indeterminate={true} alignItems='center'/>
                </View>
            )}
            <FlatList data={apiList} renderItem={SearchResults} />
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

export default SearchScreen