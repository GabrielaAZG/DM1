import React, {useState} from "react";
import {View, Text, TextInput, Button, SafeAreaView, Image, StyleSheet, Alert, Platform, BackHandler} from "react-native";

export default function Login(props){
    const {navigation} = props;
    const users = ["gaby", "alison", "ramon"]
    const passwords = ["contrasena1", "contrasena2", "contrasena3"]

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const authentication = () =>{
        let isAuthenticated = false;

        for (let i = 0; i < users.length; i++){
            if(user == users[i] && password == passwords[i]){
                isAuthenticated = true;
                break;
            }
        }

        if (isAuthenticated) {
            navigation.replace("Principal"); 
        } else {
            Alert.alert("ERROR", "Incorrect username or password"); 
        }
    }

    const exitApp = () => {
        if (Platform.OS === "android") {
            BackHandler.exitApp(); 
        } else {
            Alert.alert(
                "Close App",
                "To exit the app, press the home button or swipe up.",
                [{ text: "OK" }]
            );
        }
    };


    return(
        <SafeAreaView>
            <Text>WELCOME TO PIZZERIA TECNM</Text>
            <Image 
                source={require('../../assets/pizza.png')}
                style={styles.image}
            />
            <Text>LOGIN</Text>
            <TextInput placeholder="USER" value= {user} onChangeText={setUser}/>
            <TextInput placeholder="PASSWORD" value= {password} onChangeText={setPassword}/>
            <Button title="LOGIN" onPress={authentication}/>
            <Button title="EXIT" onPress={exitApp}/>
            
            
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




