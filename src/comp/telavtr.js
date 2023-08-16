import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Platform,FlatList ,Button } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import Vtr from '../dados/vtr'
import Turno from '../dados/turno'
import Profissional from '../dados/profissional';



export default () =>{
  const [valuevtr, setValuevtr] = useState(null);
  const [isFocusvtr, setIsFocusvtr] = useState(false);
  const [valueturno, setValueturno] = useState(null);
  const [isFocusturno, setIsFocusturno] = useState(false);
  const [data, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [valueprofi, setValueprofi] = useState(null);
  const [isFocusprofi, setIsFocusprofi] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [savedValues, setSavedValues] = useState([]);
  const [equipe, setEquipe] = useState([]);
  
  const ordemPro = Profissional.slice().sort((a, b) => a.label.localeCompare(b.label));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || data;
    setShowPicker(Platform.OS === 'ios'); // Manter o picker visível para uma experiência mais suave no iOS
    setDate(currentDate);
  };

  const showDatePicker = () => {
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
        setEquipe(prevEquipes => [...prevEquipes, novaEquipe])
        setValuevtr(null)      
        setValueturno(null);      
        setDate(new Date());      
        setValueprofi(null);      
        setSelectedValue(null);
        setSavedValues([]);
      }      
      console.warn(equipe)
      }

   
  return (
    <View style={styles.container}>      
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
        <View style={styles.btn}>
              <TouchableOpacity style={styles.botao} title="Selecionar Data" onPress={showDatePicker} >
                  <Text style={styles.buttonText}>Selecionar Data</Text>
                  {showPicker && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={data}
                        mode="date" // Pode ser "date" para data, "time" para hora, ou "datetime" para data e hora
                        is24Hour={true} // Define o formato para 24 horas (true) ou 12 horas (false)
                        display="default" // Pode ser "default", "spinner", "calendar", ou "clock"
                        onChange={onChange}
                      />
                  )}
              </TouchableOpacity>
        </View>
        <View style={styles.info}>
            <Text>{valuevtr}</Text>
            <Text>{valueturno}</Text>
            <Text>Data selecionada: {data.toLocaleDateString()}</Text>
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


 const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'white',      
      justifyContent:'center',
      marginBottom:10,      
    },
    dropdown: {
      flex:1,
      height: 40,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 10,
      paddingHorizontal: 8,
      marginLeft:5,
      marginRight:5,      
      
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
   form:{
      flex:1,
      backgroundColor: '#E9967A',
      justifyContent: 'space-around', 
      flexDirection:'row', 
      alignItems:'center',     
    },
    btn:{
      flex:1,
      backgroundColor: '#123',
      justifyContent:'center',       
    },
    info:{
      flex:1,
      backgroundColor: '#2cf',
      justifyContent:'center',       
    },
    pessoa:{       
      flex:2, 
      backgroundColor: '#abc',
      justifyContent:'center',            
    },
    listapessoa:{
      flex:6,
      backgroundColor: '#dcf',
      justifyContent:'center',
    },   
    dropdownpessoa: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      margin:10,
    }, 
    savedItem: {
      fontSize: 16,
      marginVertical: 5,
    },
      savedItemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft:10,
      marginRight:10,
      marginVertical: 5,
  },
      savedItem: {
          fontSize: 16,
  }, 
  botao:{
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    alignItems:'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',    
  },  
  botaoexcluir:{
    backgroundColor:'#B22222',
    height:40,
    width:100,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
  },
  finalizar:{
    flex:2,
    flexDirection:'row',
    justifyContent: 'space-around', 
    alignItems:'center',   

  },
  botaocancela:{
    backgroundColor:'#FFD700',
    height:50,
    width:150,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
  },
  botaosalva:{
    backgroundColor:'#00FF7F',
    height:50,
    width:150,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
  },
  txtex:{
    fontWeight:'bold',
    fontSize:16,
  }
  });
  