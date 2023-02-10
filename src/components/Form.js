import react from "react";
import { View, Text , TextInput, StyleSheet } from "react-native";
import colores from "../utils/colores";
import RNPickerSelect from 'react-native-picker-select';
import BtnCalculate from "./BtnCalculate";

export default function Form(props){
    //console.log(props);
    const { setCantidad, setInteres , setPlazos } = props;
    return(
        <View style={styles.viewForm}>
            <View style={{flexDirection:"row"}}>
                <TextInput onChange={(e)=>setCantidad(e.nativeEvent.text)} style= { styles.input} placeholder="Cantidad Solitada" keyboardType="numeric"></TextInput>
                <TextInput onChange={(e)=>setInteres(e.nativeEvent.text)} style={ [styles.input , styles.porcentaje]} placeholder="Interés %" keyboardType="numeric"></TextInput>
            </View>
            <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                style={selectStyle}
                onValueChange={(value) => setPlazos(value)}
                placeholder={{
                    label: "Seleciona los meses...",
                    value: null
                }}
                items={[
                    { label: '3 Meses ', value: '3' },
                    { label: '6 Meses', value: '6' },
                    { label: '12 Meses', value: '12' },
                    { label: '24 Meses', value: '24'}
                ]}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    viewForm: {
        width:"85%",
        bottom: 0,
        paddingHorizontal: 50,
        backgroundColor: colores.AZUL,
        borderRadius:30,
        height:180,
        justifyContent:"center",
        position:"absolute",
        
    },
    input : {
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth:1,
        borderColor: colores.VERDE,
        width:"65%",
        height:35,
        marginRight:5,
        marginLeft:0,
        color: "#000 ", 
        paddingHorizontal:10
    },
    porcentaje : {
        width:"31%",
        marginLeft:5

    }

});

const selectStyle = StyleSheet.create({
    inputAndroid:{
        padding:8,
        fontSize:15,
        borderWidth:1,
        borderColor:colores.VERDE,
        borderRadius:8,
        color:"#000",
        backgroundColor:"#fff",
        marginTop:10
    },
    inputIOS: {
        padding:8,
        fontSize:15,
        borderWidth:1,
        borderColor:colores.VERDE,
        borderRadius:5,
        color:"#000",
        backgroundColor:"#fff",
        marginTop:10,
        marginLeft:-5,
        marginRight:-5
    }
});