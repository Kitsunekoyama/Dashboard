import React from 'react';
import { Button, Modal, ScrollView, Image, StyleSheet, Text, TouchableOpacity, TextInput, View, ImageBackground } from 'react-native';
import { ServicesContext } from './ServicesContext'

/*function drawWeather(d) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
  var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
}*/

export default class WeatherWindow extends React.Component {
    static contextType = ServicesContext;

    /*setDegree = (d) => {
      //const tmpDegree = this.state.degree;
    }*/
    setWeather = (c, d) => {
      this.context.data[this.props.k].main = c
      this.context.data[this.props.k].degree = d
      this.setState({main: c, degree: d});
    }
    setCity = (c) => {
      this.context.data[this.props.k].name = c;
      this.setState({city: c});
    }
    constructor(props) {
        super(props) 
        this.state = {
          main: "",
          degree: ""
        }   
        let key = this.props.k
      }
      state = {
        key: this.props.k,
      }
      searchWeather = async (cityID, set) => {
        var key = 'd775c8243c3c16eebc7702c8c26d3527';
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID + '&appid=' + key)
        .then(function(resp) {return resp.json();})
        .then(function(data) {
          set(data.weather[0].main, Math.round(parseFloat(data.main.temp)-273.15) + "°C")
          //this.context.data[this.props.k].main = data.weather[0].main
          //this.setState({city: c});
          //set(data.weather[0].main, ndx)
        })
        .catch(function(data) {
        });
      }
  render() {
   // alert(this.props.k)
    return (
    <View style = {styles.viewHolder}>
    <Text style = {styles.title}>Weather</Text>
  <TextInput key = {this.props.k}
      style={styles.pokeinput}
      value={this.context.data[this.props.k].name}
      onChangeText={text => this.setCity(text)}
  />
  <TouchableOpacity
    style = {styles.search}
    onPress={() => this.searchWeather(this.context.data[this.props.k].name, this.setWeather)}>
    <Text style = {styles.text}>Search</Text>
  </TouchableOpacity>
  <Text style = {styles.temp}>{this.context.data[this.props.k].main}</Text>
  <Text style = {styles.degree}>{this.context.data[this.props.k].degree}</Text>
  </View>
    )
    }
}

const styles = StyleSheet.create({
    temp: {
      position: 'absolute',
      left: 100,
      top: 100,
      color: 'white',
      fontSize: 25,
    },
    degree: {
      position: 'absolute',
      left: 400,
      top: 100,
      color: 'white',
      fontSize: 35,
    },
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
        width: 500,
        backgroundColor: 'rgba(0,0,50,0.7)',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        margin: 10
    },
    
})