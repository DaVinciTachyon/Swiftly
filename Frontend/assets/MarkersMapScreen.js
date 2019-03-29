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

const LATITUDE = 53.343537;
const LONGITUDE = -6.250267;
const DELTA = 0.11;

class MarkersMapScreen extends React.Component{

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
				coordinates:{
					latitude:53.3,
					longitude:-6.4
				}
			},{
				coordinates:{
					latitude:53.37,
					longitude:-6.19
				}
			}
		]
	}

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
				>
				{this.state.markers.map(item =>(
					<MapView.Marker
						key={item.coordinates.latitude.toString()}
						coordinate={item.coordinates}
					/>
				))}
				</MapView>
				{/*		put in initialRegion to start map over warehouse
						latitude: this.state.location.coords.latitude,
						longitude: this.state.location.coords.longitude,
						
						under mapview??
						showsTraffic = {true}
						onRegionChange={this._handleMapRegionChange}
				*/}
				<Text style={{color:'#FFFFFF'}}>
				{/*	BUG - to be left in for my location button to show	*/}
					{this.state.locationResult}
				</Text>
			</View>
		);
	}
}
export default MarkersMapScreen;