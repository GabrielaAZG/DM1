import React from "react";
import {View, Text, TextInput, Button, SafeAreaView, Image, StyleSheet, Alert, Platform,ImageBackground,TextBase,TouchableOpacity} from "react-native";

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
         <ImageBackground  style={styles.backgroundImage} source={require('../../assets/6.png')}>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>M E N U</Text>
                </View>
                 
                <View style={styles.container2}>
                <Text style={styles.textarea}>Pepperoni......................$179.00 MXN</Text>
                <Text style={styles.textarea}>Hawaiana......................$199.00 MXN</Text>
                <Text style={styles.textarea}>Cuatro Quesos..............$219.00 MXN</Text>
                <Text style={styles.textarea}>Vegetariana..................$199.00 MXN</Text>
                <Text style={styles.textarea}>Mar y Tierra.................$289.00 MXN</Text>
                <Text style={styles.textarea}>Mexicana.....................$219.00 MXN</Text>
                <Text style={styles.textarea}>BBQ Chicken................$229.00 MXN</Text>
                <Text style={styles.textarea}>Pizza de Pesto...............$229.00 MXN</Text>
                
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
    container:{
        alignItems:'center',
        marginTop:-200
    },
    title:{
        fontSize: 60,
        fontFamily:'Impact',
        alignItems:'center',
        color:'white',
        fontWeight:'bold'

    },
    textarea :{
       fontSize:20
    },
    container2:{
        marginTop:10,
        borderBlockColor:'white',
        borderRadius:3,
        borderWidth:1,
        borderColor: '#ccc',
        borderRadius:5,
        padding:10,
        width:350,
        height: 250,
        fontSize: 20,
        justifyContent:'center',
        backgroundColor:'white',

    },
    buttoncontainer:{
        alignItems:'center',
         marginTop:20
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
        marginTop:10,
        alignItems:'center',
        marginEnd:-280
      }


});




