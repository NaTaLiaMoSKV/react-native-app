import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/Feather';

import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const Home = () => {
    const navigation = useNavigation();

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
                    headerLeft: () => (
                        <Ionicons name="arrow-back" size={20} color="#21212180"
                            onPress={() => { navigation.navigate('Публикации') }}
                            style={{ marginLeft: 10, padding: 5, transform: [{ scaleX: 1.1 }] }}
                        />
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

export default Home;