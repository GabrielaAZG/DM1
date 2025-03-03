import React, {useState, useContext} from "react";
import {View, Text, TextInput, Button, SafeAreaView, Image, StyleSheet, Alert, Platform,TouchableOpacity,ImageBackground} from "react-native";
import { OrderContext } from './OrderContext';
import { Dropdown } from "react-native-element-dropdown";


export default function Order(props){
    const { orders, setOrders } = useContext(OrderContext);
    const [type, setType] = useState('');
    const [size, setSize] = useState('');
    const [amount, setAmount] = useState('');

    const datatype = [
        { label: 'Pepperoni', value: 'Pepperoni' },
        { label: 'Hawaiana', value: 'Hawaiana' },
        { label: 'Four Cheeses', value: 'Four Cheeses' },
        { label: 'Vegetariana', value: 'Vegetarian' },
        { label: 'Mexicana', value: 'Mexicana' }
    ]
    const datasize=[
        {label:'Extra Big',value:'Extra big'},
        {label:'Big',value:'Big'},
        {label:'Medium',value:'Medium'},
        {label:'Small',value:'Small'},
    ]
    const dataamount=[
        {label:'1',value:'1'},
        {label:'2',value:'2'},
        {label:'3',value:'3'},
        {label:'4',value:'4'},
        {label:'5',value:'5'},
        {label:'6',value:'6'},
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
        <ImageBackground  style={styles.backgroundImage} source={require('../../assets/3.png')}>
        <SafeAreaView>
            
            <View style={styles.container}>
            <Dropdown
                style={styles.dropdown}
                data={datatype}
                labelField="label"
                valueField="value"
                placeholder="Select a type of pizza"
                value={type}
                onChange={item => setType(item.value)}
            />
            <Dropdown
                style={styles.dropdown}
                data={datasize}
                labelField="label"
                valueField="value"
                placeholder="Select a pizza size"
                value={size}
                onChange={item => setSize(item.value)}
            />
            <Dropdown
                style={styles.dropdown}
                data={dataamount}
                labelField="label"
                valueField="value"
                placeholder="Select a amount"
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
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // Ajusta la imagen para cubrir toda la pantalla
        justifyContent: 'center', 
        height: '100%'
      },
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
        marginBottom: 30,
        marginTop:10,
        alignItems:'center'
      },
      container:{
         alignItems:'center',
         marginTop:190
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
         marginTop:40
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
        marginTop:70,
        alignItems:'center',
        marginEnd:-280
      }
});




