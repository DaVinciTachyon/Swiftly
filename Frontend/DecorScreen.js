import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, Button, ImageBackground, Dimensions} from 'react-native';
import { SearchBar, CheckBox, Icon } from 'react-native-elements';



export default class FoodScreen extends React.Component {

    state = {
        products: [
            { name: "Banners", imageSrc: "https://image.dhgate.com/0x0/f2/albu/g6/M01/5F/ED/rBVaR1rELmmAFrviAAEdx_qBtaA195.jpg" },
            { name: "Balloons", imageSrc: "https://previews.123rf.com/images/belchonock/belchonock1111/belchonock111100733/11169640-bright-balloons-isolated-on-white.jpg" },
            { name: "Party Hats", imageSrc: "https://www.bigw.com.au/medias/sys_master/images/images/h6e/hc9/11714452226078.jpg" },
            { name: "LED lights", imageSrc: "https://images.lowes.ca/img/p400/19934/37485-bl.jpg" },
            { name: "Bunting", imageSrc: "https://cdn.shopify.com/s/files/1/0161/3068/products/fabric_bunting1_2048x.jpg?v=1464427977" },
            { name: "Streamers", imageSrc: "https://cdn.shopify.com/s/files/1/1181/0786/products/Mumbo_Streamer_Set.jpg?v=1539132024"}

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