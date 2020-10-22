import React from 'react';
import { View,Text,StyleSheet } from 'react-native';


const GameOverScreen = () => {
    return (
        <View style={styles.View}>
            <Text>Game is Over</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    View: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
})


export default GameOverScreen;