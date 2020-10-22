import React,{ useState,useRef,useEffect } from 'react';
import { View,Text,StyleSheet, Button, Alert } from 'react-native';
import Card from '../components/Card';
import NumbericContest from '../components/NumbericContest';

const generateRandomBetween = (min,max,exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
   const rndNum = Math.floor(Math.random() * (max - min)) + min;
   if(rndNum === exclude) {
       return generateRandomBetween(min,max,exclude);
   }else {
       return rndNum;
   }
}

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    );

    const [round,setRound] = useState(0);

    const currentLower = useRef(1);
    const currentGreater = useRef(100);

    useEffect(() => {
       if(currentGuess === props.userChoice) {
           props.onGameOver(round);
       }
    }, [currentGuess])
    
    const nextGuessHandler = direction => {
        if(direction === 'Lower' && currentGuess < props.userChoice || direction ==='Greater' && currentGuess > props.userChoice) {
            Alert.alert("Don\'t lie", "you know this is wrong...",
            [
                { text: 'Sorry!', style:'cancel'}
            ])
            return;
        }
        if(direction === 'Lower') {
            currentGreater.current = currentGuess;
        }else {
            currentLower.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLower.current,currentGreater.current,currentGuess);
        setCurrentGuess(nextNumber);
        setRound(currRound => currRound + 1);
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumbericContest>{currentGuess}</NumbericContest>
            <Card style={styles.buttonContainer}>
                <Button title="Lower" onPress={nextGuessHandler.bind(this,'Lower')}/>
                <Button title="Greater" onPress={nextGuessHandler.bind(this,'Greater')}/>
            </Card>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10,
        marginVertical:20,
        width:300,
        maxWidth:'80%'
    }
})


export default GameScreen;