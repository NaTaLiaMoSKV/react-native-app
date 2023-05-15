import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useNavigation, useRoute } from '@react-navigation/native';

import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const Home = () => {
    const navigation = useNavigation();

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    return (
        <Tab.Navigator>
            <Tab.Screen name="Публикации" component={PostsScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <Icon name="grid" color={focused ? '#FF6C00' : '#BDBDBD'} size={size}/>
                    ),
                    headerShown: false,
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen name="Создать публикацию" component={CreatePostsScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <Icon name="plus" color={focused ? '#FF6C00' : '#BDBDBD'} size={size}/>
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <Icon name="user" color={focused ? '#FF6C00' : '#BDBDBD'} size={size}/>
                    ),
                    headerShown: false,
                    tabBarLabel: () => null,
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    },
    addIcon: {
        backgroundColor: '#FF6C00',
        width: 70,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Home;