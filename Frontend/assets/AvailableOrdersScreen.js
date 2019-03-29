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
import { Button } from 'react-native-elements';

class AvailableOrdersScreen extends React.Component{
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
	
	deleteMessage(item) {
		var list = [...this.state.orders]
		let index = list.indexOf(item);
		list.splice(index, 1);
		this.setState({ list });
	}
	
	renderOrder(order){
		return(
			<View style={{
				flex: 1,
				flexDirection: 'row',
				alignItems: 'center'
			}}>
				<TouchableOpacity
					style={{width: '50%'}}
					onPress={
						() => this.props.navigation.navigate('Order')
					}
				>
					<View style={{ flex:1,flexDirection: "row", alignItems: "center" }}>
						<Image
							style={{ width: 50, height: 50 }}
							source={require('./icon.png')}
						/>
						<Text style={{ padding: 10 }}>{order.name}</Text>
					</View>
				</TouchableOpacity>
				<View style={{ width: '50%',alignItems: 'center'}}>
					<Button
						type='solid'
						title='Select Order'
						onPress={() => this.deleteMessage(order) }
					/>
				</View>
				
				
			</View>
		);
	}
	
	render(){
		return(
			<View style={{
				flex: 1,
				flexDirection: 'column'
			}}>
				<View style={[styles.label]}>
					<Text style={[styles.labelText]}>Available Orders</Text>
				</View>
				<FlatList
					ItemSeparatorComponent={() =>
						<View
							style={{ height: 1, width: "100%", backgroundColor: "lightgray" }}
						/>
					}
					data={this.state.orders}
					keyExtractor={item => item.name}
					renderItem={({item}) => this.renderOrder(item)}
				/>
			</View>
		);
	}
}
export default AvailableOrdersScreen;

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