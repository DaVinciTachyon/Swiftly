import React from 'react';
import {
    StyleSheet, Text, View, Button, TextInput, StatusBar
} from 'react-native';
import ProductScreen from './ProductScreen.js';


export default class HomeScreen extends React.Component {

    state = { term: '' };

    render() {
        return (

            <View style={styles.container}>
                <TextInput style={styles.container}
                    style={styles.searchText}
                    onChangeTest={term => this.setState({ term })}
                    placeholder="Postcode"
                    value={this.state.term}
                 />
                <Button

                    buttonStyle={styles.buttonStyle}
                    title="Search"
                    onPress={() => console.log(this.state.term)}
                    color="#FF0000"
                />
                <View style={styles.buttonContainer}>
                 <Button
                     buttonStyle={{flexDirection: 'column'}}
                     onPress={() => {
                         this.props.navigation.navigate('ProductScreen')
                         
                    }}
                   title="Make an Order"
                   color= "#FF0000"
                 />
                    </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 250,
        marginLeft: 10,
        marginRight: 10
    },

    searchText: {
        flex: 1
    },

    textInputStyle: {
        flexDirection: 'row'
    },

    buttonStyle: {
        height: 10,
        marginBottom: 2

    },

    buttonContainer: {
        flex: 1,
    },
    
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});