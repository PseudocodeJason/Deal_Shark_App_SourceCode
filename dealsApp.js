import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState, useEffect } from "react";
import { SearchGame } from "./redux/actions";
import { connect } from "react-redux";
const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Group>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Search" component={Search}/>
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const HomeScreen = ({navigation}) => {
    const [search, setSearch] = useState("")

    return (
        <View>
            <Text>Test Page</Text>
            <TextInput
                onChangeText={setSearch}
                value={search}
            />
            <Button title="Search"
                onPress={() => navigation.navigate('Search', { searchText: search })}
            />
        </View>
    )
}

const SearchScreen = ({navigation, route, SearchGame, apiList}) => {
    const {searchText} = route.params
    const [search, setSearch] = useState("")

    const SearchResults = ({ item }) => {
        return (
            <View>
                <Text>Title: {item.external}</Text>
                <Text>Sale Price: {item.cheapest}</Text>
                <Text>Regular Price: {item.gameID}</Text>
            </View>
        )
    }
    
    useEffect(() =>{
        fetch("https://www.cheapshark.com/api/1.0/games?title=" + searchText)
                    .then((res) => res.json())
                    .then((json) => SearchGame(json))
    }, [])
    return(
        <View>
             <TextInput
                onChangeText={setSearch}
                value={search}
            />
            <Button title="Search"
                onPress={() => fetch("https://www.cheapshark.com/api/1.0/games?title=" + search)
                    .then((res) => res.json())
                    .then((json) => SearchGame(json))}
            />
            <FlatList data={apiList} renderItem={SearchResults} />
        </View>
    )
}
const mapDispastchHome = { SearchGame }
const mapStateHome = (state) => ({ apiList: state.apiSearch.apiList })
const Search = connect(mapStateHome, mapDispastchHome)(SearchScreen)

export default (App)