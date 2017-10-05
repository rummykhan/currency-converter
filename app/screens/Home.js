import React, {Component} from 'react';
import {Container} from '../components/containers/index';
import {Logo} from '../components/Logo/index';
import {TextInputWithButton} from '../components/TextInput/index'
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Constants} from 'expo';


const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'PKR';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    handlePressBaseCurrency() {

    }

    handlePressQuoteCurrency() {

    }

    render() {
        return (
            <Container styles={styles.container}>
                <StatusBar translucent={false} barStyle='light-content'/>
                <Logo/>

                <TextInputWithButton
                    buttonText={TEMP_BASE_CURRENCY}
                    onPress={this.handlePressBaseCurrency.bind(this)}
                    editable={true}/>

                <TextInputWithButton
                    buttonText={TEMP_QUOTE_CURRENCY}
                    onPress={this.handlePressQuoteCurrency.bind(this)}
                    editable={false}/>

            </Container>)

    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight
    }
});


export default Home;