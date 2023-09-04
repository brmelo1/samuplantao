import React, { useState } from 'react';
import { 
    Text, 
    View,
    TouchableOpacity, 
    Platform,
    FlatList,
    Button, 
    SafeAreaView, 
    StyleSheet, 
    Image 
} from 'react-native';

import { Dropdown } from 'react-native-element-dropdown';
import styles from '../Estilo/estiloInicial';

import * as Animatabe from 'react-native-animatable'

export default function Telaincial({navigation}){
    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatabe.Image
                    animation='flipInY'
                    source={require('../assets/logo-samu-5.png')}
                    style={{width:"100%"}}
                />
            </View>

            <View style={styles.campoBtn} >
                <View style={styles.tituloTelaInicial}>
                    <Text style={styles.textoTituloTelaInicial}>
                        Gestão de pessoal por viatura
                    </Text>
                </View>

                <View  style={styles.btn}>
                    <TouchableOpacity style={styles.botao} title="Selecionar Data" onPress={()=> navigation.navigate('Telavtr')} >
                        <Text style={styles.buttonText}>Cadastrar Equipe</Text>                  
                    </TouchableOpacity>
                </View>
            </View>

            
        </SafeAreaView>
    )
}