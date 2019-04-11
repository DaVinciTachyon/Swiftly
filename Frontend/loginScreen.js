import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView, Button, ImageBackground, Dimensions
} from 'react-native';

const {ipAndPort} = '';

{/*this screen is where a user/driver logins into the app using their credentials - it is connected to the database where depending on their
credentials it brings them to a different side of the app, the consumer side or the driver side respectively.
It implements a text input bar, a keyboard, and a login button. The password is also encrypted*/}
export default class Login extends Component {
	// ip and port are specific to the computer the server is being run on
	ipAndPort = '10.6.29.26:8000';
	
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container}
                        onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo}
                                    source={{ uri: "https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/rocket-ship-2969-14241-300x300.png" }}>
                                </Image>
                                <Text style={styles.title}>Swiftly</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                    placeholder="Enter username/email"
                                    placeholderTextColor='black'
                                    keyboardType='email-address'
                                    returnKeyType='next'
									onEndEditing={(text) => this.setState({text})}
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                                />
                                <TextInput style={styles.input}
                                    placeholder="Enter password"
                                    placeholderTextColor='black'
                                    returnKeyType='go'
                                    secureTextEntry
                                    autoCorrect={false}
                                    ref={"txtPassword"}
                                />
								{/*	Temporary until login is sorted	*/}
								<TouchableOpacity
									onPress={() => {
										this.props.navigation.navigate('Home',{url: this.ipAndPort})
									}}
									onLongPress={()=>{
										this.props.navigation.navigate('Driver',{url: this.ipAndPort})
									}}
								>
								<Button
									title="SIGN IN"
									color="#1569C7"
									disabled={true}
										onPress={() => {
											this.props.navigation.navigate('Home')
										}}
								/>
								</TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: 50,
        height: 50,
    },
    title: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        // backgroundColor: 'red'
    },
    input: {
        height: 40,
        backgroundColor: 'grey',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#1569C7',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
});
