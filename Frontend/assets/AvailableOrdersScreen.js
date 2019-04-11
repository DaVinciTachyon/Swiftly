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

const {url} = '';
const {temp} = '';


class AvailableOrdersScreen extends React.Component{
	
	url = this.props.navigation.getParam('url', 'noo');
	
	constructor(props) {
		{/* holds data fetched to be displayed */}
		super(props);
		this.state = {
			loading: true,
			postData:[],
			dataSource:[],
			orders: [{
				address: "29 Oldtown Ave,\nSantry,\nDublin 9,\nD09 WP48",screen:'Order1'
			},{
				address: "34 Seapark Rd,\nClontarf East,\nDublin 3,\nD03 HX77",screen:'Order1'
			},{
				address: "27 Charleston Ave,\nDublin 6,\nD06 KN72",screen:'Order1'
			}]
		};
	}
	
	componentDidMount(){
		{/* url
			- ipv4 address of machine server is running on(on same network)
			- port server is on
			- specfic to data being queryied
		*/}
		fetch('http://'+this.url+'/pickuplocation/')
		.then(response => response.json())
		.then((responseJson)=> {
			this.setState({
				loading: false,
				dataSource: responseJson
			})
		})
		.catch(error=>console.log(error)) //to catch the errors if any
	}
	
	deleteMessage() {
		//bugged
		fetch(this.url+'8/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id: 8,
				address: "27 Charleston Ave,\r\nDublin 6,\r\nD06 KN72",
				longitude: -6.258045,
				latitude: 53.322879,
				phone_number: 8,
				is_open: true,
				is_active: false
			}),
		})
		.then(response => response.json())
				.then((responseJson)=> {
					this.setState({
						postData: responseJson
					})
				})
				.catch(error=>console.log(error)) //to catch the errors if any;
	}
	
	renderOrder(order){
		if(order.is_open){
			return;
		}
		return(
			<View style={{
				flex: 1,
				flexDirection: 'row',
				alignItems: 'center'
			}}>
				{/*	region for information on the order if touched brings you to said order	*/}
				<TouchableOpacity
					style={{width: '50%'}}
					onPress={
						() => this.props.navigation.navigate('Order1', {lat: order.latitude, long: order.longitude})
					}
				>
					<View style={{ flex:1,flexDirection: "row", alignItems: "center" }}>
						<Text style={{ padding: 10 }}>{order.address}</Text>
					</View>
				</TouchableOpacity>
				{/*	button to add a order to a drivers selected orders	*/}
				<View style={{ width: '50%',alignItems: 'center'}}>
					<Button
						type='solid'
						title='Select Order'
						onPress={() => this.deleteMessage() }
					/>
				</View>
			</View>
		);
	}
	
	render(){
		{/* for when data has not loaded in, loading screen
		if(this.state.loading){
			return( 
				<View style={styles.loader}> 
					<ActivityIndicator size="large" color="#0c9"/>
				</View>
			)
		}
		*/}
		return(
			<View style={{
				flex: 1,
				flexDirection: 'column'
			}}>
				{/*	available orders label	*/}
				<View style={[styles.label]}>
					<Text style={[styles.labelText]}>Available Orders</Text>
				</View>
				{/*	flatlist that renders the available orders	*/}
				<FlatList
					data={this.state.dataSource}
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