import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "../screens/Login";
import PrincipalMenu from "../screens/PrincipalMenu";
import Customer from "../screens/Customer";
import Order from "../screens/Order";
import Menu from "../screens/Menu";
import Orders from "../screens/Orders";

const Stack = createNativeStackNavigator();

export default function NavigationStack(){
    return(
        //Maneja las navegaciones
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="HOME" component={PrincipalMenu}/> 
            <Stack.Screen name="Customer" component={Customer}/> 
            <Stack.Screen name="Order" component={Order}/> 
            <Stack.Screen name="Menu" component={Menu}/> 
            <Stack.Screen name="Orders" component={Orders}/> 
        </Stack.Navigator>

    );
}
