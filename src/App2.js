import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#38A69D" barStyle={'light-content'}/>
      <Routes/>
    </NavigationContainer>
  );
}

// import React from 'react';
// import { View, StatusBar} from 'react-native';
// import Telavtr from './comp/Telavtr';
// import Telainicial from './comp/Telainicial';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


// const Stack = createNativeStackNavigator();

// export default () => {
//   return (
//       <NavigationContainer>
//         <StatusBar backgroundColor="#38A69D" barStyle={'light-content'}/>

//         <Stack.Navigator>
//           <Stack.Screen name="Telainicial" component={Telainicial} />
//           <Stack.Screen name="Telavtr" component={Telavtr} />
//         </Stack.Navigator>
//       </NavigationContainer>

//   );
// };

