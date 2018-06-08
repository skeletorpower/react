import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableNativeFeedback, Alert, Button } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class GameScreen extends React.Component {

    state = {
        gameState: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ],
        currentPlayer: 1,
        counterX: 0,
        counterO: 0
    }

    initGame = () => {
        this.setState({
            gameState: [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            currentPlayer: 1
        })
    }

    componentDidMount() {
        this.initGame();
    }

    whoWon = () => {
        const numOfTiles = 3;
        let arr = this.state.gameState;
        let sum;
        let xWon = this.state.counterX;

        //rows
        for (let i = 0; i < numOfTiles; i++) {
            sum = arr[i][0] + arr[i][1] + arr[i][2];
            if (sum == 3) {
                xWon += xWon;
                return 1;
            } else if (sum == -3) {
                return -1;
            }
        }

        //cols
        for (let i = 0; i < numOfTiles; i++) {
            sum = arr[0][i] + arr[1][i] + arr[2][i];
            if (sum == 3) {
                return 1;
            } else if (sum == -3) {
                return -1;
            }
        }

        //diagonals
        sum = arr[0][0] + arr[1][1] + arr[2][2];
        if (sum == 3) {
            return 1;
        } else if (sum == -3) {
            return -1;
        }

        sum = arr[2][0] + arr[1][1] + arr[0][2];
        if (sum == 3) {
            return 1;
        } else if (sum == -3) {
            return -1;
        }

        return 0;
    }

    onTilePress = (row, col) => {

        let value = this.state.gameState[row][col];
        if (value != 0) {
            return;
        }

        let currentPlayer = this.state.currentPlayer;
        let arr = this.state.gameState.slice();
        arr[row][col] = currentPlayer;
        this.setState({
            gameState: arr
        });

        let nextPlayer = (currentPlayer == 1) ? -1 : 1;
        this.setState({
            currentPlayer: nextPlayer
        });

        let winner = this.whoWon();
        if(winner == 1){
            Alert.alert('Player 1 has won!');
            this.setState({counterX: this.state.counterX + 1});
            this.initGame();
        }else if(winner == -1){
            Alert.alert('Player 2 has won!');
            this.setState({counterO: this.state.counterO + 1});
            this.initGame();
        }
    }

    onNewGamePress = () => {
        this.initGame();
    }

    drawIcon = (row, col) => {
        let value = this.state.gameState[row][col];
        switch (value) {
            case 1: return <Icon name='md-close' style={styles.tileX} />;
            case -1: return <Icon name='md-radio-button-off' style={styles.tileO} />;
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
                                {this.drawIcon(0, 0)}
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => this.onTilePress(0, 1)}>
                            <View style={[styles.tile, { borderTopWidth: 0 }]}>
                                {this.drawIcon(0, 1)}
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => this.onTilePress(0, 2)}>
                            <View style={[styles.tile, { borderRightWidth: 0, borderTopWidth: 0 }]}>
                                {this.drawIcon(0, 2)}
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableNativeFeedback onPress={() => this.onTilePress(1, 0)}>
                            <View style={[styles.tile, { borderLeftWidth: 0 }]}>
                                {this.drawIcon(1, 0)}
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => this.onTilePress(1, 1)}>
                            <View style={styles.tile}>
                                {this.drawIcon(1, 1)}
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => this.onTilePress(1, 2)}>
                            <View style={[styles.tile, { borderRightWidth: 0 }]}>
                                {this.drawIcon(1, 2)}
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableNativeFeedback onPress={() => this.onTilePress(2, 0)}>
                            <View style={[styles.tile, { borderLeftWidth: 0, borderBottomWidth: 0 }]}>
                                {this.drawIcon(2, 0)}
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => this.onTilePress(2, 1)}>
                            <View style={[styles.tile, { borderBottomWidth: 0 }]}>
                                {this.drawIcon(2, 1)}
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => this.onTilePress(2, 2)}>
                            <View style={[styles.tile, { borderRightWidth: 0, borderBottomWidth: 0 }]}>
                                {this.drawIcon(2, 2)}
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.tileX, {fontSize: 30, marginRight: 10}]}>X won: {this.state.counterX}</Text>
                    <Text style={[styles.tileO, {fontSize: 30, marginLeft: 10}]}>Y won: {this.state.counterO}</Text>
                </View>
                <View style={styles.newGameBtn}>
                <Button color='orange' title='New Game' onPress={this.onNewGamePress} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flex: 1
    },
    tile: {
        borderWidth: 1,
        width: 100,
        height: 100
    },

    tileX: {
        color: 'red',
        fontSize: 60,
        alignSelf: 'center',
        top: 20
    },

    tileO: {
        color: 'green',
        fontSize: 60,
        alignSelf: 'center',
        top: 20
    },
    grid: {
        top: Dimensions.get('window').height * -0.1
    },
    newGameBtn:{
        top: 50
    }

})

export default GameScreen;