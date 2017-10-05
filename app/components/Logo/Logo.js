import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Logo = () => (
    <View style={styles.container}>
        <Image source={require('./images/logo.png')} style={styles.containerImage} />
        <Text style={styles.text}>Currency Converter</Text>
    </View>
)

export default Logo;