import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
        wrapper:{
            height:42,
           //borderColor: colors.grey,
            borderWidth: 1,
            borderRadius: 4,
           //flexDirection: 'row',
            paddingHorizontal: 5,
           // alignItems: 'center',
            marginTop: 5,
        },

        inputContainer:{
            paddingVertical: 12,
        },

        textInput:{
           // backgroundColor: 'green',
            flex: 1,
            width: '100%',
        },

        
       error:{
           color: colors.danger,
           paddingTop: 4,
           fontSize: 12,
        },
});

