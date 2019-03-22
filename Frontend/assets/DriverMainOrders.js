import React from 'react';
import{
	StyleSheet,
	Text,
	View,
	FlatList,
	Image,
	Alert,
	TouchableOpacity
} from 'react-native';

class DriverMainOrders extends React.Component{
	state = {
		products: [{	
			name: "Address0,\nAddress,\nAddress,\nAddress", imageSrc:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpRXPIXfIUFnEv6ty3yEvfXKw302gugp-4XFlmsTENiLe-gjo"
		},{
			name: "Address1,\nAddress,\nAddress,\nAddress", imageSrc:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpRXPIXfIUFnEv6ty3yEvfXKw302gugp-4XFlmsTENiLe-gjo"
		},{	
			name: "Address2,\nAddress,\nAddress,\nAddress", imageSrc:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpRXPIXfIUFnEv6ty3yEvfXKw302gugp-4XFlmsTENiLe-gjo"
		},{
			name: "Address3,\nAddress,\nAddress,\nAddress", imageSrc:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpRXPIXfIUFnEv6ty3yEvfXKw302gugp-4XFlmsTENiLe-gjo"
		},{
			name: "Address4,\nAddress,\nAddress,\nAddress", imageSrc:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpRXPIXfIUFnEv6ty3yEvfXKw302gugp-4XFlmsTENiLe-gjo"
		},{
			name: "Address5,\nAddress,\nAddress,\nAddress", imageSrc:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpRXPIXfIUFnEv6ty3yEvfXKw302gugp-4XFlmsTENiLe-gjo"
		}]
	}
	render() {
		return (
			<View style={{
				flex: 1,
				flexDirection: 'column'
			}}>
			{/*	selected orders - takes to all seleced orders	*/}
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						Alert.alert("selected orders screen")
					}}
				>
					<Text style={[styles.labelText]}>
						Selected Orders
					</Text>
				</TouchableOpacity>
			{/*	flatlist of selected orders	*/}
				<FlatList
					ItemSeparatorComponent={() =>
						<View
							style={{ height: 1, width: "100%", backgroundColor: "lightgray" }}
						/>
					}
					data={this.state.products}
					keyExtractor={item => item.name}
					renderItem={({ item }) =>
						<TouchableOpacity
							onPress={() => {
								Alert.alert("order screen for:\n"+item.name)
							}}
						>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<Image
									style={{ width: 50, height: 50 }}
									source={{ uri: item.imageSrc }}
								/>
								<Text style={{ padding: 10 }}>{item.name}</Text>
							</View>
						</TouchableOpacity>
					}
				/>
			{/*	available orders - takes to all available orders	*/}
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						Alert.alert("available orders screen")
					}}
				>
					<Text style={[styles.labelText]}>
						available Orders
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
export default DriverMainOrders;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#FF0000',
    padding: 10
  },
  labelText: {
    color: '#FFFFFF'
  }
})