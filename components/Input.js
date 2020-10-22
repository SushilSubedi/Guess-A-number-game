import React from 'react';
import { TextInput,StyleSheet } from 'react-native';

const Input = (props) => {
    return(
        <TextInput
            {...props}
            placeholder={props.placeholder}
            style={{...styles.TextInput,...props.style}}
    />
    )
}

const styles = StyleSheet.create({
    TextInput: {
        height:50,
        borderBottomWidth:1,
        fontSize:16,    
    }
})

export default Input;