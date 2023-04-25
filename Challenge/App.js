import { StyleSheet, Text, View, Image, Animated, SafeAreaView, useWindowDimensions, TouchableOpacity, TouchableWithoutFeedback, Easing, ImageBackground, Pressable} from 'react-native';
import {React, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {

  const [foto, setFoto] = useState(false);

  return (
    <View style={styles.container}>
      
      <Pressable onPress={() => {
        if (foto == true) {
          setFoto(false);
        } else {
          setFoto(true);
        }
      }}>
        <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1541454226399-0f6d5496db29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'}} style={{width:'100%', height:'100%', opacity: foto == true ? 1 : 0.3}}/>
      </Pressable>


      {!foto &&
      <View style={{
        top: 45,
        position: 'absolute',
        width: '100%',
      }}>

        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 6,
            left: 25,
          }}>
            <Image
              style = {{borderRadius: 100, height: 55, width: 55,}}
              source = {{uri: 'https://img.a.transfermarkt.technology/portrait/big/462250-1668165358.jpg?lm=1'}}
            />
            
            <TouchableOpacity>
              <View>
                <Text style={{paddingLeft: 15, fontSize: 18, fontWeight:'bold', color: 'white'}}>Slow J</Text>
                <Text style={{paddingLeft: 15, fontSize: 11, fontWeight:'bold', color: '#CDCDCD'}}>@johnyboy</Text>
              </View>
            </TouchableOpacity>
          </View>


          <View style={{
            alignItems: 'center',
            top: 25,
            }}>
            <Text style={{fontSize: 25, fontWeight:'bold', color: 'white'}}>Paisagem Challenge</Text>
            <Text style={{fontSize: 12, color: '#CDCDCD', top: 5, paddingHorizontal: 10}}>Sou mesmo fixe haha! Neste desafio tens de tirar uma foto duma cena.</Text>
          </View>

      </View>

      }

      {!foto &&
      <TouchableOpacity style={{position:'absolute', bottom:25, flexDirection:'row', left: '26%'}}>
        <Text style={{color:'white', fontSize: 18, fontWeight: 'bold'}}>It's Daillies' Time</Text>
        <Icon name='camera-outline' style={{color: 'white', fontSize: 28, left: 10}}/>
      </TouchableOpacity>
      }
      
      <TouchableOpacity style={{position:'absolute', right:25, top: 60}}>
        <Icon name='close' style={{color: 'white', fontSize: 28,}}/>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111224',
    height: '100%',
  },
});


//shared element transition