//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import {NavigationContainer} from '@react-navigation/native'; //Agregado
import NavigationStack from './src/navigation/NavigationStack';
import { OrderProvider } from './src/screens/OrderContext';


export default function App() {
  return (
    <OrderProvider>
      <NavigationContainer>
        <NavigationStack/>
      </NavigationContainer>
    </OrderProvider>
    
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
