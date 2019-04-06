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
			address: "29 Oldtown Ave,\nSantry,\nDublin 9,\nD09 WP48",screen:'Order1'
		},{
			address: "34 Seapark Rd,\nClontarf East,\nDublin 3,\nD03 HX77",screen:'Order1'
		},{
			address: "27 Charleston Ave,\nDublin 6,\nD06 KN72",screen:'Order1'
		}]
	}
	
	deleteMessage(item) {
		Alert.alert("add order to selected");
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
						() => this.props.navigation.navigate(order.screen)
					}
				>
					<View style={{ flex:1,flexDirection: "row", alignItems: "center" }}>
						<Text style={{ padding: 10 }}>{order.address}</Text>
					</View>
				</TouchableOpacity>
				<View style={{ width: '50%',alignItems: 'center'}}>
					<Button
						type='solid'
						title='Select Order'
						onPress={({order}) => this.deleteMessage(order) }
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
					data={this.state.orders}
					extraData={this.state}
					keyExtractor={item => item.address}
					renderItem={({item}) => this.renderOrder(item)}
					ItemSeparatorComponent={() =>
						<View
							style={{ height: 1, width: "100%", backgroundColor: "lightgray" }}
						/>
					}
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