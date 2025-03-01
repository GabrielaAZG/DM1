import React from "react";
import {View, Text, TextInput, Button, SafeAreaView, StyleSheet} from "react-native";

export default function Customer(props){
    
    const {navigation} = props;

    const goToMenu= () =>{
        navigation.navigate("Menu");
    }

    const goToOrders= () =>{
        navigation.navigate("Orders");
    }

    const goToLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }], 
        });
    }
    return(
        <SafeAreaView>
            <Text>CUSTOMER</Text>

            <Button title="Menu" onPress={goToMenu}/>
            <Button title="Order" onPress={goToOrders}/>
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




