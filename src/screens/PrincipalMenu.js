import React from "react";
import {View, Text, TextInput, Button, SafeAreaView, Image, StyleSheet, Alert, Platform, BackHandler} from "react-native";

export default function PrincipalMenu(props){
    //console.log(props);
    const {navigation} = props;
    

    const goToCustomer = () =>{
        navigation.navigate("Customer");
    }

    const goToOrder = () =>{
        navigation.navigate("Order");
    }

    const goToLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }], 
        });
    }
    
    return(
        <SafeAreaView>
            <Text>PRINCIPAL MENU</Text>
            
            <Button title="Employee" onPress={goToOrder}/>
            <Button title="Customer" onPress={goToCustomer}/>
            <Button title="US" onPress={() => console.log("Enviado")}/>
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




