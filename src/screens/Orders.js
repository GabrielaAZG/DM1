import React, {useContext} from "react";
import {View, Text, TextInput, Button, SafeAreaView, Image, StyleSheet, Alert, Platform,ImageBackground,TouchableOpacity} from "react-native";
import { OrderContext } from './OrderContext';

export default function Orders({navigation}){
    
    const { orders } = useContext(OrderContext);

    
    //const {navigation} = props;

    const goToLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }], 
        });
    }
    return(
        <ImageBackground style={styles.backgroundImage} source={require('../../assets/4.png')}>
        <SafeAreaView>
            <View style={styles.orderItem}>
            {orders.length === 0 ? (
                <Text style={styles.text}> There are no orders</Text>
            ) : (
                orders.map((order, index) => (
                    <View key={index} style={styles.orderItem}>
                        <Text>Type = {order.type}</Text>
                        <Text>Size = {order.size}</Text>
                        <Text>Amount = {order.amount}</Text>
                    </View>
                ))
            )}
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
    orderItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: "white",
        borderRadius: 5,
        color: 'white'
    },
    text:{
        color:'black',
        fontSize:20
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
        marginTop:10,
        alignItems:'center',
        marginEnd:-280
      },
      container:{
        justifyContent:'space-around',
        alignItems:'center', 
        paddingBottom:10,
        marginTop:10
    },
    Textbutton:{
        color:'black',
        fontSize:16
      },
});




