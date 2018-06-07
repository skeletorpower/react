import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableNativeFeedback} from 'react-native';

import Grid from '../../components/Grid/Grid';
import Icon from 'react-native-vector-icons/Ionicons';

class GameScreen extends React.Component {

    state={
        gameState: [
            [0,0,0],
            [0,0,0],
            [0,0,0]
          ],
        currentPlayer: 1,
      }
    
      initGame = () => {
        this.setState({
          gameState: [
            [0,0,0],
            [0,0,0],
            [0,0,0]
          ]
        })
      }
    
      componentDidMount(){
        this.initGame();
      }

      onTilePress = (row, col) => {
        let currentPlayer = this.state.currentPlayer;
        let arr = this.state.gameState.slice();
        arr[row][col] = currentPlayer;
        this.setState({
            gameState: arr
        });

        let nextPlayer = (currentPlayer == 1) ? 2 : 1;
        this.setState({
            currentPlayer: nextPlayer
        });
      }


      drawIcon = (row, col) => {
        let value = this.state.gameState[row][col];
        switch(value){
            case 1: return <Icon name='md-close' style={styles.tileX} />;
            case 2: return <Icon name='
            md-radio-button-off
            ' style={styles.tileO} />;
            default: return <View />;
        }
            
      }

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
                    <TouchableNativeFeedback onPress={() => this.onTilePress(0, 0)}>
                    <View style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]}>
                    {this.drawIcon(0,0)}
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.onTilePress(0, 1)}>
                    <View style={[styles.tile, { borderTopWidth: 0 }]}>
                    {this.drawIcon(0,1)}
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.onTilePress(0, 2)}>
                    <View style={[styles.tile, { borderRightWidth: 0, borderTopWidth: 0 }]}>
                    {this.drawIcon(0,2)}
                    </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableNativeFeedback onPress={() => this.onTilePress(1, 0)}>
                    <View style={[styles.tile, { borderLeftWidth: 0 }]}>
                    {this.drawIcon(1,0)}
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.onTilePress(1, 1)}>
                    <View style={styles.tile}>
                    {this.drawIcon(1,1)}
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.onTilePress(1, 2)}>
                    <View style={[styles.tile, { borderRightWidth: 0 }]}>
                    {this.drawIcon(1,2)}
                    </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableNativeFeedback onPress={() => this.onTilePress(2, 0)}>
                    <View style={[styles.tile, { borderLeftWidth: 0, borderBottomWidth: 0 }]}>
                    {this.drawIcon(2,0)}
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.onTilePress(2, 1)}>
                    <View style={[styles.tile, { borderBottomWidth: 0 }]}>
                    {this.drawIcon(2,1)}
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.onTilePress(2, 2)}>
                    <View style={[styles.tile, { borderRightWidth: 0, borderBottomWidth: 0 }]}>
                    {this.drawIcon(2,2)}
                    </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    tile: {
        borderWidth: 1,
        width: 100,
        height: 100
    },
    
    tileX:{
        color: 'red',
        fontSize: 60,
        alignSelf: 'center',
        top: 20
    },
    
    tileO:{
        color: 'green',
        fontSize: 60,
        alignSelf: 'center',
        top: 20
    },
    grid: {
        top: Dimensions.get('window').height * 0.1
    }

})

export default GameScreen;