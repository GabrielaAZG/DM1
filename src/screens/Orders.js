import React, {useContext} from "react";
import {View, Text, TextInput, Button, SafeAreaView, Image, StyleSheet, Alert, Platform,ImageBackground} from "react-native";
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
                <Text style={styles.text}>There are no orders</Text>
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

            

            <Button title="EXIT" onPress={goToLogin} />
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
        color:'white',
        fontSize:20
    }
});




