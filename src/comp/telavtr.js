import React, { useState } from 'react';
import { StyleSheet, Text, View,Button, Platform  } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import Vtr from '../dados/vtr'
import Turno from '../dados/turno'


export default () =>{
  const [valuevtr, setValuevtr] = useState(null);
  const [isFocusvtr, setIsFocusvtr] = useState(false);
  const [valueturno, setValueturno] = useState(null);
  const [isFocusturno, setIsFocusturno] = useState(false);
  const [data, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || data;
    setShowPicker(Platform.OS === 'ios'); // Manter o picker visível para uma experiência mais suave no iOS
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };



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
            placeholder={!isFocusturno ? 'Selecionar item' : '...'}
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
            placeholder={!isFocusturno ? 'Selecionar item' : '...'}
            searchPlaceholder="Pesquisar..."
            value={valueturno}
            onFocus={() => setIsFocusturno(true)}
            onBlur={() => setIsFocusturno(false)}
            onChange={item => {
                setValueturno(item.value);
                setIsFocusturno(false);
            }}        
            />

            <Button title="Selecionar Data" onPress={showDatePicker} />
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

        </View>
        <View style={styles.info}>
            <Text>{valuevtr}</Text>
            <Text>{valueturno}</Text>
            <Text>Data selecionada: {data.toLocaleDateString()}</Text>
        </View> 

    </View> 
 )}


 const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'white',
      paddingtop: 16,
      justifyContent:'center',
      
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      margin:10,
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
    info:{
      flex:1,
      backgroundColor: 'white',
      justifyContent:'center',
    },
   form:{
      flex:1,
      backgroundColor: 'white',
      justifyContent:'center',
    }    
  });
  