import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, Alert, SearchBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ProductScreen from './ProductScreen.js';
import loginScreen from './loginScreen.js';

export default createStackNavigator(
    {
        Home: loginScreen,
        screen: ProductScreen
    },
    {
        initialRouteName: 'Home'
    }




);