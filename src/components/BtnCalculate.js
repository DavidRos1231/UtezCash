import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colores from '../utils/colores'

export default function BtnCalculate(props) {
    //console.log(props);
    const {fnCalcular} = props;

  return (
    <View style={styles.viewCalculate}>
        <TouchableOpacity style={styles.touchable} onPress={fnCalcular}>
            <Text style={styles.btnTitle}>Calcular</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    viewCalculate:{
        backgroundColor: colores.VERDE,
        height:100,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:"center",
        justifyContent:"center",
        bottom:0,
        width:"100%",
        position:"absolute"
    },
    touchable:{
        backgroundColor:colores.AZUL,
        padding:15,
        borderRadius:18,
        width:"80%",
    },
    btnTitle:{
        fontWeight:"bold",
        fontSize:16,
        textAlign:"center",
        color:"white"
    }
})