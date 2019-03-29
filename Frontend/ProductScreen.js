import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {SearchBar, ButtonGroup} from 'react-native-elements';
import { Header } from 'react-native-elements';
import {createStackNavigator} from 'react-navigation';
import loginScreen from './loginScreen.js';
import FoodScreen from './FoodScreen.js';

export default class ProductScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedIndex: 0
        }

        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
        this.fetchDrinks(selectedIndex)
        this.fetchDecor(selectedIndex)
    }

    fetchDrinks(index) {
        if (index = 0) {
            <Text style={{color: 'black', marginTop: '100'}}> hello </Text>
        }

    }

    fetchDecor(index) {
        if (index = 1) {
            <Text> Bye </Text>
        }
    }
    
   


    state = {
        products: [
            { name: "Budwiser, keg", imageSrc: "https://www.underconsideration.com/brandnew/archives/budweiser_2016_logo_detail.png" },
            { name: "Heineken, keg", imageSrc: "https://seeklogo.com/images/H/heineken-logo-C44AA57E2B-seeklogo.com.png" },
            { name: "Guinness, keg", imageSrc: "https://images-na.ssl-images-amazon.com/images/I/41xMVa2HXqL._SY355_.jpg" },
            { name: "Orchard Thieves, keg", imageSrc: "https://pbs.twimg.com/profile_images/594096158831697920/wGJi-8JQ_400x400.jpg" }
        ]

    };



    handleOnPress = () => {
        this.props.navigation.navigate('cartScreen')
    }

    handleOnPressLogin = () => {
        this.props.navigation.navigate('loginScreen')
    }

    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };


    render() {
        const buttons = ["Drinks", "Decor", "Utensils", "Food", "Games"]
        const { search } = this.state;
        const { selectedIndex } = this.state
        return (
       
            <View style={styles.container}>

                <Text style={{ fontSize: 40, textAlign: 'center', justifyContent: 'center' }}>
                    Swiftly</Text>
                <Image
                    style={{ width: 50, height: 50, flexDirection: 'row', right: 150, left: 100, marginTop: -50}}
                    source={{ uri: "https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/rocket-ship-2969-14241-300x300.png" }}
                 >
                </Image>

                <TouchableOpacity onPress={this.handleOnPress}>
                    <Image
                        source={{ uri: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojidex/82/shopping-trolley_1f6d2.png' }}
                   />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.handleOnPressLogin}>
                    <Image
                        style={{ width: 40, height: 40, flexDirection: 'row', right: 20, left: 335, marginTop: -50  }}
                        source={{ uri: 'https://cdn3.iconfinder.com/data/icons/e-commerce-8/91/account-512.png' }}
                    />
                </TouchableOpacity>

                <SearchBar

                    style={styles.searchBarContainer}
                    placeholder="Search.."
                    onChangeText={this.updateSearch}
                    value={search}
                >
                </SearchBar>       


                <ButtonGroup
                    onPress={this.updateIndex.bind(this)}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{ height: 50 }}
                    color="#FF0000"
                 >
                </ButtonGroup>
                </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
     // flex: 1,
      backgroundColor: "#FFFFFF",
       //alignItems: 'center',
        //justifyContent: 'center'
        //flexDirection: 'row'

    },

    headerContainer: {
        backgroundColor: 'white'
    },

    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 10,
        height: 50,
    },

    buttonContainer: {
        height: 50,
        width: 50
    },

    searchBarContainer: {
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
    },

    buttonStyle: {
        right: 20,
        left: 375,
        marginTop: -50,
         width: 30,
        height: 30
    }

});