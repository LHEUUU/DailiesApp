import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {React, useRef, useState} from 'react';
import MaskedView from "@react-native-community/masked-view";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {

  const col = ['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.85)', 'rgba(0, 0, 0, 1)']

  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: 'https://lh3.googleusercontent.com/AhiykZflAJdSbXTMgAELp9B-at5dSzBRYcI83QWKbomEb4pKV4zIss7QTVC9EhWj1vl_yCnnSZSgEqbdXAadRFocFufp-kqoqwKoy5VU'}} style={{width:'100%', height:'100%',}}/>
    

      <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={col}
          resizeMode='cover'
          style={styles.opacityView}>

          <TouchableOpacity>
            <Icon name='arrow-left' style={{color:'white', position:'absolute', fontSize:30, left: 20, top: 30}}/>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Icon name='menu' style={{color:'white', position:'absolute', fontSize:30, right: 20, top: 30}}/>
          </TouchableOpacity>
            
          <Text style={styles.nome}>Didy Love</Text>
          <Text style={styles.userName}>@didyleo</Text>
          <Text style={styles.dailies}>Favorite Dailies</Text>

          {dailiesPerfil('https://w0.peakpx.com/wallpaper/266/703/HD-wallpaper-fernando-alonso-alonso-f1-fa14-fernando-formula-1.jpg')}
          {dailiesPerfil('https://i.redd.it/n81qxcn735w61.jpg')}

          <TouchableOpacity>
            <View style={{flexDirection:'row', top: 10, paddingHorizontal: '40%'}}>
              <Icon name='plus' style={{color:'white', fontSize:18, right: 5,}}/>
              <Text style={{fontWeight:200, fontSize:13, color:'white'}}>See more</Text>
            </View>
          </TouchableOpacity>
            
      </LinearGradient>
    </View>
  );
}

//função dailies feitos
const dailiesPerfil = (foto) => {
  return (
    <SafeAreaView style={{flexDirection: 'row', marginTop: 15, paddingHorizontal: '4.5%'}}>
      <TouchableOpacity style={{paddingHorizontal:4}}>
        <Image
          style = {styles.fotos}
          source = {{uri: foto}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{paddingHorizontal:4}}>
        <Image
          style = {styles.fotos}
          source = {{uri: foto}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{paddingHorizontal:4}}>
        <Image
          style = {styles.fotos}
          source = {{uri: foto}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{paddingHorizontal:4}}>
        <Image
          style = {styles.fotos}
          source = {{uri: foto}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{paddingHorizontal:4}}>
        <Image
          style = {styles.fotos}
          source = {{uri: foto}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{paddingHorizontal:4}}>
        <Image
          style = {styles.fotos}
          source = {{uri: foto}}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  opacityView: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  userName: {
    fontSize: 13,
    fontWeight: 200,
    color: 'white',
    top: '40%',
    left: 25,
  },
  nome: {
    fontWeight:'bold',
    fontSize: 40,
    color:'white',
    top: '40%',
    left: 25,
  },
  dailies: {
    fontSize: 22,
    fontWeight: 200,
    color: 'white',
    marginTop: '105%',
    paddingHorizontal: '28%'
  },
  fotos: {
    height: 89.6,
    width: 50.4,
    borderRadius: 10,
  },
});
