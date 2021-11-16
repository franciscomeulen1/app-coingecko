import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const CoinItem = ({ coin }) => { // le pase por parametro el item, del cual tomo solo la propiedad coin

    //Muestro el nombre de la coin, con coin.name
    //Image, source es la prop para pintar cada uno de los elementos, es para decirle el origen. Espera un parametro llamado uri
    return (
        <View style={styles.containerItem}>
            <View style={styles.coinName}>
                <Image style={styles.image} source={{ uri: coin.image }} />
                <View style={styles.containerNames}>
                    <Text style={styles.text}>{coin.name}</Text>
                    <Text style={styles.textSymbol}>{coin.symbol}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.textPrice}> U$D {coin.current_price} </Text>
                <Text style={[styles.pricePercentage,
                coin.price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown]}>
                    {coin.price_change_percentage_24h}</Text>
            </View>
        </View>
    )
}
// Hice un condicional adentro del Style, como si fuera un array. Primero va el stylo que aplica siempre.
// Y luego si el valor es positivo va en verde. Si el valor es negativo va en rojo. 

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: '#121212',
        paddingTop: 10,
        flexDirection: 'row', // Me ordena los elementos en una fila (La imagen y el texto)
        justifyContent: 'space-between'// Para que el nombre este separado del precio
    },
    containerNames: {
        marginLeft: 10
    },
    coinName: {
        flexDirection: 'row'
    },
    image: {
        width: 30,
        height: 30
    },
    text: {
        color: '#ffffff'
    },
    textSymbol: {
        color: '#434343',
        textTransform: 'uppercase'
    },
    textPrice:{
        color: '#ffffff',
        textAlign: 'right'
    },
    pricePercentage: {
        textAlign: 'right'
    },
    priceUp: {
        color: '#00B5B9'
    },
    priceDown: {
        color: '#FC4422'
    }
})
export default CoinItem
