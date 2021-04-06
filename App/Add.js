import React from 'react';
import {ScrollView, Platform, Button, Image, StyleSheet, Text, TouchableOpacity, TextInput, View, ImageBackground } from 'react-native';
import backg from './assets/logo.png';
import {ServicesContext} from './ServicesContext'

class AddScreen extends React.Component {
      state = {
          data: [],
          poke: [],
          anim: [],
          manga: [],
          index: 0,
      }
      onAddFormButtonClick = () => {
        let newdata = {name: "", main: "", degree: ""}
        this.context.addData(this.context.data, newdata);
      };
      onPokeButtonClick = () => {
          let newpoke = {name: "", id: "", image: "", descr: ""}
          this.context.addPoke(this.context.poke, newpoke)
      }
      onAnimClick = () => {
          let newAnim = [{name: "", year: "", season: "", title: "", image: "", synopsis: "", startdate: "", enddate: ""}]
          this.context.addAnim(this.context.anim, newAnim)
      }
      onMangaClick = () => {
        let newManga = [{name: "", title: "", image: "", synopsis: "", startdate: "", enddate: ""}]
        this.context.addManga(this.context.manga, newManga)
      }
      render() {
        return (
        <ImageBackground source={backg} style={styles.background} >
            <View style = { styles.viewHolder }>
                <Text style = {styles.weather}>{"Weather Service"}</Text>
                <TouchableOpacity activeOpacity = { 0.8 } style = { styles.btn } onPress = { this.onAddFormButtonClick }>
                    <Text style = {styles.text}>+</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.viewHolder}>
                <Text style = {styles.weather}>{"Pokemon service"}</Text>
                <TouchableOpacity activeOpacity = { 0.8 } style = { styles.btn } onPress = { this.onPokeButtonClick }>
                    <Text style = {styles.text}>+</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.viewHolder}>
                <Text style = {styles.weather}>{"Anime Service"}</Text>
                <TouchableOpacity activeOpacity = { 0.8 } style = { styles.btn } onPress = { this.onAnimClick }>
                    <Text style = {styles.text}>+</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.viewHolder}>
                <Text style = {styles.weather}>{"Manga Service"}</Text>
                <TouchableOpacity activeOpacity = { 0.8 } style = { styles.btn } onPress = { this.onMangaClick }>
                    <Text style = {styles.text}>+</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

        );
    }
}
AddScreen.contextType = ServicesContext;
export default AddScreen;

const styles = StyleSheet.create(
    {
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
        weather: {
            position: 'absolute',
            color: 'white',
            fontSize: 25,
            top: 5,
            left: 5,
        },
        background: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          },
        container:
        {
            flex: 1,
            justifyContent: 'center',
            paddingTop: (Platform.OS == 'ios') ? 20 : 0
        },
    
        text:
        {
            color: 'white',
            fontSize: 25
        },
    
        btn:
        {
            position: 'absolute',
            right: 0,
            //bottom: 300,
            borderRadius: 30,
            width: 50,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: 0
        }
    });
//const rootElement = document.getElementById("root");
//ReactDOM.render(<AddScreen />, rootElement);
