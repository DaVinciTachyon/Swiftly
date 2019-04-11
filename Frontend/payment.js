
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';

{/* this screen uses a form and the user can add their card information and their details to purchase items that they have added to their cart */}

export default class payment extends React.Component {

    render() {
        return (

            <View style={styles.regForm}>
             <Text style={styles.header}> Payment </Text>
            <TextInput style={styles.textInput} placeholder="Name"
                underlineColorAndroid={"transparent"} />
                <TextInput style={styles.textInput} placeholder="Address Line 1"
                    underlineColorAndroid={"transparent"} />
                <TextInput style={styles.textInput} placeholder="Address Line 2"
                    underlineColorAndroid={"transparent"} />
                <TextInput style={styles.textInput} placeholder="Card Number"
                    underlineColorAndroid={"transparent"} />
                <TextInput style={styles.textInput} placeholder="Expiry Date"
                    underlineColorAndroid={"transparent"} />
                <TextInput style={styles.textInput} placeholder="CVC"
                    underlineColorAndroid={"transparent"} />
                <Button style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate('orderReceived')

                    }}
                     title= 'Pay Now'
                >
                </Button>
              </View>
        );
   }
}

const styles = StyleSheet.create({
    regForm: {
        alignSelf: 'stretch'
    },
    header: {
        fontSize: 24,
        color: 'black',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#1569C7',
        borderBottomWidth: 1
    },

    textInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: 'black',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#1569C7',
        marginTop: 30
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }
});
