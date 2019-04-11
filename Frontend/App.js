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
import orderReceived from './orderReceived.js';
import extrasScreen from './extrasScreen.js';

import DriverMainOrders from './assets/DriverMainOrders';
import DriverMap from './assets/DriverMap';
import AvailableOrdersScreen from './assets/AvailableOrdersScreen';
import MarkersMapScreen from './assets/MarkersMapScreen';
import OrderScreen1 from './assets/OrderScreen1';

class App extends React.Component {
    render() {
        return (
            <AppContainer />
       );
    }
}

{/* stack created that pushes and pops each screen as the user interacts with them */}
const AppStackNavigator = createStackNavigator({
    loginScreen: loginScreen,
	Home: HomeScreen,
    ProductScreen: ProductScreen,
    FoodScreen: FoodScreen,
    cartScreen: cartScreen,
    GamesScreen: GamesScreen,
    UtensilsScreen: UtensilsScreen,
    DecorScreen: DecorScreen,
    
    payment: payment,
    orderReceived: orderReceived,
    extrasScreen: extrasScreen,
	
	Driver: DriverMainOrders,
	Map: DriverMap,
	AvailableOrders: AvailableOrdersScreen,
	MarkersMap: MarkersMapScreen,
	Order1: OrderScreen1
});

export default createAppContainer(AppStackNavigator);
