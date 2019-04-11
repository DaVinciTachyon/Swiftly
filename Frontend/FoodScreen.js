import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, Button, ImageBackground, Dimensions } from 'react-native';
import { SearchBar, CheckBox, Icon } from 'react-native-elements';

{/* screen made in a similiar manner to the product screen but uses a flatlist to show the food products provided */}
export default class FoodScreen extends React.Component {

    state = {
        products: [
            { name: "Cocktail Sausages", imageSrc: "https://img.tesco.com/Groceries/pi/068/5054775425068/IDShot_540x540.jpg"},
            { name: "Chicken Nuggets", imageSrc: "https://assets3.thrillist.com/v1/image/2806787/size/tmg-article_default_mobile.jpg"},
            { name: "Chips", imageSrc: "https://goldenbowl.gofoodpng.biz/wp-content/uploads/2017/01/Chips1.jpg"},
            { name: "Chocolate Cake", imageSrc: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/easy_chocolate_cake_31070_16x9.jpg" },
            { name: "Curry", imageSrc: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/simple_chicken_curry_95336_16x9.jpg"},
            { name: "Cheese Board", imageSrc: "https://barefeetinthekitchen.com/wp-content/uploads/2018/09/Cheese-Board-5-1-of-1.jpg" },
            { name: "Doritos, 1 Bag", imageSrc: "https://www.coopathome.ch/img/produkte/880_880/RGB/6152527_001.jpg?_=1528446863327"}
            
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
                        <Text style={{ fontSize: 50, textAlign: 'center', justifyContent: 'center' }}>
                            Swiftly</Text>
                        <Image
                            style={{ width: 50, height: 50, flexDirection: 'row', right: 400, left: 75, marginTop: -50 }}
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
                        <Button style={{ height: 30, width: 70 }}

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
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
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
        marginTop: -60,
    },

    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 10,
        height: 50,
    },

    FlatListContainer: {
        backgroundColor: 'white',
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


    }

});
