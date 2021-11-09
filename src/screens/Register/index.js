import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import {Text,View} from 'react-native';
import RegisterComponent from '../../components/SignUp/index';
import envs from '../../config/env';
import { LOGIN } from '../../constants/routeName'; 
import register, { clearAuthState } from '../../context/actions/auth/register';
import axios from '../../helpers/axiosInterceptor';
import {GlobalContext} from '../../context/reducers/Provider';
import axiosInstance from '../../helpers/axiosInterceptor';
import { NavigationHelpersContext } from '@react-navigation/native';

const Register = () => {
    const [form, setFrom] = useState({});
    const {navigate }= useNavigation();
    const [errors, setErrors] = useState({});
    const {
        authDispatch,
        authState: {error, loading, data},
    } = useContext(GlobalContext);

     // console.log('form :>>>> ', form );

      //console.log('authState :>>>> ', authState );

   /*  React.useEffect(()=>{ 
        axiosInstance.get('/contacts').catch((err)=>{
            console.log('err', err.response);
        });  
    }, []);  */
   
   /*  const {BACKEND_URL} = envs;
    console.log('BACKEND_URL :>> ', BACKEND_URL );
    console.log('__DEV__', __DEV__);  */


      React.useEffect(()=>{
        if(data){
            navigate(LOGIN);
        }
    }, [data]);

    useFocusEffect(
        React.useCallback(() => {
   //  console.log('111 :>>', 111);
          return()=> {
             // console.log('2222', 2222);
          if(data || error) {
              clearAuthState()(authDispatch);
          } 

          }
        }, [data, error]),
      );


    const onChange=({name,value}) => {
        setFrom({...form, [name]: value});

    
   /*  console.log('error:>>', error);
    console.log('data', data); */

        if(value !== ''){

            if(name ==='password'){

                if(value.length < 6){
                    setErrors((prev)=>{
                        return(
                            {...prev,[name]:'This field needs minimum 6 characters'}
                            )
                    }); 

                }else{
                    setErrors((prev)=>{
                        return(
                            {...prev,[name]:null}
                            )
                    });
                }

            }else{ 
             setErrors(prev=>{
                return(    
                    {...prev,[name]:null}
                    )
            }); 
        }
        }else{
            setErrors(prev=>{
                return(
                    {...prev,[name]:'This field is required'}
                    )
            })
        }
    };

    const onSubmit = () =>{
        //Validations des enregistrements

// console.log('444 :>>' , 444);

        if(!form.userName){ 
            setErrors(prev=>{
                return(
                    {...prev,userName:"Please add a username"}
                    )
            })
        }
        if(!form.firstName){ 
            setErrors(prev=>{
                return(
                    {...prev,firstName:"Please add a first name"}
                    )
            })
        }
        if(!form.lastName){ 
            setErrors(prev=>{
                return(
                    {...prev,lastName:"Please add a last name"}
                    )
            })
        }
        if(!form.email){ 
            setErrors(prev=>{
                return(
                    {...prev,email:"Please add a email"}
                    )
            })
        }if(!form.password){ 
            setErrors(prev=>{
                return(
                    {...prev,password:"Please add a password"}
                    )
            });
        }


        if(
            Object.values(form).length === 5 &&
            Object.values(form).every((item) => item.trim().length>0) &&
            Object.values(errors).every((item)=> item)
            ) {
              //  console.log('22222', 22222)  
                
                 register(form)(authDispatch);
        }

    };

    return(
        <RegisterComponent 
            onSubmit = {onSubmit}
            onChange = {onChange}
            form = {form}
            errors = {errors}
            error = {error}
            loading = {loading}  

        />  
    );
};


export default Register;
