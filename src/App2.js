import React from 'react';
import { StyleSheet, View} from 'react-native';
import Telavtr from './comp/Telavtr';
import Telainicial from './comp/Telainicial';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Telainicial" component={Telainicial} />
            <Stack.Screen name="Telavtr" component={Telavtr} />
          </Stack.Navigator>
      </NavigationContainer>

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

