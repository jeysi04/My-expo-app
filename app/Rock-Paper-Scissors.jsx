import React, { use, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';


function getComputerMove() {
  const compChoice = Math.random();
  let compMove;
  if (compChoice >= 0 && compChoice < 1 / 3) {
        compMove = "Rock";
  } else if (compChoice >= 1 / 3 && compChoice < 2 / 3) {
        compMove = "Paper";
  } else if (compChoice >= 2 / 3 && compChoice < 1) {
        compMove = "Scissors";
  }
  return compMove;
}

export default function RockPaperScissorScreen() {
  const [compMove, setCompMove] = useState('');
  const [result, setResult] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [choice, setChoice] = useState('');


  return (
    <View style={styles.container}>

      {setShowResult &&(
        <View style={styles.winner}>
          
          <View styles={styles.nameComp}> 
            <Text style={[styles.bold, {color: '#F8F8FF'}]}>Computer</Text> 
          </View>
          
          <View style={styles.messageComp}> 
            <Text style={{color: '#4A4A4A'}}> I pick {compMove}. </Text> 
          </View>

        <View style={styles.userMContainer}> 
          <View style={styles.nameUser}> 
            <Text style={[styles.bold,  {color: '#F8F8FF'}]}>User</Text> 
          </View>

          <View style={styles.messageUser}> 
            <Text style={{color: '#4A4A4A'}}> I pick {choice}. </Text> 
          </View>
        </View>

        <View style={styles.resultBox}> 
          <Text style={styles.result}>{result}!</Text> 
        </View>
        </View>
      )}
      
      <View style = {styles.buttonRow}>
          <TouchableOpacity 
                              style={styles.button}
                              onPress={() => {
                                setChoice('Rock');
                                const compMove = getComputerMove();
                                setCompMove(compMove);

                                if (compMove === 'Rock'){
                                    setResult('It\'s a tie');
                                } else if (compMove === 'Paper') {
                                    setResult('You lose');
                                } else if (compMove === 'Scissors') {
                                    setResult('You win');
                                }

                                setShowResult(true);
                              }}
                          >
                              <Text style={styles.titleButton}> Rock </Text> 
                              
            </TouchableOpacity>

            <TouchableOpacity 
                              style={styles.button}
                              onPress={() => {
                                setChoice('Paper');
                                const compMove = getComputerMove();
                                setCompMove(compMove);

                                if (compMove === 'Rock'){
                                    setResult('You win');
                                } else if (compMove === 'Paper') {
                                    setResult('It\'s a tie');
                                } else if (compMove === 'Scissors') {
                                    setResult('You lose');
                                }

                                setShowResult(true);
                              }}
                          >
                              <Text style={styles.titleButton}> Paper </Text> 
            </TouchableOpacity>

            <TouchableOpacity 
                              style={styles.button}
                              onPress={() => {
                                setChoice('Scissors');
                                const compMove = getComputerMove();
                                setCompMove(compMove);

                                if (compMove === 'Rock'){
                                    setResult('You lose');
                                } else if (compMove === 'Paper') {
                                    setResult('You win');
                                } else if (compMove === 'Scissors') {
                                    setResult('It\'s a tie');
                                }

                                setShowResult(true);
                              }}
                          >
                              <Text style={styles.titleButton}> Scissor </Text> 
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8FF',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  buttonRow: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },

  button: {
    height: 70,
    width: '95%',
    backgroundColor: '#C7B8EA',
    border: 'none',
    borderRadius: 10,
    font: 'Garamond',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  winner: {
    marginBottom: 20,
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
    backgroundColor: '#5E4B8B',
    height: 365,
    width: '90%',
    borderRadius: 20,
    padding: 20,
    paddingTop: 25,
    marginTop: -70
  },

  titleButton: { 
    color: '#F8F8FF',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    fontWeight: 'bold',
  },

  bold: {
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    fontSize: 18
  },

  nameComp: {
    flex: 1,
    alignItems: 'flex-start', 
    justifyContent: 'center',
    marginTop: 60,
    color: '#F8F8FF'
  },

  nameUser: {
    marginTop: 50,
    marginBottom: 5,

  },

  messageComp: {
    height: 60,
    width: 200,
    marginTop: 5,
    backgroundColor: '#F8F8FF',
    borderRadius: 20,
    padding: 20
  },

  messageUser: {
    height: 60,
    width: 200,
    backgroundColor: '#F8F8FF',
    borderRadius: 20,
    padding: 20
  },

  userMContainer: {
    alignItems: 'flex-end',
  },

  resultBox: {
    height: 60,
    width: '100%',
    backgroundColor: '#F8F8FF',
    borderRadius: 20,
    padding: 20,
    marginTop: 30
  },

  result: {
    color: '#4A4A4A'
  }
});