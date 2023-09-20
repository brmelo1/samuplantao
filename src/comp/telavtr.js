import React, { useState } from 'react';
import { Text, View,TouchableOpacity, Platform,FlatList ,Button } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import Vtr from '../dados/vtr'
import Turno from '../dados/turno'
import Profissional from '../dados/profissional';
import styles from '../Estilo/estilovtr';
import { fire_banco } from '../Firebase/firebase';
import { collection, addDoc } from "firebase/firestore"; 
import * as Animatabe from 'react-native-animatable'


export default function Telavtr({navigation}){
  const [valuevtr, setValuevtr] = useState(null)
  const [isFocusvtr, setIsFocusvtr] = useState(false)
  const [valueturno, setValueturno] = useState(null)
  const [isFocusturno, setIsFocusturno] = useState(false)
  const [data, setDate] = useState(new Date())
  const [showPicker, setShowPicker] = useState(false)
  const [valueprofi, setValueprofi] = useState(null)
  const [isFocusprofi, setIsFocusprofi] = useState(false)
  const [selectedValue, setSelectedValue] = useState(null)
  const [savedValues, setSavedValues] = useState([])
  const [equipe, setEquipe] = useState([])
  
  const ordemPro = Profissional.slice().sort((a, b) => a.label.localeCompare(b.label));

  const calendario = (event, selectedDate) => {
    const currentDate = selectedDate || data;
    setShowPicker(Platform.OS === 'ios'); // Manter o picker visível para uma experiência mais suave no iOS
    setDate(currentDate);
  };

  const showCalendario = () => {
    setShowPicker(true);
  };

    const addprofissional = () => {
        if (selectedValue && !savedValues.includes(selectedValue)) {
            setSavedValues([...savedValues, selectedValue]);
            setValueprofi(null);
            
          }
    };

    const removeprofissional = (itemToRemove) => {
        setSavedValues(savedValues.filter((item) => item !== itemToRemove));
      };
    const apagatotal= () =>{
      setValuevtr(null)      
      setValueturno(null);      
      setDate(new Date());      
      setValueprofi(null);      
      setSelectedValue(null);
      setSavedValues([]);
      navigation.navigate('Telainicial')
    }
    const salvatotal= () =>{
      const novaEquipe = {
        "vtr": valuevtr,
        "turno": valueturno,
        "data": data.toLocaleDateString(),
        "profi": savedValues,
      }
        if (savedValues.length ===0 || !data || !valueturno || !valuevtr){
            console.warn('ta errado')      
        }
        else{
            const doc= addDoc(collection(fire_banco,'equipesamu'),{vtr: valuevtr,
            turno: valueturno,
            data: data.toLocaleDateString(),
            profi: savedValues,ativado:true})
            console.log('foi ', doc)                        
          // setEquipe(prevEquipes => [...prevEquipes, novaEquipe])
          setValuevtr(null)      
          setValueturno(null);      
          setDate(new Date());      
          setValueprofi(null);      
          setSelectedValue(null);
          setSavedValues([]);
          navigation.navigate('Telainicial')
          console.warn(equipe)
        }      
      }

   
  return (
    <View style={styles.container}>
        <View style={styles.containerLogoSamu}>
          <Animatabe.Image
              animation='fadeInRight'
              delay={200}
              source={require('../assets/logo-com-texto-horizontal.png')}
              style={styles.logoSamu}
          />
        </View>

         <View style={styles.form}>
            <Dropdown
              style={[styles.dropdown, isFocusvtr && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={Vtr}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocusturno ? 'Viatura' : '...'}
              searchPlaceholder="Pesquisar..."
              value={valuevtr}
              onFocus={() => setIsFocusvtr(true)}
              onBlur={() => setIsFocusvtr(false)}
              onChange={item => {
                  setValuevtr(item.value);
                  setIsFocusvtr(false);
                  }}        
                  />
            <Dropdown
              style={[styles.dropdown, isFocusturno && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={Turno}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocusturno ? 'Turno' : '...'}
              searchPlaceholder="Pesquisar..."
              value={valueturno}
              onFocus={() => setIsFocusturno(true)}
              onBlur={() => setIsFocusturno(false)}
              onChange={item => {
                  setValueturno(item.value);
                  setIsFocusturno(false);
              }}        
              />
        </View>
        <View style={styles.btn} >
              <TouchableOpacity style={styles.botao} title="Selecionar Data" onPress={showCalendario} >
                  <Text style={styles.buttonText}>Selecionar Data</Text>
                  {showPicker && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={data}
                        mode="date" // Pode ser "date" para data, "time" para hora, ou "datetime" para data e hora
                        is24Hour={true} // Define o formato para 24 horas (true) ou 12 horas (false)
                        display="default" // Pode ser "default", "spinner", "calendar", ou "clock"
                        onChange={calendario}
                      />
                  )}
              </TouchableOpacity>
        </View>

        <View style={styles.pessoa}>
              <Dropdown style={[styles.dropdownpessoa, isFocusprofi && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={ordemPro}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocusprofi ? 'Selecionar' : '...'}
              searchPlaceholder="Pesquisar..."
              value={valueprofi}
              onFocus={() => setIsFocusprofi(true)}
              onBlur={() => setIsFocusprofi(false)}
              onChange={item => {
                  setValueprofi(item.value);
                  setIsFocusprofi(false);
                  setSelectedValue(item.value)
                  }}/>   
              <TouchableOpacity style={styles.botao} title="Selecionar Data" onPress={addprofissional} >
                  <Text style={styles.buttonText}>Adicionar</Text>              
              </TouchableOpacity>                  
       </View>

       <View style={styles.listapessoa}>
          <FlatList
                data={savedValues}
                renderItem={({ item }) => (
                <View style={styles.savedItemContainer}>
                    <Text style={styles.savedItem}>{item}</Text>
                    <TouchableOpacity style={styles.botaoexcluir} title="Excluir" onPress={() => removeprofissional(item)} >
                        <Text style={styles.txtex}>Excluir</Text>              
                    </TouchableOpacity> 
                </View>
            )}
             keyExtractor={(item, index) => index.toString()}
            />
        </View>
        
        <View style={styles.info}>
          <Text style={styles.textInfo}>Viatura selecionada: {valuevtr}</Text>
          <Text style={styles.textInfo}>Hora selecionada: {valueturno}</Text>
          <Text style={styles.textInfo}>Data selecionada: {data.toLocaleDateString()}</Text>
        </View>

        <View style={styles.finalizar}>
            <TouchableOpacity style={styles.botaocancela} title="Excluir" onPress={() => apagatotal()} >
                <Text style={styles.txtex}>Cancelar</Text>              
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaosalva} title="Salva" onPress={() => salvatotal({})} >
                <Text style={styles.txtex}>Salvar</Text>              
            </TouchableOpacity>             

        </View>
        

    </View> 
 )}


