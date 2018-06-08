import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Dimensions } from 'react-native';

class HomeScreen extends React.Component {

    static navigationOptions = {
        headerMode: 'none',
        header: null
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.grid}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]}>
                            <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold', alignSelf: 'center', top: 20 }}>Tic</Text>
                        </View>
                        <View style={[styles.tile, { borderTopWidth: 0 }]}></View>
                        <View style={[styles.tile, { borderRightWidth: 0, borderTopWidth: 0 }]}></View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.tile, { borderLeftWidth: 0 }]}></View>
                        <View style={styles.tile}>
                            <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold', alignSelf: 'center', top: 20 }}>Tac</Text>
                        </View>
                        <View style={[styles.tile, { borderRightWidth: 0 }]}></View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.tile, { borderLeftWidth: 0, borderBottomWidth: 0 }]}></View>
                        <View style={[styles.tile, { borderBottomWidth: 0 }]}></View>
                        <View style={[styles.tile, { borderRightWidth: 0, borderBottomWidth: 0 }]}>
                            <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold', alignSelf: 'center', top: 20 }}>Toe</Text>
                        </View>
                    </View>
                </View>

                <TouchableNativeFeedback
                    style={styles.container}
                    onPress={() => navigate('Game')}>
                    <View style={styles.button}>
                        <Text style={styles.btnText}>Start</Text>
                    </View>

                </TouchableNativeFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'orange',
        height: 100,
        width: 150,
        borderRadius: 50,
        alignSelf: 'center',
        top: Dimensions.get('window').height * 0.1
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flex: 1
    },
    btnText: {
        color: 'black',
        fontSize: 30,
        padding: 30,
        alignSelf: 'center'
    },
    
    tile: {
        borderWidth: 1,
        width: 100,
        height: 100
    },
    grid: {
        top: Dimensions.get('window').height * -0.05
    }

})

export default HomeScreen;