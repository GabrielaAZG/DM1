import React, {useState, useContext} from "react";
import {View, Text, TextInput, Button, SafeAreaView, Image, StyleSheet, Alert, Platform,TouchableOpacity} from "react-native";
import { OrderContext } from './OrderContext';
import { Dropdown } from "react-native-element-dropdown";


export default function Order(props){
    const { orders, setOrders } = useContext(OrderContext);
    const [type, setType] = useState('');
    const [size, setSize] = useState('');
    const [amount, setAmount] = useState('');

    const datatype = [
        { label: 'Pepperoni', value: 'pepperoni' },
        { label: 'Hawaiana', value: 'hawaiana' },
        { label: 'Cuatro Quesos', value: 'cuatro_quesos' },
        { label: 'Vegetariana', value: 'vegetariana' },
        { label: 'Mexicana', value: 'mexicana' }
    ]
    const datasize=[
        {label:'Extra Big',value:'big'},
        {label:'Big',value:'big'},
        {label:'Medium',value:'Medium'},
        {label:'Small',value:'Small'},
    ]
    const dataamount=[
        {label:'1',value:'1'},
        {label:'2',value:'3'},
        {label:'4',value:'Medium'},
        {label:'7',value:'7'},
        {label:'8',value:'8'},
        {label:'9',value:'9'},
        {label:'10',value:'10'},
    ]
    const {navigation} = props;

    const goToLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }], 
        });
    }

    const sendToOrders = () => {
        if (type === '' || size === '' || amount === '') {
            Alert.alert("ERROR", "All fields are required");
            return;
        }
        const newOrder = { type, size, amount };
        setOrders([...orders, newOrder]); 

        Alert.alert("Saved Order", "The order has been saved");
        setType('');
        setSize('');
        setAmount('');
    };

    

    return(
        <SafeAreaView>
            <Text>ORDER</Text>
            <View style={styles.container}>
            <Dropdown
                style={styles.dropdown}
                data={datatype}
                labelField="label"
                valueField="value"
                placeholder="Selecciona una opción"
                value={type}
                onChange={item => setType(item.value)}
            />
            <Dropdown
                style={styles.dropdown}
                data={datasize}
                labelField="label"
                valueField="value"
                placeholder="Selecciona una opción"
                value={size}
                onChange={item => setSize(item.value)}
            />
            <Dropdown
                style={styles.dropdown}
                data={dataamount}
                labelField="label"
                valueField="value"
                placeholder="Selecciona una opción"
                value={amount}
                onChange={item => setAmount(item.value)}
            />
            </View>
           
            
            <View style={styles.buttoncontainer}>
                <TouchableOpacity style={styles.button} onPress={sendToOrders}>
                    <Text style={styles.Textbutton}>S A V E</Text>
                </TouchableOpacity>
                
            </View>
            <View style={styles.buttoncontainer}>
                <TouchableOpacity style={styles.buttonexit} onPress={goToLogin}>
                    <Text style={styles.Textbutton}>E X I T</Text>
                </TouchableOpacity>
            </View>
            
            
            
            
            
            
            
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    image: {
        width: 125, 
        height: 125,
        marginBottom: 20

    },
    dropdown: {
        height: 50,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        marginBottom: 20,
        alignItems:'center'
      },
      container:{
         alignItems:'center',
         marginTop:100
      },
      button:{
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderWidth: 0, // Ancho del borde
        borderColor: 'black', // Color del borde
        shadowColor: '#000', // Sombra para mejorar visibilidad en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        marginTop:10,
        alignItems:'center',
        marginEnd:0
      },
      buttoncontainer:{
        alignItems:'center',
         marginTop:10
      },
      Textbutton:{
        color:'white',
        fontSize:16
      },
      buttonexit:{
        backgroundColor: 'red',
        paddingVertical: 29,
        paddingHorizontal: 15,
        borderRadius: 200,
        borderWidth: 0, // Ancho del borde
        borderColor: 'black', // Color del borde
        shadowColor: '#000', // Sombra para mejorar visibilidad en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        marginTop:300,
        alignItems:'center',
        marginEnd:-280
      }
});




