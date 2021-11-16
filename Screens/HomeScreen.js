import React, { Component } from 'react';
// Cuando cargue la app, quiero hacer una peticion GET --> Usamos useEffect
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';

export class HomeScreen extends Component {
    render() {
      return (
        <View style={styles.containerhome}>
          <Text style={styles.welcome}>Bienvenido!</Text>
          <Button
            style={styles.buttonInicial}
            onPress={() => this.props.navigation.navigate("Criptos")} //Me redirige a la ruta Details, componente DetailsScreen
            title="Consultar Criptos"
            color="#FFFFFF"
            mode="contained"> Consultar Criptos </Button>
          <StatusBar style="auto" />
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
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
    }
  })