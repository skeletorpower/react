import React from 'react';
import {Modal} from 'react-native';


const modal = (props) => {
    return(
        <Modal onRequestClose={() => props.onRequestClose}>
            <View style={{flex: 0.6, backgroundColor: 'orange'}}>
                {props.children}
            </View>
        </Modal>
    )
}

export default modal;