import React, { useState,useEffect } from 'react';
import { 
    Text, 
    View,
    TouchableOpacity, 
    FlatList,
    SafeAreaView,     
} from 'react-native';
import styles from '../Estilo/estiloInicial';
import * as Animatabe from 'react-native-animatable'
import { fire_banco } from '../Firebase/firebase';
import { collection, doc, deleteDoc,updateDoc,onSnapshot } from "firebase/firestore"; 


export default function Telaincial({navigation}){
    const [todos, setTodos] = useState([]);    

    const fetchTodos = () => {
        return onSnapshot(collection(fire_banco, 'equipesamu'), (snapshot) => {
          const newTodos = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            if (data.ativado === true) {
              newTodos.push({
                id: doc.id,
                ...data,
              });
            }
          });
          setTodos(newTodos);
        });
      };
      
    useEffect(() => {
        fetchTodos();
      }, []);
    

    async function removeprofissional(item) {
        await deleteDoc(doc(fire_banco, "equipesamu", item.id));
        
      }
    async function finalizarprofissional(item) {
        await updateDoc(doc(fire_banco, "equipesamu", item.id),{ativado:false});        
      }

    
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
                        <View style={styles.dadosequipes}>
                            <Text style={styles.savedItem}>{item.vtr}</Text>
                            <Text style={styles.savedItem}>{item.turno}</Text>
                            <Text style={styles.savedItem}>{item.data}</Text>
                        </View>
                        <View style={styles.btnEquipes}>
                            <TouchableOpacity style={styles.botaofinalizar} title="Finalizar" onPress={() => finalizarprofissional(item)} >
                                <Text style={styles.txtfi}>Finalizar</Text>              
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.botaoalterar} title="Alterar" onPress={() => alteraprofissional(item)} >
                                <Text style={styles.txtal}>Alterar</Text>              
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.botaoexcluir} title="Excluir"  onPress={() => removeprofissional(item)} >
                                <Text style={styles.txtex}>Excluir</Text>              
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                />                

            </View>            
        </SafeAreaView>
    )
}
