import React from 'react';
import{Constants,MapView,Location,Permissions,Marker} from 'expo';
import{StyleSheet,Text,View} from 'react-native';
import MapViewDirections from './MapViewDirections';

const LATITUDE = 53.343537;
const LONGITUDE = -6.250267;
const DELTA = 0.11;
const GOOGLE_MAPS_APIKEY = 'AIzaSyCYvMpmVhFc0ydILEuXGJNYNGFnBoKPCL8';

const {lat} = 1;
const {long} = 1;

class DriverMap extends React.Component{
	
	lat = this.props.navigation.getParam('lat', 1);
	long = this.props.navigation.getParam('long', 1);
	
	constructor(props) {
		{/* holds data fetched to be displayed */}
		super(props);
		this.state = {
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
						destination={LatLng={
							latitude: this.lat,
							longitude: this.long,
						}}
						apikey={GOOGLE_MAPS_APIKEY}
						strokeWidth={5}
  						strokeColor="#FF0000"
  						onReady={this.onReady}
  						onError={this.onError}
					/>
					<MapView.Marker
						coordinate={LatLng={
							latitude: this.lat,
							longitude: this.long,
						}}
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