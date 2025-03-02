import React from "react";
import {View, Text, TextInput, Button, SafeAreaView, Image, StyleSheet, Alert, Platform, BackHandler,TouchableOpacity} from "react-native";

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
            
            <Text>HOME</Text>

            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={goToOrder}>
                    <Text style={styles.buttonText}>Employee</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={goToCustomer}>
                    <Text style={styles.buttonText}>Customer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => console.log("Enviado")}>
                    <Text style={styles.buttonText}>US</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={goToLogin}>
                    <Text style={styles.buttonText}>Exit</Text>
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
    container:{
        justifyContent:'space-around',
        alignItems:'center', 
        paddingBottom:10
    },
    button: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 35,
        borderRadius: 5,
        borderWidth: 0, // Ancho del borde
        borderColor: 'black', // Color del borde
        shadowColor: '#000', // Sombra para mejorar visibilidad en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        marginTop:100,
        alignItems:'center',
        marginEnd:30
      },
      buttonText: {
        color: 'white',
        fontSize: 25,
      }
});




