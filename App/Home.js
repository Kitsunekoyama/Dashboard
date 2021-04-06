import React from 'react';
import { Button, Modal, ScrollView, Image, StyleSheet, Text, TouchableOpacity, TextInput, View, ImageBackground } from 'react-native';
import backg from './assets/logo.png';
import { ServicesContext } from './ServicesContext'
import { FlatList } from 'react-native-gesture-handler';
import Pokedex from './Pokedex.js'
import Weather from './Weather.js'
import Anim from './Anim.js'
import Manga from './Manga.js'

class HomeScreen extends React.Component {
  static contextType = ServicesContext;

  setExit = (tab, key) => {
    for (let i = 0; i != tab.length;i++)
      tab[i].splice(key, 1);
    this.setState({poketype: this.state.poketype});
  }
  constructor(props) {
    super(props);
    this.state = {
      poketype: [],
    }
  }
    render() {
      
      let newValue = this.context.data.map((item, key) => 
      { 
        return (
          <View>
          <Weather k={key}/>
          <TouchableOpacity
          style = {styles.exit}
          onPress={() => this.setExit([this.context.data], key)}>
          <Text style = {styles.text}>x</Text>
          </TouchableOpacity>
        </View>
        )
      })
      let newAnim = this.context.anim.map((item, key) =>
      {
        return (
          <View>
            <Anim k={key}/>
            <TouchableOpacity
            style = {styles.exit}
            onPress={() => this.setExit([this.context.anim], key)}>
            <Text style = {styles.text}>x</Text>
            </TouchableOpacity>
          </View>
        )
      })
      let newManga = this.context.manga.map((item, key) =>
      {
        return (
          <View>
            <Manga k={key}/>
            <TouchableOpacity
            style = {styles.exit}
            onPress={() => this.setExit([this.context.manga], key)}>
            <Text style = {styles.text}>x</Text>
            </TouchableOpacity>
          </View>
        )
      })
      let newPokedex = this.context.poke.map((item, key) =>
      {
        return (
          <View>
          <Pokedex k={key}/>
          <TouchableOpacity
          style = {styles.exit}
          onPress={() => this.setExit([this.context.poke], key)}>
          <Text style = {styles.text}>x</Text>
          </TouchableOpacity>
        </View>
        )
      })
      
    return (
      <ImageBackground source={backg} style={styles.background} >
      <ScrollView>
        <View style = {{ flex: 1, padding: 30 }}>
          {
            newValue
          },
          {
            newPokedex
          },
          {
            newAnim
          },
          {
            newManga
          }
        </View>
      </ScrollView>
    </ImageBackground>
        )    
    }
    
  }
  //overflow: scroll
const styles = StyleSheet.create({
        search: {
          position: 'absolute',
          top: 35,
          left: 120,
        },
        exit: {
          position: 'absolute',
          top: 0,
          right: 10,
          width: 10,
          height: 10,
        },
        descr: {
          position: 'absolute',
          color: 'white',
          fontSize: 20,
          top: 70,
          left: 10,
          //height: 10,
        },
        title: {
          position: 'absolute',
          top: 10,
          left: 15,
            color: 'white',
            fontSize: 20,
            
        },
        container: {
          flex: 1,
          marginTop: 10,
        },
        image: {
          width: 100,
          height: 100,
          marginLeft: 300,
         // marginBottom: 100,
        },
        background: {
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        },
        text:
        {
            color: 'white',
            fontSize: 20,
        },
        input: {
          borderRadius: 30,
          marginBottom: 150,
          color: '#fff',
          fontSize: 20,
          height: 30,
          width: 150,
          marginLeft: -120,
          borderColor: '#fff',
          borderWidth: 1,
          paddingLeft: 5,
          alignItems: 'baseline',
          justifyContent: 'center',
      },
      pokeinput: {
        position: 'absolute',
        top: 35,
        left: 10,
        bottom: 0,
        borderRadius: 30,
          color: '#fff',
          fontSize: 20,
          height: 30,
          width: 100,
          borderColor: '#fff',
          borderWidth: 1,
          paddingLeft: 5,
          marginTop: 0,
          //alignItems: 'baseline',
          //justifyContent: 'center',

      },
      viewHolder:
        {
          borderRadius: 10,
            height: 200,
            width: 400,
            backgroundColor: 'rgba(0,0,50,0.7)',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            margin: 10
        },
        
})
//space-around
export default HomeScreen;
