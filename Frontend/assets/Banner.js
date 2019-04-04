import React from 'react';
import{
	StyleSheet,
	Text,
	View,
	Image,
	Alert,
	TouchableOpacity
} from 'react-native';

class Banner extends React.Component{

	render() {
		return (
			<View>
			{/* create logo and name as home button at top left corner	*/}
				<TouchableOpacity 
					onPress={() => {
						Alert.alert("Home")
					}}
				>
					<View style={{flexDirection: 'row'}}>
						<Image
							style={{ width: 50, height: 50 }}
							source={{uri:"https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/rocket-ship-2969-14241-300x300.png"}}
						/>
						<Text style={{ 
							fontSize: 40, flex: 1, alignItems: "center", justifyContent: "center"
						}}>
							Swiftly
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}
export default Banner;