import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text,TextInput,View,Image,TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
//import {TouchableOpacity} from 'react-native-gesture-handler' 
import Input from '../../components/common/Input';
import styles from '../Login/styles';
import {REGISTER} from '../../../src/constants/routeName'
import Message from '../common/Message';




const LoginComponent = ({error,onChange,loading,onSubmit}) => { 
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
              <Text style={styles.subTitle} >Please login here</Text>

        <View  style={styles.form }>

            {error && !error.error &&(
              <Message 
              /* retry
              retryFn = {()=>{
                console.log('33333', 33333);
              }} */
              onDismiss = {()=> {}}
              danger
              message = 'invalid credentials'/>
              )}
            {error?.error && (
                 <Message danger onDismiss message={error?.error} />       
              )}


             
              <Input 
                        label="Username"
                        iconPosition="right"
                        placeholder="Enter Username"   
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
                        label="Password"
                        secureTextEntry={true} //pour hacher le password
                        icon={<Text>Show</Text> }
                        iconPosition="right"
                        placeholder="Enter Password"    
                        onChangeText={(value)=>{
                         onChange({name: 'password', value })
                       }}
                       // onChangeText={(text) => onChangeText(text)}
                        //value={value}
                       
                   />

        <CustomButton 
          onPress ={onSubmit} 
          disabled={loading} 
          loading={loading} 
          primary 
          title="Submit" 
                     //loading={true} 
                    // disabled={true}
       />  

          <View style={styles.createSection}>
               <Text style={styles.infoText}> Need a new account? </Text> 
              <TouchableOpacity 
                  onPress={()=> {
                   navigate(REGISTER);
                   }}>
               <Text style={styles.linkBtn}> Register </Text> 

          {/*  <Text style={styles.infoText} style={styles.linkBtn} > Need a new account? Register</Text>  */}

              </TouchableOpacity>
          </View>
         </View> 
       </View>
        
        </Container> 
    );
  }

export default LoginComponent;



