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
		orders: [{	
			name: "Address0,\nAddress,\nAddress,\nAddress",coordinates:[{lat:123},{lng:-6}]
		},{
			name: "Address1,\nAddress,\nAddress,\nAddress",coordinates:[{lat:123},{lng:-6}]
		},{	
			name: "Address2,\nAddress,\nAddress,\nAddress",coordinates:[{lat:123},{lng:-6}]
		},{
			name: "Address3,\nAddress,\nAddress,\nAddress",coordinates:[{lat:123},{lng:-6}]
		},{
			name: "Address4,\nAddress,\nAddress,\nAddress",coordinates:[{lat:123},{lng:-6}]
		},{
			name: "Address5,\nAddress,\nAddress,\nAddress",coordinates:[{lat:123},{lng:-6}]
		}]
	}
	render() {
		return (
			<View style={{
				flex: 1,
				flexDirection: 'column'
			}}>
			{/*	selected orders - takes to all seleced orders	*/}
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<View style={[styles.label,{width : '50%'}]}>
						<Text style={[styles.labelText]}>
							Selected Orders
						</Text>
					</View>
					<TouchableOpacity
						style={[styles.label,{width : '50%'}]}
						onPress={
							() => this.props.navigation.navigate('MarkersMap')
						}
					>
						<Text style={[styles.labelText]}>
							View On Map
						</Text>
					</TouchableOpacity>
				</View>
			{/*	flatlist of selected orders	*/}
				<FlatList
					ItemSeparatorComponent={() =>
						<View
							style={{ height: 1, width: "100%", backgroundColor: "lightgray" }}
						/>
					}
					data={this.state.orders}
					keyExtractor={item => item.name}
					renderItem={({ item }) =>
						<TouchableOpacity
							onPress={
								() => this.props.navigation.navigate('Order')
							}
						>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<Image
									style={{ width: 50, height: 50 }}
									source={require('./icon.png')}
								/>
								<Text style={{ padding: 10 }}>{item.name}</Text>
							</View>
						</TouchableOpacity>
					}
				/>
			{/*	available orders - takes to all available orders	*/}
				<TouchableOpacity
					style={styles.label}
					onPress={
						() => this.props.navigation.navigate('AvailableOrders')
					}
				>
					<Text style={[styles.labelText]}>
						Available Orders
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
export default DriverMainOrders;

const styles = StyleSheet.create({
  label: {
    alignItems: 'center',
    backgroundColor: '#1569C7',
    padding: 10
  },
  labelText: {
    color: '#FFFFFF'
  }
})