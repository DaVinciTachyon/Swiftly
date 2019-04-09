import React from 'react';
import{Constants,MapView,Location,Permissions,Marker} from 'expo';
import{StyleSheet,Text,View} from 'react-native';
import MapViewDirections from './MapViewDirections';

const LATITUDE = 53.343537;
const LONGITUDE = -6.250267;
const DELTA = 0.11;
const GOOGLE_MAPS_APIKEY = 'AIzaSyCYvMpmVhFc0ydILEuXGJNYNGFnBoKPCL8';

class DriverMap extends React.Component{
	constructor(props) {
		{/* holds data fetched to be displayed */}
		super(props);
		this.state = {
			loading: true,
			dataSource:[],
			orders: [{
				address: "29 Oldtown Ave,\nSantry,\nDublin 9,\nD09 WP48",screen:'Order1'
			},{
				address: "34 Seapark Rd,\nClontarf East,\nDublin 3,\nD03 HX77",screen:'Order1'
			},{
				address: "27 Charleston Ave,\nDublin 6,\nD06 KN72",screen:'Order1'
			}],
			mapRegion: {
				latitude: null,
				longitude: null,
				latitudeDelta: null,
				longitudeDelta: null
			},
			locationResult: null,
			location: {coords: { latitude: LATITUDE, longitude: LONGITUDE}},
			marker:{
				coordinates:{
					latitude:53.310627,
					longitude:-6.334087
				}
			}
		};
	}

	state = {
		
	}
	
	componentDidMount() {
		this._getLocationAsync();
		{/* url
			- ipv4 address of machine server is running on(on same network)
			- port server is on
			- specfic to data being queryied
		*/}
		fetch("http://192.168.0.73:8000/")
		.then(response => response.json())
		.then((responseJson)=> {
			this.setState({
				loading: false,
				dataSource: responseJson
			})
		})
		.catch(error=>console.log(error)) //to catch the errors if any
	}
	
	_handleMapRegionChange = mapRegion => {
		this.setState({ mapRegion });
	};

	_getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			this.setState({
				locationResult: 'Permission to access location was denied',
				location,
			});
		}

		let location = await Location.getCurrentPositionAsync({});
		this.setState({ locationResult: JSON.stringify(location), location, });
	};

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
					onRegionChange={this._handleMapRegionChange}
				>
				
					<MapViewDirections
						origin={this.state.location.coords}
						destination={this.state.marker.coordinates}
						apikey={GOOGLE_MAPS_APIKEY}
						strokeWidth={5}
  						strokeColor="#FF0000"
  						onReady={this.onReady}
  						onError={this.onError}
					/>
					<MapView.Marker
						coordinate={this.state.marker.coordinates}
					/>
				</MapView>
				<Text
					style={{color:'#FFFFFF'}}
				>
				{/*	BUG - to be left in for my location button to show	*/}
					{this.state.locationResult}
				</Text>
			</View>
		);
	}
}
export default DriverMap;