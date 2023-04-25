import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, StyleSheet, View, Alert, Text, TouchableOpacity } from 'react-native';
import MaskedView from "@react-native-community/masked-view";
import { LinearGradient } from 'expo-linear-gradient';

export default function ScreenInicial({navigation}) {

  const col = ['rgb(100, 150, 150)', 'rgb(100, 50, 200)']

  const GradientText = props => {
    return (
      <MaskedView maskElement={<Text {...props} />}>
        <LinearGradient
          colors={col}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <Text {...props} style={[props.style, {opacity: 0}]} />
        </LinearGradient>
      </MaskedView>
    );
  };

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Hello,</Text>
        <Text style={styles.text}>Welcome to</Text>
        <GradientText style={styles.dailies}>Dailies</GradientText>
        
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{x: 1, y: 1 }}
          colors={col}
          resizeMode='cover'
          style={styles.caixa}>
            <Text style={{marginTop: '30%', fontSize: 30, color:'white', fontWeight: '200',}}>Let's get started,</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.butao} activeOpacity={0.7}>
                <Text style={{color:'white'}}>Log in</Text>
            </TouchableOpacity>
                
            <Text style={{marginTop: '10%', fontSize: 15, color:'white', fontWeight: '200',}}>Not registered yet?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")} style={styles.butao} activeOpacity={0.7}>
                <Text style={{color:'white'}}>Create account</Text>
            </TouchableOpacity>
        </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 50,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: '200',
    marginLeft: 20
  },
  dailies: {
    fontSize: 50,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 'bold',
    lineHeight: 50,
    color:'white'
  },
  butao: {
    height: 60,
    width: 330,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 20,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  caixa: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '100%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: 60,
  }
});