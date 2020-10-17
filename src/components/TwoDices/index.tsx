import React, {useState} from 'react';
import { Text, TouchableWithoutFeedback} from 'react-native';

import Dice20 from '../Dices/Dice20';
import Dice4 from '../Dices/Dice4';
import Dice10 from '../Dices/Dice10';
import Dice12 from '../Dices/Dice12';

import { Container, Coin, Dice6, DiceText, DiceText4, DiceText8, DiceText10, DiceText12, DiceText20 } from './styles';

interface Props {
  getDice: (dice: string) => void;
  color: string;
}

const TwoDices: React.FC<Props> = ({getDice, color}) => {

  return (
    <Container>
      <TouchableWithoutFeedback onPress={() => getDice("COIN")}>
      <Coin width={50} color={color}>
        <DiceText>H</DiceText>
      </Coin>
      </TouchableWithoutFeedback>

      <Dice4 diceSize={55} color={color} />
      <TouchableWithoutFeedback onPress={() => getDice("D4")}>
        <DiceText4>4</DiceText4>
      </TouchableWithoutFeedback>
      

      <TouchableWithoutFeedback onPress={() => getDice("D6")}>
        <Dice6 width={50} color={color} >
          <DiceText>6</DiceText>
        </Dice6>
      </TouchableWithoutFeedback>

      <Dice4 diceSize={55} color={color} />
      <TouchableWithoutFeedback onPress={() => getDice("D8")}>
        <DiceText8>8</DiceText8>      
      </TouchableWithoutFeedback>

      <Dice10 diceSize={55} color={color} />
      <TouchableWithoutFeedback onPress={() => getDice("D10")}>
        <DiceText10>10</DiceText10>  
      </TouchableWithoutFeedback> 

      <Dice12 diceSize={55} color={color} />
      <TouchableWithoutFeedback onPress={() => getDice("D12")}>
        <DiceText12>12</DiceText12>  
      </TouchableWithoutFeedback>

      <Dice20 diceSize={60} color={color} />
      <TouchableWithoutFeedback onPress={() => getDice("D20")}>
        <DiceText20>20</DiceText20>
      </TouchableWithoutFeedback>
  
    </Container>
  );
}

export default TwoDices;