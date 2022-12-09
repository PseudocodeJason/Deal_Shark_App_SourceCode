import { Button, FlatList, TouchableHighlight, StyleSheet, Text, TextInput, View, Image, useState } from "react-native";


const StoreScreen = ({navigation}) =>{
    const [shop, setShop] = useState([])

    useEffect(() => {
        fetch("https://www.cheapshark.com/api/1.0/deals?storeID=")
            .then((res) => res.json())
            .then((json) => setShop(json))
    }, [])

    const StoreRender = ({item}) =>{
        return(
            <TouchableHighlight>
                <View style={styles.item}>
                    <Image source={{ uri: "https://www.cheapshark.com/" + item.thumb }} style={{ width: 60, height: 60 }} />
                    <Text>{item.title}</Text>
                </View>
            </TouchableHighlight>
        )
    }
    return(
        <View>
            <FlatList data={shop} renderItem={StoreRender}/>
        </View>
    )
}

export default StoreScreen