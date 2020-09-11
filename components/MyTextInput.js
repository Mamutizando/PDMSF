import React from 'react';
import { View, TextInput } from 'react-native';

const MyTextInput = (props) => {
    return (
        <View
            style={{
                marginHorizontal: 35,
                marginTop: 10,
                borderColor: '#4B0082',
                borderWidth: 2,
            }}
        >

            <TextInput 
                underlineColorAndroid="transparent"
                placeholder={props.placeholder}
                placeholderTextColor="#FF1493"
                keyboardType={props.keyboardType}
                onChangeText={props.onChangeText}
                returnKeyType={props.returnKeyType}
                numberOfLines={props.numberOfLines}
                multiline={props.multiline}
                onSubmitEditing={props.onSubmitEditing}
                style={props.style}
                blurOnSubmit={false}
                value={props.value}
            />
        </View>
    )
}

export default MyTextInput;