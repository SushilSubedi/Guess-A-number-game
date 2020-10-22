// import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet,View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userName, setUserName] = useState();
  const [guessRounds,setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserName(selectedNumber);
    setGuessRounds(0);
  }

  const gameOverHandler = (numofRounds) => {
    setGuessRounds(numofRounds);
  }

  let context = <StartGameScreen onGameOver={gameOverHandler} onStartGame={startGameHandler}/>

  if(userName && guessRounds <= 0) {
    context = <GameScreen userChoice={userName}/>
  }else if(guessRounds > 0) {
    context = <GameOverScreen/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
        {context}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:1
  }
});
