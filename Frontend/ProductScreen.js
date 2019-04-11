import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, Button, ImageBackground, Dimensions, Scroll, ActivityIndicator, TouchableOpacity } from 'react-native';
import { SearchBar, CheckBox, Icon } from 'react-native-elements';
import { Header } from 'react-native-elements';
import loginScreen from './loginScreen.js';
import FoodScreen from './FoodScreen.js';

const {url} = '';

export default class ProductScreen extends React.Component {

	url = this.props.navigation.getParam('url', 'noo');
	
	constructor(props) {
		super(props);
		this.state = {
			user_id: "107",
			loading: true,
			dataSource:[],
			moreData:[]
		};
	}
	
	componentDidMount(){
		{/* url
			- ipv4 address of machine server is running on(on same network)
			- port server is on
			- specfic to data being queryied
		*/}
		fetch('http://'+this.url+'/allitem/')
		.then(response => response.json())
		.then((responseJson)=> {
			this.setState({
				loading: false,
				dataSource: responseJson
			})
		})
		.catch(error=>console.log(error)) //to catch the errors if any
	}
	
	addToCart(item){
		fetch('http://'+this.url+'/cart/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				user_id: this.state.user_id,
				item_id: item.id,
				quantity: "1"
			}),
		})
		.then(response => response.json())
				.then((responseJson)=> {
					this.setState({
						moreData: responseJson
					})
				})
				.catch(error=>console.log(error)) //to catch the errors if any;
	}

    render() {
        const { search } = this.state;
		{/* for when data has not loaded in, loading screen	*/}
		if(this.state.loading){
			return( 
				<View style={styles.loader}> 
					<ActivityIndicator size="large" color="#0c9"/>
				</View>
			)
		}
        return (
            <SafeAreaView>

                <ImageBackground
                    style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width }}
                    source={{ uri: "https://previews.123rf.com/images/syntheticmessiah/syntheticmessiah1707/syntheticmessiah170700012/81891385-stone-texture-background-of-brick-wall-texture-surface-with-stone-light-yellow-bricks.jpg" }}
                >

                    <View style={styles.container}>
						<Text style={{ fontSize: 50, textAlign: 'center', justifyContent: 'center' }}>
							Swiftly
						</Text>
						<Image
							style={{ width: 50, height: 50, flexDirection: 'row', right: 400, left: 75, marginTop: -50 }}
							source={{ uri: "https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/rocket-ship-2969-14241-300x300.png" }}
						/>
                    </View>

					<View style={styles.iconContainer}>
					  
					  { /*  <Icon 
						 reverse
						 name='male'
						 type='font-awesome'
						 color='#1569C7'
						 onPress={() => this.props.navigation.navigate('loginScreen')} />
	*/}
						<Icon
							reverse
							name='shopping-cart'
							type='font-awesome'
							 color='#1569C7'
							 onPress={() => this.props.navigation.navigate('cartScreen', {url: this.url})} />      
					
					</View>


					<View style={styles.container}>
						
						<SearchBar

							style={styles.searchBarContainer}
							placeholder="Search.."
							onChangeText={this.updateSearch}
							value={search}
						>
						 </SearchBar>
						
					</View>


                <View style={styles.buttonContainer}>
                    
                    <Button
                           onPress={() => {
                                this.props.navigation.navigate('ProductScreen')
                            }}
                            title="Drinks"
                            color="#1569C7"
                        >
                        </Button>
                    <Button
                            onPress={() => {
                                this.props.navigation.navigate('FoodScreen')
                            }}
                            title="Food"
                            color="#1569C7"
                        >
                        </Button>
                      <Button
                            
                            onPress={() => {
                                this.props.navigation.navigate('GamesScreen')
                            }}
                            title="Games"
                            color="#1569C7"
                        >
                        </Button>
                        <Button
                          
                            onPress={() => {
                                this.props.navigation.navigate('UtensilsScreen')
                            }}
                            title="Utensils"
                            color="#1569C7"
                        >
                        </Button>
                       <Button
                            
                            onPress={() => {
                                this.props.navigation.navigate('DecorScreen')
                            }}
                            title="Decor"
                            color="#1569C7"
                        >
                    </Button>
                    <Button style= {{height: 30, width: 70}}
                       
                        onPress={() => {
                            this.props.navigation.navigate('extrasScreen')
                        }}
                        title="Extras"
                        color="#1569C7"
                    >
                     </Button>
                </View>

                 <View style={styles.FlatListContainer}>
                    
                    <FlatList
                    ItemSeparatorComponent={() =>
                        <View
                            style={{ height: 1, width: "100%", backgroundColor: "lightgray" }}
                        />
                    }
                    data={this.state.dataSource}
                    keyExtractor={item => item.url}
                        renderItem={({ item }) =>
                            <View style={{ flexDirection: "row", alignItems: "center"}}>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={{ uri: item.imageSrc }}
                            />
                             <Text style={{ padding: 10 }}>{item.name}</Text>
                            <View style={styles.checkboxContainer}>
                              <CheckBox
                                right
                                 checkedIcon='checkCircle'
                                 uncheckedIcon='plus'
                                checked={this.state.checked}
								onPress ={
									() => this.addToCart(item)
								}
                             />
                            </View>
                            
                        </View>
                    }
                    />
                
                   </View>
                 </ImageBackground>
            </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {

    },

    headerContainer: {
        backgroundColor: 'white'
    },

    iconContainer: {
        flexDirection: 'row',
        left: 290,
        right: 20,
        marginTop: -60,
    },

    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 10,
        height: 50,
    },

    FlatListContainer: {
        backgroundColor: 'white',
    },

    buttonContainer: {
        flex: -1,
        flexDirection: 'row',
        height: 30,
        width: 170,
        
    },

    searchBarContainer: {
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
    },

    buttonStyle: {
        color: '#1569C7'
    },

    checkboxContainer: {
        marginLeft: 10
        
       
    }

});