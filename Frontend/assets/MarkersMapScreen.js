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
					latitude:53.310627,
					longitude:-6.334087
				},
				screen:'Order1'
			},{
				coordinates:{
					latitude:53.278943,
					longitude:-6.227107
				},
				screen:'Order1'
			},{
				coordinates:{
					latitude:53.397589,
					longitude:-6.201678
				},
				screen:'Order1'
			},{
				coordinates:{
					latitude:53.388510,
					longitude:-6.319687
				},
				screen:'Order1'
			},{
				coordinates:{
					latitude:53.283560,
					longitude:-6.300406
				},
				screen:'Order1'
			},{
				coordinates:{
					latitude:53.393166,
					longitude: -6.260180
				},
				screen:'Order1'
			},{
				coordinates:{
					latitude:53.364398,
					longitude: -6.187742
				},
				screen:'Order1'
			},{
				coordinates:{
					latitude:53.322879,
					longitude: -6.258045
				},
				screen:'Order1'
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
							onPress={
								() => this.props.navigation.navigate(item.screen)
							}
						/>
					))}
				</MapView>
				<Text style={{color:'#FFFFFF'}}>
				{/*	BUG - to be left in for my location button to show	*/}
					{this.state.locationResult}
				</Text>
			</View>
		);
	}
}
export default MarkersMapScreen;