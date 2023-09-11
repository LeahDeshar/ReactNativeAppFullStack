import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Register from './screens/auth/Register';
import Login from './screens/auth/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initalRouteName="Login">
      <Stack.Screen name='Register'
       component={Register}
       options={{
        headerShown: false
      }}/>
      <Stack.Screen name='Login' 
      component={Login} 
      options={{
        headerShown: false
      }}/>

    {/* <Register/> */}
    {/* <Login/> */}

    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
