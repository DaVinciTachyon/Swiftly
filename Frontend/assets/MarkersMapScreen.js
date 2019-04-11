import React from 'react';
import{Constants,MapView,Location,Permissions,Marker} from 'expo';
import{StyleSheet,Text,View,ActivityIndicator} from 'react-native';

const LATITUDE = 53.343537;
const LONGITUDE = -6.250267;
const DELTA = 0.11;
const {url} = '';

class MarkersMapScreen extends React.Component{
	
	url = this.props.navigation.getParam('url', 'noo');
	
	constructor(props) {
		{/* holds data fetched to be displayed */}
		super(props);
		this.state = {
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

	render() {
		{/* for when data has not loaded in, loading screen */}
		if(this.state.loading){
			return( 
				<View> 
					<ActivityIndicator size="large" color="#0c9"/>
				</View>
			)
		}
		return (
			<View style={{flex:1}}>
				<MapView
					style={{ flex: 1 }}
					initialRegion={{
						latitude: LATITUDE,
						longitude: LONGITUDE,
						latitudeDelta: DELTA*2,
						longitudeDelta: DELTA
					}}
					showsUserLocation = {true}
					showsMyLocationButton = {true}
				>
					{this.state.dataSource.map(item =>(
						<MapView.Marker
							key={item.url.toString()}
							coordinate={LatLng ={
								latitude: item.latitude,
								longitude: item.longitude,
							}}
							onPress={
								() => this.props.navigation.navigate('Order1', {lat: item.latitude, long: item.longitude})
							}
						/>
					))}
				</MapView>
			</View>
		);
	}
}
export default MarkersMapScreen;