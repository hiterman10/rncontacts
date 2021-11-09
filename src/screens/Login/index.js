import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import LoginComponent from '../../components/Login/index'
import loginUser from '../../context/actions/auth/loginUser';
import { GlobalContext } from '../../context/reducers/Provider';


const Login = () => {
    const [form, setFrom] = useState({});
    //const {navigate }= useNavigation();

    const {
        authDispatch,
        authState: {error, loading},
    } = useContext(GlobalContext);

    const onSubmit = ()=> {
        if(form.userName && form.password){
            console.log('55 :>>', 55);
            loginUser(form)(authDispatch);

        }
    };

    const onChange=({name,value}) => {
        setFrom({...form, [name]: value});
         };
   //  const [value, onChangeText] = React.useState(''); 
    return(
        <LoginComponent  
        onSubmit = {onSubmit}
        onChange = {onChange}
        form = {form}
        error = {error}
        loading = {loading}  
        />
    );
};


export default Login ;
