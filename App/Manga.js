import React from 'react';
import { Button, Modal, ScrollView, Image, StyleSheet, Text, TouchableOpacity, TextInput, View, ImageBackground } from 'react-native';
import { ServicesContext } from './ServicesContext'
import { addListener } from 'expo-updates';
import { FlatList } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import Select from 'react-select'
const JIKAN_API = 'https://api.jikan.moe/v3'

export default class MangaWindow extends React.Component {
    static contextType = ServicesContext;

    setSynopsis = (p, ndx) => {
     // alert("test")
     if (this.context.manga[this.props.k][ndx] == null) {  
      this.context.manga[this.props.k].push([])
      this.context.manga[this.props.k][ndx].title = p.title
      this.context.manga[this.props.k][ndx].image = p.image_url
      this.context.manga[this.props.k][ndx].synopsis = p.synopsis
      this.context.manga[this.props.k][ndx].startdate = new Date(p.start_date)
      this.context.manga[this.props.k][ndx].enddate = new Date(p.end_date)
      this.context.manga[this.props.k][ndx].enddate = this.context.manga[this.props.k][ndx].enddate.toDateString()
      this.context.manga[this.props.k][ndx].startdate = this.context.manga[this.props.k][ndx].startdate.toDateString()
     // this.context.manga[this.props.k][ndx].synopsis.splice(50)
     } else { 
      this.context.manga[this.props.k][ndx].title = p.title
      this.context.manga[this.props.k][ndx].image = p.image_url
      this.context.manga[this.props.k][ndx].startdate = new Date(p.start_date)
      this.context.manga[this.props.k][ndx].synopsis = p.synopsis
      this.context.manga[this.props.k][ndx].enddate = new Date(p.end_date)
      this.context.manga[this.props.k][ndx].enddate = this.context.manga[this.props.k][ndx].enddate.toDateString()
      this.context.manga[this.props.k][ndx].startdate = this.context.manga[this.props.k][ndx].startdate.toDateString()
      //this.context.manga[this.props.k][ndx].synopsis.splice(50)
     }
      //console.log(this.context.manga[this.props.k][ndx].image)
      this.setState({name: "test"})
    }

    setSearch = (p, ndx) => {
      if (this.context.manga[this.props.k][ndx] == null) { 
       this.context.manga[this.props.k].push([])
       this.context.manga[this.props.k][ndx].title = p.title
       this.context.manga[this.props.k][ndx].image = p.image_url
       this.context.manga[this.props.k][ndx].synopsis = p.synopsis
       //this.context.manga[this.props.k][ndx].synopsis.splice(50)
      } else { 
       this.context.manga[this.props.k][ndx].title = p.title
       this.context.manga[this.props.k][ndx].image = p.image_url
       this.context.manga[this.props.k][ndx].synopsis = p.synopsis
       //this.context.manga[this.props.k][ndx].synopsis.splice(50)
      }
       this.setState({name: "test"})
     }

    setName = (p) => {
       this.context.manga[this.props.k].name = p;
        this.setState({name: p})
    }
    setYear(itemValue) {
      this.setState({year: this.year[itemValue]})
      this.year[0] = (this.year[itemValue])
    }
    setSeason(itemValue) {
      this.setState({season: this.season[itemValue]})
      this.season[0] = (this.season[itemValue])
    }
    constructor(props) {
        super(props) 
        this.state = {
          name: "",
          image: "",
          season: 'all',
        year: '1970',
        }
        
        let key = this.props.k
      }
      state = {
        key: this.props.k, 
      }

  renderItem = ({item}) => {
    <View>
      <Text>{item.synopsis}</Text>
    </View>
  }
  searchmanga = async (name, set) => {
    console.log(this.state.year)
    fetch(JIKAN_API + "/search/manga?q=" + name)
    .then(function(resp) {return resp.json();})
    .then(function(data) {
      //alert(this.state.year)
      //console.log(data.results[0])

      /*if (this.context.manga.lenght != 0) {

        this.context.manga[this.props.k].clear();
        console.log(this.context.manga[this.props.k].lenght)
      }*/
      for (let x = 0;x != data.results.lenght;x++) {
        set(data.results[x], x)
      }
     // this.context.manga[this.props.k].splice(x)
    })
    .catch(function(data) {});
  }

  /*searchYear = async (nameyear, nameseason, set) => {
    fetch(JIKAN_API + "/season/" + nameyear + "/" + nameseason)
    .then(function(resp) {return resp.json();})
    .then(function(data) {
      //console.log(data.mangae.lenght)
      let x = 0
      for (;data.mangae[x] != null;x++)
        set(data.mangae[x], x)
      this.context.manga[this.props.k].splice(x)
      console.log(x)
     // this.context.manga[this.props.k].lenght = x
        //console.log(x)
    })
    .catch(function(data) {});
  }

  year = ["2020", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"]
  season =["spring", "spring","summer","fall", "winter"];*/
  render() {
    return (
  <View style = {styles.viewHolder}>
    <Text style = {styles.title}>manga List</Text>
  <FlatList
    data={this.context.manga[this.props.k]}
    renderItem={({item}) => 
    <View style = {styles.list}>
      <Text style = {styles.title}>{item.title}</Text>
      <Image source = {{uri: item.image}} style = {styles.image}/>
      <Text style = {{position: 'absolute', top: 120}}>{item.synopsis}</Text>
    </View>
  }
  />
  <TextInput key = {this.props.k}
      style={styles.pokeinput}
      value={this.context.manga[this.props.k].name}
      onChangeText={text => this.setName(text)}
  />
  <TouchableOpacity
    style = {styles.search}
    onPress={() => this.searchmanga(this.context.manga[this.props.k].name, this.setSynopsis)}>
    <Text style = {styles.text}>Search</Text>
  </TouchableOpacity>
  </View>
    )
    }
}
/*<FlatList
    data={this.context.manga[this.props.k]}
    renderItem={({item}) => <Text>{item.title}</Text>}
    />*/
//<Image source = {{uri: this.context.manga[this.props.k].image}}  style = {styles.image} resizeMode = "contain"/>
const styles = StyleSheet.create({
  year: {
    width: 70,
    position: 'absolute',
    left: 200,
    top: 40,
  },
  season: {
    width: 70,
    position: 'absolute',
    left: 300,
    top: 40,
  },
    list: {
      top: 100,
      left: 0,
        height: 300,
        width: 500,
       // backgroundColor: 'white',
        //opacity: 0.7,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginTop: 150,
        zIndex: 2,
    },
    search: {
      position: 'absolute',
      top: 35,
      left: 120,
    },
    search2: {
      position: 'absolute',
      top: 35,
      left: 400,
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
    date: {
      position: 'absolute',
      top: 30,
    },
    container: {
      flex: 1,
      marginTop: 10,
    },
    image: {
      position: 'absolute',
      top: 10,
      left: 50,
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
        height: 500,
        width: 500,
        backgroundColor: 'rgba(0,0,50,0.7)',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        margin: 10,
        zIndex: 1,
    },
    
})