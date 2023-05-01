import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {React, useRef, useState} from 'react';
import MaskedView from "@react-native-community/masked-view";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Friends } from './Components/Friends';

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

          <Friends
            title = 'Friends in common'
            foto1 = 'https://lh3.googleusercontent.com/LXS4M8dyY5RbjrYZijwY_GuvYkd4eYc7bokdL9Mv6qkidZtBVN9KOxXVTd-4oRcKbu3VLDXOnUNLkiN-65d57nOJxcPD2KEx_a0u3lA'
            foto2 = 'https://lh3.googleusercontent.com/XCZxyb0V_FCxyj52z8NB_PiqwhH8kfaWSlw27EtrlbA_RyuWOM3Qf2tOz-k5G70CWT6h8e6354H9h4AFWoGPqQqf7VuqbSZWooqXSVc'
            foto3 = 'https://lh3.googleusercontent.com/oO6ybJSZjUadBQPFlYc--rF5pTAI9TWOGBgbh52E_BIQITsJUwZpL6Dc6vnjF7p9QVrkyxnv8DhSMBo3W_zA4hXTwZi_SdFnttd0IAuz'
          />

        
          <Text style={styles.dailies}>Favorite Dailies</Text>

          {dailiesPerfil('https://w0.peakpx.com/wallpaper/266/703/HD-wallpaper-fernando-alonso-alonso-f1-fa14-fernando-formula-1.jpg')}
          {dailiesPerfil('https://lh3.googleusercontent.com/La34tWXDayquYMWpys4eyKdCww86C5JAjWbkH55ahh01exCFdLNYxcFM8ySbqeIwxyJL7maSpzRIlR6DDV2sdiAX9qXWL0FkAtR3Dlw')}

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
    <SafeAreaView style={{flexDirection: 'row', marginTop: 15, paddingHorizontal: '11%'}}>
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
    color: '#DADADA',
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
