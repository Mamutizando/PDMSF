import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = (props) => {
    return (
        <TouchableOpacity style={ styles.button } onPress={props.onClick}>
            <Text style={ styles.text }>{ props.title }</Text>
        </TouchableOpacity>    
    );
};

const styles = StyleSheet.create ({
    button: {
        alignItems: 'center',
        backgroundColor: '#4B0082',
        color: '#C0C0C0',
        padding: 10,
        marginTop: 16,
        marginHorizontal: 35
    },
    text: {
        color: '#00FFFF'
    }
})

export default MyButton;