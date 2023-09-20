import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Telavtr from '../comp/Telavtr';
import Telainicial from '../comp/Telainicial';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Telainicial" 
        component={Telainicial} 
        options={{headerShown: false}}/>
        <Stack.Screen 
        name="Telavtr" 
        component={Telavtr} 
        options={{headerShown: false}}
        />
    </Stack.Navigator>
  )

}