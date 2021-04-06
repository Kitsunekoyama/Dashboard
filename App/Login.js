import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, TextInput, View, ImageBackground } from 'react-native';
import backg from './assets/logo.png';
import * as Google from 'expo-google-app-auth';

var state = {signedIn: false, name: "", photoUrl: ""}
async function SignInGoogle() {
  try {
    const result = await Google.logInAsync({
    androidClientId: '518704308076-3tmaho6c955b7ue4g6jea44gansn65dm.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
  });
      if (result.type == 'success') {
          console.log(result)
    state.signedIn = true,
    state.name = result.user.name,
    state.photoUrl = result.user.photoUrl
    return result.accessToken;
  } else {
    return {cancelled: true};
  }
} catch(e) {
  alert(e)
  return {error:true};
  }
}

async function askLogin(u, p, navigation) {
  try {
    const res = await fetch("http://0.0.0.0:8080/login?username=" + u + "&password=" + p)
  if (res.ok) {
    //console.log(res.statusText)
    navigation.navigate('Home')
  } else {
    alert(res.statusText)
  }
  } catch(error) {
    alert(error)
  }  
}

  async function askSignUp(u, p, navigation) {
    try {
      const res = await fetch("http://0.0.0.0:8080/signUp?username=" + u + "&password=" + p)
    if (res.ok) {
      console.log(res.statusText)
      navigation.navigate('Home')
    } else {
      console.log(res.statusText)
    }
    } catch(error) {
      alert(error)
    }  
}

const checkLogin = (u, p, n) => {
  askLogin(u, p, n)
  //navigation.navigate('Home')
  }
const checkSign = (u, p, n) => {
  askSignUp(u, p, n)
}
function buttonTest() {
  if (state.signedIn == true) {
    weatherBalloon(6167865)
  }
}
//onPress={() => navigation.navigate('Home')}
//onPress={() => checkSign(mail, pass, navigation)}
const LoginScreen = ({navigation}) => {
    const [mail, setEmail] = React.useState('E-Mail')
    const [pass, setPassword] = React.useState('Password');
    return (
    <ImageBackground source={backg} style={styles.background} >
      <View style={styles.container}>
        <Text style={styles.title}>
          Dashboard
        </Text>
      
       <TextInput
            style={styles.input}
            value={mail}
            onChangeText={text => setEmail(text)}
       />

      <TextInput
            style={styles.input}
            value={pass}
            onChangeText={text => setPassword(text)}
       />
        <TouchableOpacity
          onPress={() => checkSign(mail, pass, navigation)}
          style={styles.button1}>
          <Text style = {styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => checkLogin(mail, pass, navigation)}
          //onPress={() => alert('Dashboard')}
          style={styles.button2}>
          <Text style = {styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
  //}
}

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 50,
    width: 300,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
    marginTop: 100,
  },
  button1: {
    width: 150,
    height: 50,
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    width: 150,
    height: 50,
    backgroundColor: "blue",
    padding: 20,
    marginTop: 20,
    marginLeft: 100,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 5,
    color: '#fff',
    fontSize: 20,
    height: 50,
    width: 250,
    marginLeft: 50,
    borderColor: '#fff',
    borderWidth: 1,
    paddingLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
},
});
