import {Text , View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Users from './Components/Users';
import Test from './Components/Test';


const Stack = createNativeStackNavigator();


export default function App(){
  return <NavigationContainer>
    <Stack.Navigator initialRouteName='Users'>
      <Stack.Screen options={{headerShown: false}} name='Users' component={Users} />
      <Stack.Screen name='Test' options={{headerShown: false}} component={Test} />
    </Stack.Navigator>
  </NavigationContainer>
}