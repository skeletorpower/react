import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import GameScreen from './src/screens/GameScreen/GameScreen';


const NavigationApp = StackNavigator({
  Home: { screen: HomeScreen },
  Game: { screen: GameScreen }
})



export default class App extends React.Component {
  render() {
    return (
      <NavigationApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
