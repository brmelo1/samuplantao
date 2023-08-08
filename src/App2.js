import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Telavtr from './comp/telavtr';
import Listatelavtr from './comp/listatelavtr';



export default () => {
  return (
    <View style={styles.container}>      
          <Telavtr/>
          <Listatelavtr />   
          
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    padding: 16,
    justifyContent:'center',}
  });

