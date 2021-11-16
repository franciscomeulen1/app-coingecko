import React, { Component } from 'react';
// Cuando cargue la app, quiero hacer una peticion GET --> Usamos useEffect
import { StyleSheet} from 'react-native';
// El componente FlatList recibe un array y me permite recorrerlo de manera facil
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {HomeScreen} from './Screens/HomeScreen';
import {CriptosScreen} from './Screens/CriptosScreen';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}
          options={{
            headerStyle:{backgroundColor: '#242324'},
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold'}
          }}/>
          <Stack.Screen name="Criptos" component={CriptosScreen} 
          options={{ 
            headerStyle:{backgroundColor: '#000000'},
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold'} 
              }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    alignItems: 'center',
    flex: 1 // Para que me ocupe todo el tamanio de la pantalla
  },
  containerhome: {
    flex: 1,
    backgroundColor: 'black', 
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonInicial:{
    marginBottom: 150
  },
  welcome:{
    color: '#fff',
    fontSize: 30,
    marginBottom: 50,
  },
  title: {
    color: '#fff',
    fontSize: 20
  },
  list: {
    width: '90%' // Para que ocupe todo el ancho de la pantalla
  },
  header: {
    flexDirection: 'row',
    marginTop: 25,
    marginBottom: 20,
    justifyContent: 'space-between', // Para que 2 elementos de la misma row se separen a los extremos
    width: '90%' // Para que ocupe todo el ancho de la pantalla
  },
  searchInput: {
    color: '#fff',
    borderBottomColor: '#4657CE',
    borderBottomWidth: 1,
    width: '40%', // Va a ocupar un 40% del contenedor
    textAlign: 'center'
  }
})

