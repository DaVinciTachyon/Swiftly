import React,{Component} from 'react';
import {Platform, StyleSheet,Text,View,Button}from "react-native";

type Props = {};
export default class App extends Component<Props>{
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.heading}>
					react navigation home
				</Text>
				<Button title="Click me"/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	heading:{
		fontSize:20,
		textAlign: "center",
		margin:10
	}
});