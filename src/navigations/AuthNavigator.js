import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LOGIN, REGISTER } from '../constants/routeName';
import Login from '../screens/Login/index';
import Register from '../screens/Register/index';
// import { registerRootComponent } from 'expo';


const AuthNavigator = () => {
    const AuthStack = createStackNavigator()
    return(
   <AuthStack.Navigator screenOption={{headerShown: false}}> 
       <AuthStack.Screen name={LOGIN} component={Login}/>
       <AuthStack.Screen name={REGISTER} component={Register}/>
    </AuthStack.Navigator >
    );
};

export default AuthNavigator ;