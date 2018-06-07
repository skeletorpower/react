import React from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet, Dimensions } from 'react-native';

const grid = (props) => {

        return (
            <View style={styles.grid}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]}>
                        {props.drawIcon(0, 0)}
                    </View>
                    <View style={[styles.tile, { borderTopWidth: 0 }]}>
                        {props.drawIcon(0, 1)}
                    </View>
                    <View style={[styles.tile, { borderRightWidth: 0, borderTopWidth: 0 }]}>
                        {props.drawIcon(0, 2)}
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.tile, { borderLeftWidth: 0 }]}>
                        {props.drawIcon(1, 0)}
                    </View>
                    <View style={styles.tile}>
                        {props.drawIcon(1, 1)}
                    </View>
                    <View style={[styles.tile, { borderRightWidth: 0 }]}>
                        {props.drawIcon(1, 2)}
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.tile, { borderLeftWidth: 0, borderBottomWidth: 0 }]}>
                        {props.drawIcon(2, 0)}
                    </View>
                    <View style={[styles.tile, { borderBottomWidth: 0 }]}>
                        {props.drawIcon(2, 1)}
                    </View>
                    <View style={[styles.tile, { borderRightWidth: 0, borderBottomWidth: 0 }]}>
                        {props.drawIcon(2, 2)}
                    </View>
                </View>
            </View>
        )
    }

const styles = StyleSheet.create({
    grid: {
        top: Dimensions.get('window').height * 0.1
    },
    tile: {
        borderWidth: 1,
        width: 100,
        height: 100
    },
})

export default grid;