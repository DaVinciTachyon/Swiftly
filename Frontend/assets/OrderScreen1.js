import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	FlatList,
	Image,
	Alert,
	CheckBox,
	TouchableOpacity
} from 'react-native';

class OrderScreen1 extends React.Component{
	state = {
		products: [{
			itemName: "Silver Hearts Confetti - 6 pack", quantity: '1', imageSrc:
			"https://cdn.shopify.com/s/files/1/0161/3068/products/silver_2048x.jpg?v=1397979789"
		},{
			itemName: "Gold Hearts Confetti - 6 pack", quantity: '2', imageSrc:
			"https://i.ebayimg.com/images/g/cM8AAOSwzBJahJkd/s-l1600.jpg"
		},{	
			itemName: "Red Hearts Confetti - 6 pack", quantity: '1', imageSrc:
			"https://cdn.shopify.com/s/files/1/0161/3068/products/red_confetti_2048x.jpg?v=1464429186"
		},{
			itemName: "White Balloons - 25 Pack", quantity: '3', imageSrc:
			"https://images-na.ssl-images-amazon.com/images/I/51kqVUuDctL._SY355_.jpg"
		}]
	}
	
	render(){
		return(
			<View style={{
				flex:1,
				flexDirection: 'column'
			}}>
				<View 
					style={{
						height: 50,
						backgroundColor: '#1569C7'
				}}>
			{/*	stripe with Item-Quantity-on	*/}
					<View style={[styles.alignCenter,{
						flex: 1,
						flexDirection: 'row'
					}]}>
						<Text style={[styles.labelText,styles.itemWidth]}>
							Item
						</Text>
						<Text style={[styles.labelText,styles.quantityWidth]}>
							Quantity
						</Text>
						<Text style={[styles.labelText,styles.onWidth]}>
							On
						</Text>
					</View>
				</View>
				<FlatList
					ItemSeparatorComponent={() =>
						<View
							style={{ height: 1, width: "100%", backgroundColor: "lightgray" }}
						/>
					}
					data={this.state.products}
					keyExtractor={item => item.itemName}
					renderItem={({ item }) =>
						<View style={[styles.alignCenter,{flexDirection: "row"}]}>
			{/*	flatlist of selected orders	*/}
							{/*	one row in flatlist for one item	*/}
							<TouchableOpacity
								style={styles.itemWidth}
								onPress={() => {
									Alert.alert("item screen for:\n"+item.itemName)
								}}
							>
								<View style={[styles.alignCenter,{ flexDirection: "row" }]}>
			{/*	region for item info	*/}
									<Image
										style={{ width: 50, height: 50 }}
										source={{ uri: item.imageSrc }}
									/>
									<Text style={{ padding: 10 }}>{item.itemName}</Text>
								</View>
							</TouchableOpacity>
						
							<View style={[styles.quantityWidth,styles.alignCenter]}>
			{/*	region for quantity of items	*/}
								<Text>{item.quantity}</Text>
							</View>
							<View style={[styles.onWidth,styles.alignCenter]}>
			{/*	region for on check box	*/}
							<CheckBox/>
							</View>
							
						</View>
					}
				/>
				<TouchableOpacity
								style={{
									alignItems: 'center',
									backgroundColor: '#1569C7',
									padding: 10
								}}
								onPress={
									() => this.props.navigation.navigate('Map')
								}
							>
								<Text style={[styles.labelText]}>
									View route on map
								</Text>
							</TouchableOpacity>
			</View>
		);
	}
}
export default OrderScreen1;

const styles = StyleSheet.create({
	labelText:{
		textAlign: 'center',
		color: '#FFFFFF',
		fontSize: 20
	},
	itemWidth:{
		width: '60%'
	},
	quantityWidth:{
		width: '25%'
	},
	onWidth:{
		width: '15%'
	},
	alignCenter:{
		alignItems: 'center'
	}
})