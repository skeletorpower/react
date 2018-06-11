import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

const splash = () => {
    return (
        <Animatable.View
            animation={fadeOut}
            iterationDelay={1500}
            style={styles.container}
        >
            <Text style={styles.text}>Loading...</Text>
        </Animatable.View>

    )
}

const fadeOut = {
    from: {
        opacity: 1,
    },
    to: {
        opacity: 0,
    },
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold'
    }
})


export default splash;