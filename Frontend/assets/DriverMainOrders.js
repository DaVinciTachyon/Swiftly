import React from 'react';
import{
	StyleSheet,
	Text,
	View,
	FlatList,
	Image,
	Alert,
	TouchableOpacity,
	ActivityIndicator
} from 'react-native';

const {url} = '';

class DriverMainOrders extends React.Component{
	
	url = this.props.navigation.getParam('url', 'noo');
	
	constructor(props) {
		{/* holds data fetched to be displayed */}
		super(props);
		this.state = {
			url: "lul",
			loading: true,
			dataSource:[]
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

	renderOrder(item){
		if(!item.is_open){
			return;
		}
		return(
			<TouchableOpacity
				onPress={
					() => this.props.navigation.navigate('Order1',{lat: item.latitude, long: item.longitude})
				}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Text style={{ padding: 10 }}>{item.address}</Text>
				</View>
			</TouchableOpacity>
		);
	}

	render() {
		{/* for when data has not loaded in, loading screen	*/}
		if(this.state.loading){
			return( 
				<View style={styles.loader}> 
					<ActivityIndicator size="large" color="#0c9"/>
				</View>
			)
		}
		
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
							() => this.props.navigation.navigate('MarkersMap',{url: this.url})
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
					data={this.state.dataSource}
					extraData={this.state}
					keyExtractor={item => item.url}
					renderItem={({item}) => this.renderOrder(item)}
					
				/>
				{/*	available orders - takes to all available orders	*/}
				<TouchableOpacity
					style={styles.label}
					onPress={
						() => this.props.navigation.navigate('AvailableOrders',{url: this.url})
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