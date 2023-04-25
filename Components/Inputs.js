import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Input = ({label, iconName, error, password, onFocus = () => {}, ...props}) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hidePassowrd, setHidePassword] = React.useState(password);
    return (
    <View style={{marginTop:15,}}>
        <Text style = {styles.label}>{label}</Text>
        <View style={{alignItems:'center'}}>
            <View style ={[styles.inputContainer, {borderColor: error ? '#D80000': isFocused ? '#4BE549': 'white'}, {borderWidth: error ? 1: isFocused ? 1: 0.5}]}>
                <Icon name={iconName} style={{fontSize: 20, color:'white', marginRight:10}}/>
                
                <TextInput
                    secureTextEntry={hidePassowrd}
                    autoCorrect = {false}
                    placeholderTextColor={'#C1C1C1'}
                    onFocus={()=>{
                        onFocus();
                        setIsFocused(true);
                    }}

                    onBlur={()=>{
                        setIsFocused(false);
                    }}

                    style={{color:'white', flex: 1}} 
                    {...props} 
                />
                
                {password &&
                <Icon 
                    onPress={()=>setHidePassword(!hidePassowrd)} 
                    name={hidePassowrd ? 'eye-outline' : 'eye-off-outline'} 
                    style={{fontSize:22, color:'white'}}/>
                }

            </View>
        </View>
        {error && (<Text style={{color:'#D80000', fontSize:12, marginTop: 6,}}> {error} </Text>)}        
    </View>
    );
};


const styles = StyleSheet.create({
    label: {
      marginVertical: 5,
      fontSize: 15,
      color: 'white',
      fontWeight: '200',
    },
    inputContainer: {
        height: 55,
        width: 330,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
  });