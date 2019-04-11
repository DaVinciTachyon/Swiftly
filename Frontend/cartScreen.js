import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, Dimensions, FlatList, SafeAreaView, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import loginScreen from './loginScreen.js';
import FoodScreen from './FoodScreen.js';

const {url} = '';

export default class CartScreen extends React.Component {

	url = this.props.navigation.getParam('url', 'noo');
	
	constructor(props) {
		{/* holds data fetched to be displayed */}
		super(props);
		this.state = {
			loading: true,
			dataSource:[]
		};
	}
	
	componentDidMount(){
		{/* url
			- ipv4 address of machine server is running on(on same network)
			- port server is on
			- specfic to data being queryied
		*/}
		fetch('http://'+this.url+'/cart/')
		.then(response => response.json())
		.then((responseJson)=> {
			this.setState({
				loading: false,
				dataSource: responseJson
			})
		})
		.catch(error=>console.log(error)) //to catch the errors if any
	}

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
                            data={this.state.dataSource}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) =>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
									<View style={{width:'50%'}}>
										<Text style={{ padding: 10 }}>{'item_id: '+item.item_id}</Text>
                                    </View>
									<View style={{width:'50%'}}>
										<Text style={{ padding: 10 }}>{'quantity: '+item.quantity}</Text>
                                    </View>

                                </View>
                            }
                        />
                    </View>

                    <View style={styles.textContainer}>

                    <Text style={{ fontSize: 30}}>
                            Total: (sum(items) + fee)
					</Text>
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

