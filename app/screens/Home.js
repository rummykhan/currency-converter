import React from 'react';
import {Container} from '../components/containers/index';
import {Logo} from '../components/Logo/index';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Constants} from 'expo';


const Home = () => (
    <Container styles={styles.container}>
        <StatusBar translucent={false} barStyle='light-content'/>
        <Logo/>
        <View/>
    </Container>
);

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight
    }
});


export default Home;