import React from 'react';
import { StyleSheet, View} from 'react-native';
import Telavtr from './comp/telavtr';



export default () => {
  return (
    <View style={styles.container}>      
        <Telavtr/>   
        {/* <Tjson/>    */}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingLeft:10,
    paddingRight:10,
    justifyContent:'center',
  },
   
  });

