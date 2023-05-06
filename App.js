import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"


import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteor";
import UpdateScreen from "./screens/Updates";

const Stack=createStackNavigator()
 function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="IssLocation" component={IssLocationScreen}></Stack.Screen>
        <Stack.Screen name="Meteor" component={MeteorScreen}></Stack.Screen>
        <Stack.Screen name="Updates" component={UpdateScreen}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
