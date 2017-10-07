import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet} from 'react-native';

export default EStyleSheet.create({
    container:{
        alignItems:'center',
        borderColor: '$white',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        marginTop: 20
    },
    wrapper:{
        flexDirection:'row',
        alignItems: 'center',
        padding: 10,
    },
    icon:{
        width: 18,
        marginRight: 11,
    },
    text:{
        color: '$white',
        fontSize: 18,
        fontWeight: '300'
    }
});