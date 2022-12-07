// import { Provider } from "react-redux";
// import store from "./redux/store";
// import DefaultApp from "./defaultApp";
// import Home from "./dealsApp"
// export default function App() {
//   return (
//     <Provider store={store}>
//       <DefaultApp/>
//     </Provider>
//   );
// }

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const API = 'https://www.cheapshark.com/api/1.0/deals?'




export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState()
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((json) => setData(json))

  }, []);

  const cheapGames = ({ item }) => {
    return (
      <View>
        <Text>Name: {item.title}</Text>
        <Text>Regular Price: $ {item.normalPrice}</Text>
        <Text>On Sale Price: $ {item.salePrice}</Text>
      </View>
    )
  }

  return (
    <View>
      <Text>Test Page</Text>
      <FlatList
        data={data}
        renderItem={cheapGames}
      />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
