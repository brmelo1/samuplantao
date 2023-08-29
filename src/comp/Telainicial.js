import React, { useState } from 'react';
import { Text, View,TouchableOpacity, Platform,FlatList ,Button, SafeAreaView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import styles from '../Estilo/estiloInicial';

export default function Telaincial({navigation}){
    const Showbtn= () =>{
        console.warn('ola mundo')
      }
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.campoBtn}>
                <View  style={styles.btn}>
                    <TouchableOpacity style={styles.botao} title="Selecionar Data" onPress={()=> navigation.navigate('Telavtr')} >
                    <Text style={styles.buttonText}>Cadastro Equipe</Text>                  
                    </TouchableOpacity>
                </View>
                
    
            </View>
            <View style={styles.campoPlantao}>
            </View>
        </SafeAreaView>
    )
}