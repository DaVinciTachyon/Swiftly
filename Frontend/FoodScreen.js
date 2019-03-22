import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, Alert } from 'react-native';
import ProductScreen from './ProductScreen.js';


export default class FoodScreen extends React.Component {

    state = {
        products: [
            { name: "Sausages"},
            { name: "Chicken Nuggets"},
            { name: "Chips" }
            
        ]

    };



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
                        this.props.navigation.navigate('ProductScreen')
                    }}
                    title="Drinks"
                    color="#FF0000"
                >
                </Button>
                <Button
                    onPress={() => {
                        this.props.navigation.navigate('FoodScreen')
                    }}
                    title="Food"
                    color="#FF0000"
                >
                </Button>
                <Button
                    onPress={() => {
                        this.props.navigation.navigate('GamesScreen')
                    }}
                    title="Games"
                    color="#FF0000"
                >
                </Button>
                <Button
                    onPress={() => {
                        this.props.navigation.navigate('UtensilsScreen')
                    }}
                    title="Utensils"
                    color="#FF0000"
                >
                </Button>
                <Button
                    onPress={() => {
                        this.props.navigation.navigate('DecorScreen')
                    }}
                    title="Decor"
                    color="#FF0000"
                >
                </Button>
                <FlatList
                    ItemSeparatorComponent={() =>
                        <View
                            style={{ height: 1, width: "100%", backgroundColor: "lightgray" }}
                        />
                    }
                    data={this.state.products}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) =>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={{ uri: item.imageSrc }}
                            />
                            <Text style={{ padding: 10 }}>{item.name}</Text>
                        </View>
                    }
                />
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
