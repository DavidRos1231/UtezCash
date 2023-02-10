import React , { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import colores from './src/utils/colores';
import Form from './src/components/Form';
import BtnCalculate from './src/components/BtnCalculate';
import ResultCalculate from './src/components/ResultCalculate';

export default function App() {
  const [cantidad, setCantidad]=useState(null);
  const [interes , setInteres]=useState(null);
  const [plazos, setPlazos] = useState(null);
  const [prestamo, setPrestamo] = useState(null);

  const calcular = () =>{
    if(!cantidad){
      console.log("Ingresa la cantidad");

    }else if(!interes){
      console.log("Ingresa el interes");

    }else if(!plazos){
      console.log("Ingresa los plazos");
    }else{
      const inter = interes/100;
      const pagos = cantidad/((1-Math.pow(inter+1, -plazos))/inter);
      setPrestamo({
        pagoMes: pagos.toFixed(2),
        pagototal:(pagos*plazos).toFixed(2)
      })
      console.log(prestamo);
    }
    
  }
  return (
    <View style={{height:"100%"}}>
      <StatusBar style='dark'/>
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.comodin}></View>
        <Text style={ styles.tittleApp}>UTEZ CASH</Text>
        <Form 
        setCantidad={setCantidad}
        setInteres={setInteres}
        setPlazos={setPlazos}
        />
      </SafeAreaView>
      <ResultCalculate/>
      <BtnCalculate fnCalcular={calcular}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  comodin: {
    backgroundColor: colores.VERDE,
    height: 200,
    alignItems: 'center',
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex:-1

  },
  SafeAreaView: {
    height: 290,
    alignItems: 'center',
  },
  tittleApp:{
    fontSize:25,
    fontWeight: "bold",
    color:"#fff",
    marginTop:15

  }
});
