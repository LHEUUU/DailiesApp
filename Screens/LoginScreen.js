import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, StyleSheet, View, Alert, Text, TouchableOpacity } from 'react-native';
import { Input } from '../Components/Inputs';
import MaskedView from "@react-native-community/masked-view";
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({navigation}) {
  
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = React.useState({});

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email){
      handleError ('Please input an email adress', 'email');
      valid = false;
    }else if (inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError ('Input a valid email', 'email');
      valid = false;
    }

    if (!inputs.password){
      handleError ('Please input your password', 'password');
      valid = false;
    }else if (inputs.password.length < 5){   //password n for igual
      handleError ('Incorrect password', 'password');
      valid = false;
    }

    if (valid) {
      navigation.navigate("Home");
    }
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({...prevState, [input] : text}));
  };

  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({...prevState, [input] : errorMessage}));
  };

  const col = ['rgb(170, 88, 255)', 'rgb(255, 68, 68)']

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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello,</Text>
        <Text style={styles.text}>Welcome back to</Text>
        <GradientText style={styles.dailies}>Dailies</GradientText>

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{x: 1, y: 1 }}
          colors={col}
          resizeMode='cover'
          style={styles.caixa}>

          <Input 
            iconName='email-outline' 
            label="Email"
            placeholder="Enter your email adress"
            onChangeText = {(text) => handleOnChange(text, 'email')}
            error={errors.email}
            onFocus={()=>{
              handleError(null, "email");
            }}
            />

          <Input 
            iconName='lock-open-outline' 
            label="Password"
            placeholder= 'Enter your password'
            password
            onChangeText = {(text) => handleOnChange(text, 'password')}
            error={errors.password}
            onFocus={()=>{
              handleError(null, "password");
            }}
            />

            <View style={{alignItems:'center', marginTop:'8%'}}>
              <TouchableOpacity onPress={validate} style={[styles.butao, {marginTop: 20}]} activeOpacity={0.7}>
                <Text style={{color:'white'}}>Log in</Text>
              </TouchableOpacity>
            
              <Text style={{fontSize: 15, color:'white', fontWeight: '200', marginTop:'10%'}}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")} style={styles.butao} activeOpacity={0.7}>
                <Text style={{color:'white'}}>Sign up</Text>
              </TouchableOpacity>
            </View>
        </LinearGradient>
          
      </View>
    </TouchableWithoutFeedback>
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
    backgroundColor: '#9A31FF',
    alignItems: 'center',
    height: '100%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: 60,
  }
});