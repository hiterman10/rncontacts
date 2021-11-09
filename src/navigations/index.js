import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/reducers/Provider';

const AppNavContainer = () => {
    // const {isLoggedIn} = true;

    const{ 
      authState: {isLoggedIn},
    } = useContext(GlobalContext);  
    
    console.log('isLoggedIn :>> ', isLoggedIn);

    return(
   <NavigationContainer >
      { isLoggedIn ? <DrawerNavigator/> : <AuthNavigator/>} 
    </NavigationContainer >
    );
};     

export default AppNavContainer;  


// screeens>>> Home>>> Drawer
// screens>>> Auth >>>   