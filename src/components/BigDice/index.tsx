import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';

import Dice20 from '../Dices/Dice20';
import Dice4 from '../Dices/Dice4';
import Dice10 from '../Dices/Dice10';
import Dice12 from '../Dices/Dice12';

import { CloseButtom, CloseBox, Dice20Text, DiceBox, DefaultText, Dice6, Coin, Dice4Text, Dice10Text, Dice12Text } from './styles';

interface Props {
    dice: string;
    trueDice: () => void;
    diceValue: number;
    color: string;
}

const BigDice: React.FC<Props> = ({dice, trueDice, diceValue, color}) => {
  return(<>
  <TouchableWithoutFeedback onPress={() => trueDice()}>
    <CloseBox>
      <CloseButtom>X</CloseButtom>
    </CloseBox>
  </TouchableWithoutFeedback>

  {dice === "D20" && (
    <DiceBox>
      <Dice20 color={color} diceSize={120} />
      <Dice20Text>{diceValue}</Dice20Text>
    </ DiceBox>    
  )}
  
  {dice === "D12" && (
    <DiceBox>
      <Dice12 color={color} diceSize={120} />
      <Dice12Text>{diceValue}</Dice12Text>
    </ DiceBox>    
  )}

  {dice === "D10" && (
    <DiceBox>
      <Dice10 color={color} diceSize={120} color={color} />
      <Dice10Text>{diceValue}</Dice10Text>
    </ DiceBox>    
  )}

  {dice === "D6" && (
    <Dice6 color={color}>
      <DefaultText>{diceValue}</DefaultText>
    </ Dice6>    
  )}

  {dice === "COIN" && (
    <Coin color={color}>
      <DefaultText>{diceValue}</DefaultText>
    </Coin>
  )}

  {dice === "D4" && (
    <DiceBox>
      <Dice4 color={color} diceSize={120} />
      <Dice4Text>{diceValue}</Dice4Text>
    </ DiceBox>
  )}

  {dice === "D8" && (
    <DiceBox>
      <Dice4 color={color} diceSize={120} />
      <Dice4Text>{diceValue}</Dice4Text>
    </ DiceBox>
  )}
  </>)
}

export default BigDice;