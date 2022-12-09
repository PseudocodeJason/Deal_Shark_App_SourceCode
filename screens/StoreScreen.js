import { Button, FlatList, TouchableHighlight, StyleSheet, Text, TextInput, View } from "react-native";


const StoreScreen = ({navigation}) =>{

    const StoreRender = ({item}) =>{
        return(
            <TouchableHighlight>
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