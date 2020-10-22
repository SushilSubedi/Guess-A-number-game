import React from 'react';
import { Text,View,StyleSheet } from 'react-native';

const NumbericContest = (props) => {
    return(
        <View style={{...styles.NumbericContest,...props.style}}>
            <Text style={styles.output}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    NumbericContest: {
        borderWidth:2,
        borderColor: '#2ae8e8',
        borderRadius: 10,
        padding:10,
        fontSize:18
    }
})

export default NumbericContest;