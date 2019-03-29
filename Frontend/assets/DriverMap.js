import React from 'react';
import{
	Constants,
	MapView,
	Location,
	Permissions,
	Marker
} from 'expo';
import{
	StyleSheet,
	Text,
	View
} from 'react-native';
import MapViewDirections from './MapViewDirections';

const LATITUDE = 53.343537;
const LONGITUDE = -6.250267;
const DELTA = 0.11;
const GOOGLE_MAPS_APIKEY = 'AIzaSyCYvMpmVhFc0ydILEuXGJNYNGFnBoKPCL8';


class DriverMap extends React.Component{

	state = {
		mapRegion: {
			latitude: null,
			longitude: null,
			latitudeDelta: null,
			longitudeDelta: null
		},
		locationResult: null,
		location: {coords: { latitude: LATITUDE, longitude: LONGITUDE}},
		markers:[
			{
				title:'depot',
				coordinates:{
					latitude:53.3,
					longitude:-6.4
				}
			},{
				title:'second',
				coordinates:{
					latitude:53.37,
					longitude:-6.19
				}
			}
		]
	}
	
	componentDidMount() {
		this._getLocationAsync();
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
						destination={this.state.markers[0].coordinates}
						apikey={GOOGLE_MAPS_APIKEY}
						strokeWidth={5}
  						strokeColor="#FF0000"
  						onReady={this.onReady}
  						onError={this.onError}
					/>
					<MapView.Marker
						coordinate={this.state.markers[0].coordinates}
					/>
				</MapView>
				{/*		put in initialRegion to start map over warehouse
						latitude: this.state.location.coords.latitude,
						longitude: this.state.location.coords.longitude,
						
						under mapview??
						showsTraffic = {true}
						onRegionChange={this._handleMapRegionChange}
				*/}
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