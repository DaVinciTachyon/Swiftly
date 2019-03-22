import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, Alert } from 'react-native';

import Banner from './assets/Banner';
import DriverMainOrders from './assets/DriverMainOrders';
import OrderScreen from './assets/OrderScreen';
import DriverMap from './assets/DriverMap';
import { Constants } from 'expo';

export default class App extends React.Component {

    state = {
        products: [
            {name: "Budwiser, keg", imageSrc: "https://www.underconsideration.com/brandnew/archives/budweiser_2016_logo_detail.png"},
            { name: "Heineken, keg", imageSrc: "https://seeklogo.com/images/H/heineken-logo-C44AA57E2B-seeklogo.com.png" },
            { name: "Guinness, keg", imageSrc: "https://images-na.ssl-images-amazon.com/images/I/41xMVa2HXqL._SY355_.jpg" },
            { name: "Orchard Thieves, keg", imageSrc: "https://pbs.twimg.com/profile_images/594096158831697920/wGJi-8JQ_400x400.jpg"}
        ]
    }
  render() {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40, flex: 1, alignItems: "center", justifyContent: "center" }}>Swiftly</Text>
            <Image
                style={{ width: 50, height: 50 }}
                source={{ uri: "https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/rocket-ship-2969-14241-300x300.png"}}
            />
                   
       <Button
                onPress={() => {
                    Alert.alert("You pressed the button")
                }}
            title="Drinks"
            color="#FF0000"
        >  
       </Button>
            <Button
                onPress={() => {
                    Alert.alert("You pressed the button")
                }}
                title="Food"
                color="#FF0000"
            >
            </Button>
            <Button
                onPress={() => {
                    Alert.alert("You pressed the button")
                }}
                title="Games"
                color="#FF0000"
            >
            </Button>
            <Button
                onPress={() => {
                    Alert.alert("You pressed the button")
                }}
                title="Utensils"
                color="#FF0000"
            >
            </Button>
            <Button
                onPress={() => {
                    Alert.alert("You pressed the button")
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
