import { Button, FlatList, TouchableHighlight, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState, useEffect } from "react";
import { SearchGameTitle, SearchGameID } from "./redux/actions";
import { connect } from "react-redux";
const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Group>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Search" component={SearchTitle} />
                    <Stack.Screen name="Game" component={Game} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const HomeScreen = ({ navigation }) => {
    const [search, setSearch] = useState("")

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

const SearchScreen = ({ navigation, route, SearchGameTitle, apiList }) => {
    const { searchText } = route.params
    const [search, setSearch] = useState("")

    const SearchResults = ({ item }) => {

        return (
            <TouchableHighlight onPress={() => navigation.navigate('Game', { gameID: item.gameID })}>
                <View style={styles.item}>
                    <Text>Title: {item.external}</Text>
                    <Text>Sale Price: {item.cheapest}</Text>
                    <Text>Regular Price: {item.gameID}</Text>
                </View>
            </TouchableHighlight>

        )
    }

    useEffect(() => {
        fetch("https://www.cheapshark.com/api/1.0/games?title=" + searchText)
            .then((res) => res.json())
            .then((json) => SearchGameTitle(json))
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
            <FlatList data={apiList} renderItem={SearchResults} />
        </View>
    )
}


const GameScreen = ({ navigation, route, game, SearchGameID }) => {
    const { gameID } = route.params
    const [search, setSearch] = useState("")
    const [title, setTitle] = useState("")

    useEffect(() => {
        fetch("https://www.cheapshark.com/api/1.0/games?id=" + gameID)
            .then((res) => res.json())
            .then((json) => SearchGameID(json))
    }, [])

    const GameResults = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text>Store Id: {item.storeID}</Text>
                <Text>Price: {item.price}</Text>
                <Text>Regular Price: {item.retailPrice}</Text>
            </View>
        )
    }

    return (
        <View>
            <Text style={{ textAlign: "center" }}>{game.info.title}</Text>
            <FlatList data={game.deals} renderItem={GameResults} />
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

const mapDispastchTitle = { SearchGameTitle }
const mapStateTitle = (state) => ({ apiList: state.apiSearch.apiList })
const SearchTitle = connect(mapStateTitle, mapDispastchTitle)(SearchScreen)

const mapDispastchGame = { SearchGameID }
const mapStateGame = (state) => ({ game: state.apiFindGame.game })
const Game = connect(mapStateGame, mapDispastchGame)(GameScreen)

export default (App)