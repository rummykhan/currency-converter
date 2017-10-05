import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';

import styles from './styles';

const TextInputWithButton = (props) => {

    const {onPress, editable = true, buttonText} = props;

    const containerStyles = [styles.container];
    if (!editable) {
        containerStyles.push(styles.containerDisabled);
    }

    return (
        <View style={containerStyles}>
            <TouchableHighlight style={styles.buttonContainer} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border}/>
            <TextInput style={styles.textInput} {...props} />
        </View>
    )

};

TextInputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool
};

export default TextInputWithButton;