import React, {useState} from "react";
import {View, Text, TextInput, Button, SafeAreaView, Image, StyleSheet, Alert, Platform, BackHandler,TouchableOpacity, ImageBackground} from "react-native";

export default function US(props){
    const {navigation} = props;
    const goToLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }], 
        });
    }
    return(
        <ImageBackground style={styles.backgroundImage} source={require('../../assets/8.png')}>
        <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.title}>Get to Know Us</Text>
                    <Text style={styles.text}>
                    where the passion for pizza meets the freshest and 
                    highest quality ingredients. Our mission is to offer 
                    you an unparalleled culinary experience, 
                    combining tradition and creativity in every bite.
                    </Text>
                    <Text style={styles.texth}>Monday to Friday: 11:00 AM - 10:00 PM</Text>
                    <Text style={styles.texth}>Saturday: 12:00 PM - 11:00 PM</Text>
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
      text:{
        fontSize:20,
        color:'white',
        marginTop:10,
        alignItems:'center',
        marginLeft:40,
        marginRight:40,
        justifyContent:'center'
      },
      container:{
        marginTop:-50,
        alignItems:'center'
      },
      title:{
        fontSize: 60,
        fontFamily:'Impact',
        alignItems:'center',
        color:'orange',
        fontWeight:'bold'
    },
    texth:{
        fontSize:25,
        color:'white',
        marginTop:30,
        alignItems:'center',
        marginLeft:15,
        marginRight:15,
        justifyContent:'center',
        fontFamily:'Impact'
    }
    });