import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchGameTitle, SearchGameID } from "./redux/actions";
import { connect } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import GameScreen from "./screens/GameScreen"
import StoreScreen from "./screens/StoreScreen";

const Stack = createStackNavigator();

// All Navigation Screens are in the Screens Folder
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Group>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Search" component={SearchTitle} />
                    <Stack.Screen name="Game" component={Game} />
                    <Stack.Screen name="Store" component={Store}/>
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const mapDispastchHome = {}
const mapStateHome = (state) => ({})
const Home = connect(mapStateHome, mapDispastchHome)(HomeScreen)

const mapDispastchTitle = { SearchGameTitle }
const mapStateTitle = (state) => ({ apiList: state.apiSearch.apiList })
const SearchTitle = connect(mapStateTitle, mapDispastchTitle)(SearchScreen)

const mapDispastchGame = { SearchGameID }
const mapStateGame = (state) => ({ game: state.apiFindGame.game })
const Game = connect(mapStateGame, mapDispastchGame)(GameScreen)

const mapDispastchStore = {}
const mapStateStore = (state) => ({})
const Store = connect(mapStateStore, mapDispastchStore)(StoreScreen)

export default (App)