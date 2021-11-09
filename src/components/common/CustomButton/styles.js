import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
        wrapper:{
            height:42,
           //borderColor: colors.grey,
            //borderWidth: 1,
           //flexDirection: 'row',
            paddingHorizontal: 5,
           // marginTop: 5,
            marginVertical: 5,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'space-evenly'
        },
        inputContainer:{
            paddingVertical: 12,
        },
        textInput:{
            // backgroundColor: 'green',
             flex: 1,
             width: '100%',
         },
        loaderSection:{
           flexDirection: 'row',
             
        },
       error:{
          color: colors.danger,
          paddingTop: 4,
          fontSize: 12,
        },
    
});

