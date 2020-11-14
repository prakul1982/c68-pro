import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookTransctionScreen from './screens/BookTransctionScreen'
import SearchScreen from './screens/SearchScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
return (<AppContainer></AppContainer>)
}
}
 
const TabNavigator = createBottomTabNavigator({
  Instagram:{ screen: BookTransctionScreen},
  Facebook:{screen: SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator)