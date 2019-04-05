import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, Alert, SearchBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ProductScreen from './ProductScreen.js';
import loginScreen from './loginScreen.js';
import HomeScreen from './HomeScreen.js';
import FoodScreen from './FoodScreen.js';
import cartScreen from './cartScreen.js';
import GamesScreen from './GamesScreen.js';
import UtensilsScreen from './UtensilsScreen.js';
import DecorScreen from './DecorScreen.js';
import payment from './payment.js';


class App extends React.Component {
    render() {
        return (
            <AppContainer />
       );
    }
}


const AppStackNavigator = createStackNavigator({
    Home: HomeScreen,
    ProductScreen: ProductScreen,
    FoodScreen: FoodScreen,
    cartScreen: cartScreen,
    GamesScreen: GamesScreen,
    UtensilsScreen: UtensilsScreen,
    DecorScreen: DecorScreen,
    loginScreen: loginScreen,
    payment: payment

});

export default createAppContainer(AppStackNavigator);
