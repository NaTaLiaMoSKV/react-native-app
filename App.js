import React from "react";
import { StyleSheet, Button } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';

import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import PostsScreen from "./screens/PostsScreen";
import CommentsScreen from "./screens/CommentsScreen";
import Home from "./screens/Home";

const MainStack = createStackNavigator();

export default function App() {
  
   const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
   });  
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" options={{ headerLeft: null, headerShown: false }}  component={RegistrationScreen} />
        <MainStack.Screen name="Login" options={{ headerLeft: null, headerShown: false }} component={LoginScreen} />
        <MainStack.Screen name="Comments" options={{ headerShown: false }} component={CommentsScreen} />
        <MainStack.Screen name="Home" component={Home}
          options={{
            title: "Home screen",
            headerLeft: null,
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerLeftContainer: {
    marginLeft: 16, 
    padding: 10, // Внутренний отступ
    borderRadius: 5, // Закругление углов
    color: '#212121',
  },
});