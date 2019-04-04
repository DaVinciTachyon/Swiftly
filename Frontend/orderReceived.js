import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

export default class orderReceived extends React.Component {
    render() {
        return (

            <View style={styles.container}>

                <ImageBackground
                    style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width }}
                    source={{ uri: "https://previews.123rf.com/images/syntheticmessiah/syntheticmessiah1707/syntheticmessiah170700012/81891385-stone-texture-background-of-brick-wall-texture-surface-with-stone-light-yellow-bricks.jpg" }}
                >

                <Image
                    style={{ width: 90, height: 90, right: 150, left: 150, marginTop: 50 }}
                    source={{ uri: "https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/rocket-ship-2969-14241-300x300.png" }}
                >
                </Image>

                <Text style={{ fontSize: 75, textAlign: 'center', justifyContent: 'center' }}>
                    Swiftly</Text>

                <Text style={{ fontSize: 50, textAlign: 'center', justifyContent: 'center' }}>
                    Order Received! </Text>

                <Button
                    type = 'clear'
                    title="Loading button"
                    loading
                    />
                    <Button
                        title="Go back to home screen"
                        OnPress onPress={() => {
                            this.props.navigation.navigate('ProductScreen')

                        }}
                    />
                </ImageBackground>
            </View>



            );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});