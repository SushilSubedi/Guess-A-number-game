import React from 'react';
import { StyleSheet, View } from 'react-native';


const Card = (props) => {
    return(
        <View style={{...styles.card,...props.style}}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        elevation:4,
        backgroundColor:'white',
        marginVertical:10,
    },
})

export default Card;