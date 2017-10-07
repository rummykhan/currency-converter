import React from 'react';
import PropTypes from 'prop-types';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const Header = ({onPress}) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image style={styles.icon} resizeMode="contain"  source={require('./logos/setting.png')}/>
        </TouchableOpacity>
    </View>
);

Header.propTypes = {
    onPress: PropTypes.func
}

export default Header;