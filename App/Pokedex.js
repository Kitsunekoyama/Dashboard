import React from 'react';
import { Button, Modal, ScrollView, Image, StyleSheet, Text, TouchableOpacity, TextInput, View, ImageBackground } from 'react-native';
import { ServicesContext } from './ServicesContext'
import pokemon from 'pokemon'
import axios from 'axios'

const POKE_API_BASE_URL = 'https://pokeapi.co/api/v2';

export default class PokeWindow extends React.Component {
    static contextType = ServicesContext;

    setPokename = (p) => {
       this.context.poke[this.props.k].name = p;
        this.setState({pokename: p})
      }
      setPokeid = (p) => {
        this.context.poke[this.props.k].id = p;
         this.setState({pokename: p})
       }
    constructor(props) {
        super(props) 
        this.state = {
          pokename: "",
          pokeimage: "",
          poketype: [],
          pokedescr: "",
        }
        
        let key = this.props.k
      }
      state = {
        key: this.props.k,
      }

      getTypes = (types) =>
        types.map(({ slot, type }) => ({
        id: slot,
        name: type.name,
  }));
  getDescription = (entries) =>
    entries.find((item) => item.language.name === 'fr').flavor_text;
searchPokemon = async (name, key) => {
    try {
      const pID = pokemon.getId(name)
      const {data: pdata} = await axios.get(POKE_API_BASE_URL + "/pokemon/" + pID)
      const {data: ddata} = await axios.get(POKE_API_BASE_URL + "/pokemon-species/" + pID)
      this.context.poke[this.props.k].image = pdata.sprites.front_default;
      this.context.poke[this.props.k].id = pID;
      this.setState({pokeimage: this.state.pokeimage})
      //this.state.poketype = this.getTypes(pdata.types)
      this.context.poke[this.props.k].descr = this.getDescription(ddata.flavor_text_entries)
      this.setState({pokedescr: this.state.pokedescr})
    } catch (e) {
      //alert(e)
    };
  }
  searchid = async (id, key) => {
    try {
      const {data: pdata} = await axios.get(POKE_API_BASE_URL + "/pokemon/" + id)
      const {data: ddata} = await axios.get(POKE_API_BASE_URL + "/pokemon-species/" + id)
      this.context.poke[this.props.k].image = pdata.sprites.front_default;
      this.context.poke[this.props.k].name = pdata.name
      this.setState({pokeimage: this.state.pokeimage})
      //this.state.poketype = this.getTypes(pdata.types)
      this.context.poke[this.props.k].descr = this.getDescription(ddata.flavor_text_entries)
      this.setState({pokedescr: this.state.pokedescr})
    } catch (e) {
      //alert(e)
    };
  }

  render() {
    return (
    <View style = {styles.viewHolder}>
    <Text style = {styles.title}>Pokedex</Text>
  <TextInput key = {this.props.k}
      style={styles.pokeinput}
      value={this.context.poke[this.props.k].name}
      onChangeText={text => this.setPokename(text)}
  />
  <TouchableOpacity
    style = {styles.search}
    onPress={() => this.searchPokemon(this.context.poke[this.props.k].name, this.props.k)}>
    <Text style = {styles.text}>Search</Text>
  </TouchableOpacity>
  <TextInput key = {this.props.k}
      style={styles.idinput}
      value={this.context.poke[this.props.k].id}
      onChangeText={text => this.setPokeid(text)}
  />
  <TouchableOpacity
    style = {styles.searchid}
    onPress={() => this.searchid(this.context.poke[this.props.k].id, this.props.k)}>
    <Text style = {styles.text}>Search</Text>
  </TouchableOpacity>
  <Image source = {{uri: this.context.poke[this.props.k].image}}  style = {styles.image} resizeMode = "contain"/>
  <Text style = {styles.descr}>{this.context.poke[this.props.k].descr}</Text>
  </View>
    )
    }
}

const styles = StyleSheet.create({
    search: {
      position: 'absolute',
      top: 35,
      left: 120,
    },
    searchid: {
      position: 'absolute',
      top: 35,
      left: 320,
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
      width: 400,
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
      position: "absolute",
      width: 100,
      height: 100,
      left: 400,
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
      //alignItems: 'baseline',
      //justifyContent: 'center',
  },
  idinput: {
    position: 'absolute',
    top: 35,
    left: 210,
    borderRadius: 30,
    color: '#fff',
      fontSize: 20,
      height: 30,
      width: 100,
      borderColor: '#fff',
      borderWidth: 1,
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