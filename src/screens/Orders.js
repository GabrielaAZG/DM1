import React, {useContext} from "react";
import {View, Text, TextInput, Button, SafeAreaView, Image, StyleSheet, Alert, Platform} from "react-native";
import { OrderContext } from './OrderContext';

export default function Orders(props){
    
    const { orders } = useContext(OrderContext);

    
    const {navigation} = props;

    const goToLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }], 
        });
    }
    return(
        <SafeAreaView>
            <Text>ORDERS</Text>

            {orders.length === 0 ? (
                <Text>There are no orders</Text>
            ) : (
                orders.map((order, index) => (
                    <View key={index} style={styles.orderItem}>
                        <Text>Type = {order.type}</Text>
                        <Text>Size = {order.size}</Text>
                        <Text>Amount = {order.amount}</Text>
                    </View>
                ))
            )}

            <Button title="EXIT" onPress={goToLogin} />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    orderItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: "#f8f8f8",
        borderRadius: 5,
    },
});




