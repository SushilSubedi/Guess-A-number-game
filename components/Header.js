import React from 'react';
import { View,StyleSheet,Text } from 'react-native';

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.HeaderTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height:90,
        padding:36,
        backgroundColor:'#fc5603',
        alignItems:'center',
        justifyContent:'center'
    },
    HeaderTitle: {
        color:'white',
        fontSize:18,
        marginVertical:10,
        // justifyContent:'center'
    }

})

export default Header;