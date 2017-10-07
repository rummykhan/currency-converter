import React from 'react';
import {Container} from '../components/containers/index';
import {Logo} from '../components/Logo/index';
import {TextInputWithButton} from '../components/TextInput/index'
import {StatusBar, StyleSheet} from 'react-native';
import {Constants} from 'expo';
import {ClearButton} from '../components/Button/index';
import LastConverted from '../components/Text/LastConverted';
import Header from '../components/Header/Header';


const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'PKR';

const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.4';

const TEMP_CONVERSION_RATE = .79;
const TEMP_CONVERSION_DATE = new Date();

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    handlePressBaseCurrency() {

    }

    handlePressQuoteCurrency() {

    }

    handleTextChange(text) {
        console.log(text);
    }

    onSwapCurrencies() {

    }

    handleOptionsPress(){
        alert('Handle options pressed');
    }

    render() {
        return (
            <Container styles={styles.container}>
                <StatusBar translucent={false} barStyle='light-content'/>

                <Header onPress={this.handleOptionsPress.bind(this)}/>

                <Logo/>

                <TextInputWithButton
                    defaultValue={TEMP_BASE_PRICE}
                    buttonText={TEMP_BASE_CURRENCY}
                    onPress={this.handlePressBaseCurrency.bind(this)}
                    editable={true}
                    keyboardType="numeric"
                    onChangeTex={this.handleTextChange.bind(this)}/>

                <TextInputWithButton
                    value={TEMP_QUOTE_PRICE}
                    buttonText={TEMP_QUOTE_CURRENCY}
                    onPress={this.handlePressQuoteCurrency.bind(this)}
                    editable={false}/>

                <LastConverted
                base={TEMP_BASE_CURRENCY}
                quote={TEMP_QUOTE_CURRENCY}
                date={TEMP_CONVERSION_DATE}
                conversionRate={TEMP_CONVERSION_RATE} />

                <ClearButton text='Reverse Currencies'
                             onPress={this.onSwapCurrencies.bind(this)}/>
            </Container>)

    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight
    }
});


export default Home;