import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';

import ProductScreen from './ProductScreen.js';


export default class HomeScreen extends React.Component {

    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };


    render() {

        const { search } = this.state;
       
        return ( 

            <View style={styles.container}>

                <ImageBackground
                    style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width }}
                    source={{uri: "https://previews.123rf.com/images/syntheticmessiah/syntheticmessiah1707/syntheticmessiah170700012/81891385-stone-texture-background-of-brick-wall-texture-surface-with-stone-light-yellow-bricks.jpg"}}
                 >
                <Image
                    style={{ width: 90, height: 90, flexDirection: 'row', right: 150, left: 150, marginTop: 50 }}
                    source={{ uri: "https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/rocket-ship-2969-14241-300x300.png" }}
                >
                </Image>

                <Text style={{ fontSize: 75, textAlign: 'center', justifyContent: 'center' }}>
                    Swiftly</Text>
               

                <SearchBar
                    style={{ marginTop: 300, marginLeft: 10, marginRight: 10, padddingTop: 70 }}
                    placeholder="Postcode..."
                    onChangeText={this.updateSearch}
                    value={search}
                /> 

                  <Button
                    type="solid"
                    size={15}
                    style={{height: 60, width: 10, marginTop: 500}}
                     onPress={() => {
                         this.props.navigation.navigate('ProductScreen')
                         
                    }}
                   title="Make an Order"
                   color= "#FF0000"
                />

                </ImageBackground>
                </View>
        );
   }
}
                
const styles = StyleSheet.create({
        container: {
    },

    containerText: {
        paddingTop: 8,
        color: 'black',
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },

    searchText: {
        flex: 1
    },

    textInputStyle: {
        flexDirection: 'row'
    },

    buttonStyle: {
        height: 10,
        width: 10,
       

    },

    buttonContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    logoStyle: {
        flex: 1,
        alignItems: 'center',
        height: 50,
        width: 50,
    }
});
