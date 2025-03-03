import React from "react";
import {View, Text, TextInput, Button, SafeAreaView, StyleSheet,ImageBackground,TouchableOpacity} from "react-native";

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
        <ImageBackground style={styles.backgroundImage} source={require('../../assets/9.png')}>
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={goToMenu}>
                    <Text style={styles.Textbutton}>M E N U</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={goToOrders}>
                    <Text style={styles.Textbutton}>O R D E R S</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.container} >
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
    container:{
        justifyContent:'space-around',
        alignItems:'center', 
        paddingBottom:10,
        marginTop:100
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 45,
        borderRadius: 100,
        borderWidth: 1, // Ancho del borde
        borderColor: 'orange', // Color del borde
        shadowColor: '#000', // Sombra para mejorar visibilidad en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        marginTop:100,
        alignItems:'center',
        marginEnd:10
      },
      Textbutton:{
        color:'black',
        fontSize:16
      },
      buttonexit:{
        backgroundColor: 'white',
        paddingVertical: 29,
        paddingHorizontal: 15,
        borderRadius: 100,
        borderWidth: 0, // Ancho del borde
        borderColor: 'black', // Color del borde
        shadowColor: '#000', // Sombra para mejorar visibilidad en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        marginTop:200,
        alignItems:'center',
        marginEnd:-280
      }
});




