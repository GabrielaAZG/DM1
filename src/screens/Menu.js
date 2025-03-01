import React from "react";
import {View, Text, TextInput, Button, SafeAreaView, Image, StyleSheet, Alert, Platform} from "react-native";

export default function Menu(props){
    //console.log(props);
    const {navigation} = props;

    const goToLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }], 
        });
    }
    return(
        <SafeAreaView>
            <Text>MENU</Text>

            <Text>....</Text>
            
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




