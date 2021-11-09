import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
       logoImage:{
        width: 300,
        height: 100,
        alignSelf: 'center', //pour centrer uune image
        marginTop: 50,
           
        },
        title:{
            fontSize: 30,
            textAlign: 'center',
            paddingTop: 50,
             fontWeight: '500',  
            },
        subTitle:{
                fontSize: 23,
                textAlign: 'center',
                paddingVertical: 20,
                 fontWeight: '500',  
             },
             
        form: {
            paddingTop: 20, 
        },

        createSection: {
          // flexDiretcion: 'row',
     
        },

        linkBtn: {
            paddingLeft: 17, 
            color: colors.primary,
            fontSize: 20, 
            textAlign: 'center'
           
        },
        infoText: {
            fontSize: 20, 
            textAlign: 'center'
        },
        
});

