import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, Dimensions, FlatList, SafeAreaView, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import loginScreen from './loginScreen.js';
import FoodScreen from './FoodScreen.js';

export default class CartScreen extends React.Component {

    state = {
        products: [
            { name: "Orchard Thieves, keg", imageSrc: "https://pbs.twimg.com/profile_images/594096158831697920/wGJi-8JQ_400x400.jpg" },
            { name: "Cluedo", imageSrc: "https://image.smythstoys.com/original/desktop/152077.jpg" },
            { name: "Chicken Nuggets", imageSrc: "https://assets3.thrillist.com/v1/image/2806787/size/tmg-article_default_mobile.jpg" },
            { name: "Cutlery", imageSrc: "https://www.ikea.com/PIAimages/25795_PE099076_S5.JPG" }
        ]

    };


    render() {
        return (
            <SafeAreaView>

                <ImageBackground
                    style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width }}
                    source={{ uri: "https://previews.123rf.com/images/syntheticmessiah/syntheticmessiah1707/syntheticmessiah170700012/81891385-stone-texture-background-of-brick-wall-texture-surface-with-stone-light-yellow-bricks.jpg" }}
                >

                <View style={styles.container}>
                <Text style={{ fontSize: 40, textAlign: 'center', justifyContent: 'center' }}>
                        Swiftly</Text>
                  
                <Image
                    style={{ width: 50, height: 50, flexDirection: 'row', right: 150, left: 100, marginTop: -50 }}
                    source={{ uri: "https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/rocket-ship-2969-14241-300x300.png" }}
                >
                </Image>

                    <Text style={{ fontSize: 30 }}>
                        Order Summary:</Text>
                   </View>

                 <View style={{backgroundColor:'white'}}>
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

                    <View style={styles.textContainer}>

                    <Text style={{ fontSize: 40}}>
                            Total: 75 euro </Text>
                        <Text style={{ fontSize: 25}}>
                        Total is including delivery</Text>
                    </View>

                     <View style={styles.container}>

                         <Button
                             onPress={() => {
                        this.props.navigation.navigate('payment')
                    }}
                    title="Checkout"
                    color="#1569C7"
                >
                 </Button>
                 </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: "#FFFFFF"
        //alignItems: 'center',
        // justifyContent: 'center',
    },

    textContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

