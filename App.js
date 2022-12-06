// import { Provider } from "react-redux";
// import store from "./redux/store";
// import DefaultApp from "./defaultApp";
// import Home from "./dealsApp"
// //test comment hello world
// export default function App() {
//   return (
//     <Provider store={store}>
//       <DefaultApp/>
//     </Provider>
//   );
// }

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) =>{
  return(
      <View>
          <Text>Test Page</Text>
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
