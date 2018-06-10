import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import GameScreen from './src/screens/GameScreen/GameScreen';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';


const NavigationApp = StackNavigator({
  Home: { screen: HomeScreen },
  Game: { screen: GameScreen }
})



export default class App extends React.Component {

  state = {
    component: <SplashScreen />
  }

  componentDidMount(){
    this.timeoutHandle = setTimeout(()=>{
      // Add your logic for the transition
      this.setState({ component: <NavigationApp /> })
 }, 2500);
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutHandle);
  }

  render() {
    return (
      this.state.component
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
