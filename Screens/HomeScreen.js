import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, StyleSheet, View, Alert, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text>yo wasssup</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems:'center',
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    fontSize: 40,
    fontWeight: '200',
    marginLeft: 10
  },
});