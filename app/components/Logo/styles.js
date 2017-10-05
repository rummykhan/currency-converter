import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const width = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
    container: {
        alignItems: 'center'
    },
    containerImage: {

    },
    text:{
        fontWeight: '600',
        fontSize: 20,
        letterSpacing: -0.5,
        marginTop: 15,
        color: 'white'
    }
});