import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, Alert, SearchBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import loginScreen from './loginScreen.js';
import FoodScreen from './FoodScreen.js';

export default class CartScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 40, flex: 1, alignItems: "center", justifyContent: "center" }}>Swiftly</Text>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: "https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/rocket-ship-2969-14241-300x300.png" }}
                />
                <Button
                    onPress={() => {
                        Alert.alert("You pressed the button")
                    }}
                    title="Edit Cart"
                    color="#FF0000"
                >
                </Button>
                <Button
                    onPress={() => {
                        this.props.navigation.navigate('FoodScreen')
                    }}
                    title="Checkout"
                    color="#FF0000"
                >
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 70,
        flex: 1,
        backgroundColor: "#FFFFFF"
        //alignItems: 'center',
        // justifyContent: 'center',
    },
});

