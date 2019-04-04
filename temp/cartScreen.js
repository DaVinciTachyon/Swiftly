import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import loginScreen from './loginScreen.js';
import FoodScreen from './FoodScreen.js';

export default class CartScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 40, textAlign: 'center', justifyContent: 'center' }}>
                    Swiftly</Text>
                <Image
                    style={{ width: 50, height: 50, flexDirection: 'row', right: 150, left: 100, marginTop: -50 }}
                    source={{ uri: "https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/rocket-ship-2969-14241-300x300.png" }}
                >
                </Image>
                <Button
                    onPress={() => {
                        Alert.alert("You pressed the button")
                    }}
                    title="Edit Cart"
                    color="#1569C7"
                >
                </Button>
                <Button
                    onPress={() => {
                        this.props.navigation.navigate('payment')
                    }}
                    title="Checkout"
                    color="#1569C7"
                >
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF"
        //alignItems: 'center',
        // justifyContent: 'center',
    }
});

