import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, Button, ImageBackground, Dimensions } from 'react-native';
import { SearchBar, CheckBox, Icon } from 'react-native-elements';

export default class UtensilsScreen extends React.Component {

    state = {
        products: [
            { name: "Cups", imageSrc: "https://www.dollargeneral.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/s/k/sku_15425403_-product_1.jpg" },
            { name: "Ice", imageSrc: "https://bitcoinist.com/wp-content/uploads/2018/08/shutterstock_764225425.jpg"},
            { name: "Cutlery", imageSrc: "http://d13z1xw8270sfc.cloudfront.net/origin/553214/1529145027182_plasticcutlery.jpg" },
            { name: "Plates", imageSrc: "https://www.lecreuset.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/r/s/rs7732_pg9100s4-2967-lpr-lecreuset.1516379760.jpg" },    
            { name: "Ice Bucket", imageSrc: "https://5.imimg.com/data5/CI/BC/MY-6522548/ice-bucket-500x500.png" },
            { name: "Candles", imageSrc: "https://d3fyxwbpeiello.cloudfront.net/wp-content/uploads/home-fire-safety-tips-candles.jpg?x98869" },
            { name: "Napkins", imageSrc: "https://www.ikea.com/PIAimages/25795_PE099076_S5.JPG"},
        ]

    };



    render() {
        const { search } = this.state;
        return (

                <SafeAreaView>

                <ImageBackground
                    style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width }}
                    source={{ uri: "https://previews.123rf.com/images/syntheticmessiah/syntheticmessiah1707/syntheticmessiah170700012/81891385-stone-texture-background-of-brick-wall-texture-surface-with-stone-light-yellow-bricks.jpg" }}
                >

                    <View style={styles.container}>
                    <Text style={{ fontSize: 40, textAlign: 'center', justifyContent: 'center' }}>
                    Swiftly</Text>
                     <Image
                    style={{ width: 50, height: 50, flexDirection: 'row', right: 150, left: 100, marginTop: -50 }}
                    source={{ uri: "https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/rocket-ship-2969-14241-300x300.png" }}
                      >
                     </Image>
                    </View>

                <View style={styles.iconContainer}>
                  
                   <Icon 
                     reverse
                     name='male'
                     type='font-awesome'
                     color='#1569C7'
                     onPress={() => this.props.navigation.navigate('loginScreen')} />

                    <Icon
                        reverse
                        name='shopping-cart'
                        type='font-awesome'
                         color='#1569C7'
                         onPress={() => this.props.navigation.navigate('cartScreen')} />      
                
                </View>


                <View style={styles.container}>
                    
                    <SearchBar

                        style={styles.searchBarContainer}
                        placeholder="Search.."
                        onChangeText={this.updateSearch}
                        value={search}
                    >
                     </SearchBar>
                    
                </View>


                <View style={styles.buttonContainer}>
                    
                    <Button
                           onPress={() => {
                                this.props.navigation.navigate('ProductScreen')
                            }}
                            title="Drinks"
                            color="#1569C7"
                        >
                        </Button>
                    <Button
                            onPress={() => {
                                this.props.navigation.navigate('FoodScreen')
                            }}
                            title="Food"
                            color="#1569C7"
                        >
                        </Button>
                      <Button
                            
                            onPress={() => {
                                this.props.navigation.navigate('GamesScreen')
                            }}
                            title="Games"
                            color="#1569C7"
                        >
                        </Button>
                        <Button
                          
                            onPress={() => {
                                this.props.navigation.navigate('UtensilsScreen')
                            }}
                            title="Utensils"
                            color="#1569C7"
                        >
                        </Button>
                       <Button
                            
                            onPress={() => {
                                this.props.navigation.navigate('DecorScreen')
                            }}
                            title="Decor"
                            color="#1569C7"
                        >
                    </Button>
                    <Button style= {{height: 30, width: 70}}
                       
                        onPress={() => {
                            this.props.navigation.navigate('extrasScreen')
                        }}
                        title="Extras"
                        color="#1569C7"
                    >
                     </Button>
                </View>

                 <View style={styles.FlatListContainer}>
                    
                    <FlatList
                    ItemSeparatorComponent={() =>
                        <View
                            style={{ height: 1, width: "100%", backgroundColor: "lightgray" }}
                        />
                    }
                    data={this.state.products}
                    keyExtractor={item => item.name}
                        renderItem={({ item }) =>
                            <View style={{ flexDirection: "row", alignItems: "center"}}>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={{ uri: item.imageSrc }}
                            />
                             <Text style={{ padding: 10 }}>{item.name}</Text>
                            <View style={styles.checkboxContainer}>
                              <CheckBox
                                right
                                 checkedIcon='checkCircle'
                                 uncheckedIcon='plus'
                                checked={this.state.checked}
                             />
                            </View>
                            
                        </View>
                    }
                    />
                
                   </View>
                 </ImageBackground>
            </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {

    },

    headerContainer: {
        backgroundColor: 'white'
    },

    iconContainer: {
        flexDirection: 'row',
        left: 290,
        right: 20,
        marginTop: -45,
    },

    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 10,
        height: 50,
    },

    FlatListContainer: {
        marginTop: '30%',
    },

    buttonContainer: {
        flex: -1,
        flexDirection: 'row',
        height: 30,
        width: 170,
        
    },

    searchBarContainer: {
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
    },

    buttonStyle: {
        color: '#1569C7'
    },

    checkboxContainer: {
        marginLeft: 10
        
       
    },
    FlatListContainer: {
        backgroundColor: 'white',
    },

});