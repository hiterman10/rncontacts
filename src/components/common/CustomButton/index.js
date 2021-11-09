import React from 'react';
import {ActivityIndicator, Text, TextInput, TouchableOpacity, View} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CustomButton = ({
    title,
    secondary,
    primary,
    danger,
    disabled,
    loading,
    onPress,
   // ...props
}) => {

  //const [focused, setFocused] = React.useState(false);

  const getBgColor = () => { 

    if(disabled){

        return colors.grey;
    }

    if(primary){

        return colors.primary;
    }

    if(danger){ 
        return colors.danger;
    }
    
    if(secondary){
        return colors.secondary;
    }
};

return(
  <TouchableOpacity
        disabled={disabled} 
        onPress={onPress}
        style={[//styles.inputContainer,
                 styles.wrapper,
                {backgroundColor:getBgColor()} 
               ]}
        >  
        <View style={[styles.loaderSection]}>
        {loading && <ActivityIndicator color={primary ? colors.secondary : colors.primary} />}
            {title && (
                 <Text style={{color: disabled ? 'black' : colors.white, paddingLeft:loading ? 5 : 0,}}> {title} </Text> 
                  )} 
        </View>

  </TouchableOpacity>
);
};

export default CustomButton;