import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Home from "./Home";
import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import CommentsScreen from "../screens/CommentsScreen";

import { authStateChangeUser } from "../redux/auth/authOperations";

const AuthStack = createStackNavigator();

export default function Main () {
    const [user, setUser] = useState(null);
    const { stateChange } = useSelector((state) => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authStateChangeUser());
    }, [])


    const useRoute = (isAuth) => {
        if (!isAuth) {
            return (
                <AuthStack.Navigator>
                    <AuthStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
                    <AuthStack.Screen options={{ headerShown: false }} name="Registration" component={RegistrationScreen} />
                </AuthStack.Navigator>
            )
        }
        return (
            <AuthStack.Navigator>
                <AuthStack.Screen name="Home" component={Home}
                    options={{
                        title: "Home screen",
                        headerLeft: null,
                        headerShown: false,
                    }}
                />
                <AuthStack.Screen name="Comments" options={{ headerShown: false }} component={CommentsScreen} />
            </AuthStack.Navigator>
        )
    }

    const routing = useRoute(stateChange);

    return ( <NavigationContainer> {routing} </NavigationContainer> )
}
