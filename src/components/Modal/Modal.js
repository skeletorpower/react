import React from 'react';
import {Modal, View, Text } from 'react-native';


const modal = (props) => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.visible}
            onRequestClose={() => props.onRequestClose}>
            <View style={{ marginTop: 22, flex: 1, backgroundColor: 'white' }}>
                <View>
                    <Text>Hello World!</Text>
                </View>
            </View>
        </Modal>
    );
}

export default modal;