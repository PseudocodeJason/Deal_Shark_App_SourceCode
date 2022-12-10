import { Button, FlatList, TouchableHighlight, StyleSheet, Text, TextInput, View } from "react-native";


const StoreScreen = ({navigation}) =>{

    const StoreRender = ({item}) =>{
        return(
            <TouchableHighlight onPress={() => navigation.navigate('Get store', { stores: item.gameID })}>
                <View>
                    
                </View>
            </TouchableHighlight>
        )
    }
    return(
        <View>
            <FlatList/>
        </View>
    )
}

export default StoreScreen