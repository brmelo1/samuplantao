import React, { useState,useEffect } from 'react';
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
import styles from '../Estilo/estiloInicial';
import * as Animatabe from 'react-native-animatable'
import { fire_banco } from '../Firebase/firebase';
import { collection, getDocs } from "firebase/firestore"; 


const equipes=[{
    "vtr": "USB01",
    "turno": "06:00 - 12:00",
    "data": "23-07-2023",
    "profi": ['bruno','angra','luiz'],
},{
    "vtr": "USB02",
    "turno": "06:00 - 12:00",
    "data": "23-07-2023",
    "profi": ['joao','maria','toin'],
},{
    "vtr": "USB03",
    "turno": "06:00 - 12:00",
    "data": "23-07-2023",
    "profi": ['jorge','ana','leticia'],
}]


export default function Telaincial({navigation}){
    
    
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchTodos() {
        const querySnapshot = await getDocs(collection(fire_banco, 'equipesamu'));
        const todos = [];

        querySnapshot.forEach((doc) => {
            todos.push({
            id: doc.id,
            ...doc.data(),
            });
        });

        setTodos(todos);
        }

        fetchTodos();
    }, []);
    


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
            <View style={styles.campoEquipes} >
            <FlatList
                data={todos}
                renderItem={({ item }) => (
                <View style={styles.listaEquipes}>
                    <Text style={styles.savedItem}>{item.vtr}  </Text>
                    <Text style={styles.savedItem}>{item.turno}  </Text>
                    <Text style={styles.savedItem}>{item.data}</Text>
                    <TouchableOpacity style={styles.botaofinalizar} title="Excluir" onPress={() => removeprofissional(item)} >
                        <Text style={styles.txtex}>Finalizar</Text>              
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoalterar} title="Excluir" onPress={() => removeprofissional(item)} >
                        <Text style={styles.txtex}>Alterar</Text>              
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoexcluir} title="Excluir" onPress={() => removeprofissional(item)} >
                        <Text style={styles.txtex}>Excluir</Text>              
                    </TouchableOpacity>
                    
                </View>
            )}
             keyExtractor={(item, index) => index.toString()}
            />

               
            </View>
            
        </SafeAreaView>
    )
}