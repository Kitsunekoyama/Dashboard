import React from 'react'
import Login from './Login'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer } from "@react-navigation/native";
import LoginScreen from './Login';
import HomeScreen from './Home';
import AddScreen from './Add'
import { ServicesContext } from './ServicesContext'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const LoginStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

/*{Login.signedIn ? (
  <LoginStack.Screen name="Home" component={HomeScreen}/>) : (
  <LoginStack.Screen name="Login" options={{header: () => null}} component={LoginScreen}/> 
  )
    }*/


class HomeDrawer extends React.Component {

  addData = (old, newdata) => {
    this.setState({data: [ ...old, newdata]});
  }
  addPoke = (old, newpoke) => {
    this.setState({poke: [ ...old, newpoke]});
  }
  addAnim = (old, newAnim) => {
    this.setState({anim: [ ...old, newAnim]});
  }
  addManga = (old, newManga) => {
    this.setState({manga: [ ...old, newManga]});
  }
  /*setCity = (c) => {
    this.setState({city: c});
  }*/
  state = {
    data: [],
    test: 'test',
    //city: 'City Name',
    poke: [],
    anim: [[]],
    manga: [[]],
    pindex: 0,
    pokename: [],
    pokeimage: [],      
    pokedescr: [],
    //setCity: this.setCity,
    addData: this.addData,
    addPoke: this.addPoke,
    addAnim: this.addAnim,
    addManga: this.addManga,
  }
  render() {
    return (
      <ServicesContext.Provider value={this.state}>
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Add" component={AddScreen} />
        </Tab.Navigator>
      </ServicesContext.Provider>
      
    );
  }
};
 function Stack() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator>
      <LoginStack.Screen name="Login" options={{header: () => null}} component={LoginScreen}/>
      <LoginStack.Screen name="Home" options={{header: () => null}} component={HomeDrawer}/>
      <LoginStack.Screen name="Test" component={HomeScreen}/>
      </LoginStack.Navigator>
    </NavigationContainer>
      )
}
export default function App() {//extends React.Component {
    return (
      <Stack />
    );
}
