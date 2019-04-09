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
	
	constructor(props) {
		{/* holds data fetched to be displayed */}
		super(props);
		this.state = {
			loading: true,
			dataSource:[],
			orders: [{	
				address: "38 St Malachy's Dr,\nGreenhills,\nDublin 12,\nD12 V9P6",screen:'Order1'
			},{
				address: "169 Balally Dr,\nBlackthorn,\nDublin 16,\nD16 XE67",screen:'Order1'
			},{	
				address: "29 Greencastle Dr,\nBonnybrook,\nDublin,\nD17 W273",screen:'Order1'
			},{
				address: "77 Ratoath Ave,\nFinglas South,\nDublin 11,\nD11 W285",screen:'Order1'
			},{
				address: "28 The Glen,\nBoden Park,\nRathfarnham,\nDublin 16,\nD16 N6C5",screen:'Order1'
			},{
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
		fetch("http://192.168.0.73:8000/pickuplocation/")
		.then(response => response.json())
		.then((responseJson)=> {
			this.setState({
				loading: false,
				dataSource: responseJson
			})
		})
		.catch(error=>console.log(error)) //to catch the errors if any
	}
	
	render() {
		{/* for when data has not loaded in, loading screen
		if(this.state.loading){
			return( 
				<View style={styles.loader}> 
					<ActivityIndicator size="large" color="#0c9"/>
				</View>
			)
		}
		*/}
		return (
			<View style={{
				flex: 1,
				flexDirection: 'column'
			}}>
			{/*	orders views into column	*/}
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					{/* selected orders label */}
					<View style={[styles.label,{width : '50%'}]}>
						<Text style={[styles.labelText]}>
							Selected Orders
						</Text>
					</View>
					{/* view on map option - takes to a map with a marker for each order */}
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
					keyExtractor={item => item.address}
					renderItem={({ item }) =>
						<TouchableOpacity
							onPress={
								() => this.props.navigation.navigate(item.screen)
							}
						>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<Text style={{ padding: 10 }}>{item.address}</Text>
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