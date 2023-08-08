import React, { useState } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = () => {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShowPicker(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showDatepicker = () => {
      setShowPicker(true);
    };
  
    return (
      <View>
        <Button title="Selecione a data" onPress={showDatepicker} />
        {showPicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    );
  };
  
  export default DatePicker;