import 'react-native-gesture-handler';
import React from 'react';
import {Text,TextInput,View,Image,TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
//import {TouchableOpacity} from 'react-native-gesture-handler' 
import Input from '../common/Input';
import styles from '../Login/styles';
import { useNavigation } from '@react-navigation/native';
import {LOGIN} from '../../constants/routeName'
import Message from '../common/Message';




const RegisterComponent = ({
   onSubmit,
   onChange,
   form,
   loading,
   error,
   data,
   errors, 
}) => { 

  const {navigate} = useNavigation(); //useNavigation est un crochet qui donne accès à la navigation objet

 
    return(
      
        <Container>
        {/* probleme de ici au niveau de Input et des variables et surtout lorqu'on a mis la variable CustomButton*/}
        
        <Image width={ 70} height= {70}
          
          source={ require('../../assets/images/logo_cecic1.png')
           // uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }
          style={styles.logoImage }/>
    <View> 
              <Text style={styles.title} >Welcome Dear Customer</Text>
              <Text style={styles.subTitle} >Create a free account</Text>

            <View  style={styles.form}>
              {error?.error && (
                 <Message retry danger retryFn = {onSubmit} message={error?.error} />       
              )}
              <Input 
                   label="Username"
                   iconPosition="right"
                   placeholder="Enter Username"
                   error= {errors.userName || error?.username?.[0]}
                   onChangeText={(value)=>{
                    onChange({name: 'userName', value })
                  }}
                       // onChangeText={(text) => onChangeText(text)}  
                      //  value={value}
                    // icon={<Text>HIDE</Text> }
                    // style={{height: 40, borderColor:'gray', borderWidth: 1}
                   // error= {'This field is required'}
                    />

             <Input 
                   label="First name" 
                   iconPosition="right"
                   placeholder="Enter First name"
                   onChangeText={(value)=>{ // obligation de remplir les champs
                     onChange({name: 'firstName', value })
                   }}

                   error= {errors.firstName || error?.first_name?.[0]}
              /> 

              <Input 
                    label="Last name"
                    iconPosition="right"
                    placeholder="Enter Last name"
                    error= {errors.lastName || error?.last_name?.[0]}
                    onChangeText={(value)=>{
                      onChange({name: 'lastName', value })
                    }}
                />
              
              <Input 
                    label="Email"
                    iconPosition="right"
                    placeholder="Enter Email"
                    error= {errors.email || error?.email?.[0]}
                    onChangeText={(value)=>{
                      onChange({name: 'email', value })
                    }}
                />
        
             <Input 
                  label="Password"
                  secureTextEntry={true} //pour hacher le password
                  icon={<Text>Show</Text> }
                  iconPosition="right"
                  placeholder="Enter Password"
                  error= {errors.password || error?.password?.[0]}
                  onChangeText={(value)=>{
                    onChange({name: 'password', value })
                  }}
                          // onChangeText={(text) => onChangeText(text)}
                            //value={value}
              />

        {console.log('error', error )} 


        <CustomButton
          loading = {loading}
          onPress = {onSubmit}
          disabled = {loading}
          primary 
          title="Submit" 
          //loading={true} 
         // disabled={true}
       /> 

          <View style={styles.createSection}>
             <Text style={styles.infoText}> Already have an account? </Text>  

              <TouchableOpacity 
                  onPress={()=> {
                   navigate(LOGIN);
                   }}>
             <Text style={styles.linkBtn}> Login </Text> 
            
{/*  <Text style={styles.infoText} style={styles.linkBtn} > Already have an account? Login </Text>   */}

              </TouchableOpacity>
          </View>
         </View> 
       </View>
        
        </Container> 
    );
  }

export default RegisterComponent;



