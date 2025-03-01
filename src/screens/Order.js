import React, {useState, useContext} from "react";
import {View, Text, TextInput, Button, SafeAreaView, Image, StyleSheet, Alert, Platform} from "react-native";
import { OrderContext } from './OrderContext';


export default function Order(props){
    const { orders, setOrders } = useContext(OrderContext);
    const [type, setType] = useState('');
    const [size, setSize] = useState('');
    const [amount, setAmount] = useState('');

    
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
            <TextInput placeholder="TYPE" value={type} onChangeText={setType}/>
            <TextInput placeholder="SIZE" value={size} onChangeText={setSize}/>
            <TextInput placeholder="AMOUNT" value={amount} onChangeText={setAmount} keyboardType="numeric" />
            
            
            <Button title="SAVE" onPress={sendToOrders}/>
            <Button title="EXIT" onPress={goToLogin}/>
            
            
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    image: {
        width: 125, 
        height: 125,
        marginBottom: 20

    }
});




