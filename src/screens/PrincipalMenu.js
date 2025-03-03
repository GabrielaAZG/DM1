import React from "react";
import {View, Text, TextInput, Button, SafeAreaView, Image, StyleSheet, Alert, Platform, BackHandler,TouchableOpacity,ImageBackground} from "react-native";

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
        <ImageBackground  style={styles.backgroundImage} source={require('../../assets/2.png')}>
        <SafeAreaView>

            <View style={styles.container}>
                <TouchableOpacity style={styles.buttoni} onPress={goToOrder}>
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
    
    container:{
        justifyContent:'space-around',
        alignItems:'center', 
        paddingBottom:10
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 35,
        borderRadius: 100,
        borderWidth: 2, // Ancho del borde
        borderColor: 'orange', // Color del borde
        shadowColor: '#000', // Sombra para mejorar visibilidad en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        marginTop:60,
        alignItems:'center',
        marginEnd:0
      },
      buttoni: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 35,
        borderRadius: 100,
        borderWidth: 1, // Ancho del borde
        borderColor: 'orange', // Color del borde
        shadowColor: '#000', // Sombra para mejorar visibilidad en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        marginTop:-30,
        alignItems:'center',
        marginEnd:0
      },
      buttonText: {
        color: 'black',
        fontSize: 25,
      }
});




