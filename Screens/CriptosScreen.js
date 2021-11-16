import React, { Component } from 'react';
// Cuando cargue la app, quiero hacer una peticion GET --> Usamos useEffect
import { View, Text, FlatList, StyleSheet, TextInput, StatusBar } from 'react-native';
// El componente FlatList recibe un array y me permite recorrerlo de manera facil
const axios = require('axios').default;
import CoinItem from '../components/CoinItem';

export class CriptosScreen extends Component {
    constructor(props) {
      super(props);
      this.state = { coins: [], search: '', refreshing: false };
      this.loadData();
    }
    setCoins(jsonCoins) {
      this.setState({ coins: jsonCoins });
    }
    setSearch(text) {
      this.setState({ search: text });
    }
    setRefreshing(boolean) {
      this.setState({ refreshing: boolean });
    }
  
    loadData() {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(resp => this.setCoins(resp.data));
    }
    render() {
      return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#141414' />
          <View style={styles.header}>
            <Text style={styles.title}>Cryptomanía</Text>
            <TextInput style={styles.searchInput}
              placeholder='Buscar Coin' placeholderTextColor='#858585'
              onChangeText={text => this.setSearch(text)}>
            </TextInput>
          </View>
  
          <FlatList style={styles.list}
            data={
              this.state.coins.filter((coin) => coin.name.toLowerCase().includes(this.state.search) || coin.symbol.toLowerCase().includes(this.state.search))}
            // Filtra en el array de cryptos mientras voy tipeando (por el nombre o por su abreviación)
            // El componente recibe como datos el array coins
            renderItem={({ item }) => {
              return <CoinItem coin={item} /> //a CoinItem le paso como parametro el item
            }}  // renderItem me permite devolver uno a uno, c/u de los objetos que estan dentro del array. Es como la funcion MAP
            // renderItem devuelve un obj q se llama item: y tiene un index, un item, y un separators
  
            showsVerticalScrollIndicator={false} // Ocultamos la barra de scroll
            refreshing={this.state.refreshing} // Permite hacer un refresh de los datos de la app
            onRefresh={async () => {
              this.setRefreshing(true);
              await this.loadData(); //La funcion que trae los datos de la api
              // await ya que una vez que termine de cargar los datos, va a setear el refresh en false
              this.setRefreshing(false);
            }}
          />
  
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#141414',
      alignItems: 'center',
      flex: 1 // Para que me ocupe todo el tamanio de la pantalla
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