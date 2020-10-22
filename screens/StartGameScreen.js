import React,{ useState } from 'react';
import { Button, StyleSheet, Text, View,TouchableWithoutFeedback,Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumbericContest from '../components/NumbericContest';


const StartGameScreen = (props) => {

    const [input,setInput] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const handleInput = (enteredText) => {
        setInput(enteredText.replace(/[^0-9]/g,''));
    }

    const resetHandler = () => {
        setInput('');
        setConfirmed(false);
    }

    const confirmHandler = () => {
        const confirmedNumber = parseInt(input);
        if(isNaN(confirmedNumber) || confirmedNumber <= 0 || confirmedNumber > 99) {

            Alert.alert("Invalid Number is placed",
            'Number has to be a number between 1 and 99',
            [{text:'Okay',style:'destructive',onPress: resetHandler}]);
            setInput('');
            return;
        }
        setConfirmed(true);
        setSelectedNumber(input);
        setInput('');
        Keyboard.dismiss()
    }

    let confirmedOutput;

    if(confirmed){
        confirmedOutput = 
        (<Card style={styles.outputContainer}>
            <Text style={styles.outputTitle}>Choose Number</Text>
            <NumbericContest style={styles.output}>{selectedNumber}</NumbericContest>
            <View style={{width:140,marginVertical:6}}><Button color="#eb346e" title="Start Game" onPress={()=>props.onStartGame(selectedNumber)}/></View>
        </Card>)
    }

    return(
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Text style={styles.Title}>Start a new Game</Text>
                <Card style={styles.InputContainer}>
                    <Text style={styles.InputText}>Select a number</Text>
                    <Input
                        placeholder="Place your number"
                        style={styles.input}
                        blurOnSubmit
                        autoCapitilize="none"
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        value={input}
                        onChangeText={handleInput}
                    />
                    <View style={styles.buttonContainer}>
                    <View style={{width:120}}><Button color="#c217ae" title="Reset" onPress={resetHandler}/></View>
                    <View style={{width:120}}><Button color="#fc5603" title="Confirm" onPress={confirmHandler}/></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
};


const styles = StyleSheet.create({
    screen: {
        flex:1,
        alignItems:'center'
    },
    Title: {
        fontSize:20,
        padding:20
    },
    InputContainer: {
        width:300,
        maxWidth:'80%',
        alignItems:'center'
    },
    InputText: {
        marginVertical:5,
    },
    input: {
        width: 'auto',
        textAlign:'center'  
    },
    buttonContainer: {
        marginVertical:10,
        width:'100%',
        flexDirection:'row',
        padding:8,
        justifyContent:'space-around'
    },
    outputContainer: {
        padding: 10,
        width:200,
        alignItems:'center'
    },
    outputTitle: {
        fontSize:20,
        fontWeight:'500',
        marginVertical:6
    },
    output: {
        fontSize: 20,
        fontWeight:'600',
        textAlign:'center',
        marginVertical:6
    }

})

export default StartGameScreen;