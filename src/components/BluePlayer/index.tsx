import React, {useState} from 'react';
import { View, Text } from 'react-native';

import chandra from '../../assets/imgs/chandra.jpg';

import { Container, ProfileImage, LifeCounter, Life, PlusNMinus, BoxPlusnMinus, TextPlusNMinus, LifeText} from './styles';

import TwoPlayerDice from '../../components/TwoDices';
import BigDice from '../BigDice';

interface Props {
  playerBlueChoice: {
    bg: string;
    mini: string;
    color: string
  }
  upSide?: boolean
}

const PlayerOne: React.FC<Props> = (props) => {
  const [actualLife, setActualLife] = useState(20);
  const [diceValue, setDiceValue] = useState(0);
  const [showDices, setShowDices] = useState(true);
  const [dice, setDice] = useState('');

  function getDice(newDice: string){
    setDice(newDice);

    if(newDice === 'D20'){
      const newValue = Math.floor(Math.random() * 20) + 1;
      setDiceValue(newValue);
    }
    if(newDice === 'D4'){
      const newValue = Math.floor(Math.random() * 4) + 1;
      setDiceValue(newValue);
    }
    if(newDice === 'D6'){
      const newValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(newValue);
    }
    if(newDice === 'D10'){
      const newValue = Math.floor(Math.random() * 10) + 1;
      setDiceValue(newValue);
    }
    if(newDice === 'D12'){
      const newValue = Math.floor(Math.random() * 12) + 1;
      setDiceValue(newValue);
    }
    if(newDice === 'D8'){
      const newValue = Math.floor(Math.random() * 8) + 1;
      setDiceValue(newValue);
    }
    if(newDice === 'COIN'){
      const newValue = Math.floor(Math.random() * 2);
      setDiceValue(newValue);
    }

    setShowDices(false);
  }

  function trueDice(){
    setShowDices(true)
  }

  return (
      <Container source={props.playerBlueChoice.bg} blurRadius={5} upSide={props.upSide}>
        <LifeCounter >
          <ProfileImage source={props.playerBlueChoice.mini} />
          <Life>
            <LifeText>{actualLife}</LifeText>
          </Life>
        </LifeCounter>

        <PlusNMinus>
          <BoxPlusnMinus onPress={() => setActualLife(actualLife + 1)}>
            <TextPlusNMinus>+</TextPlusNMinus>
          </BoxPlusnMinus>
          
          <BoxPlusnMinus onPress={() => setActualLife(actualLife - 1)}>
            <TextPlusNMinus>-</TextPlusNMinus>
          </BoxPlusnMinus>          
        </PlusNMinus>

        {showDices ? (<TwoPlayerDice getDice={getDice} color={props.playerBlueChoice.color} />) : <BigDice dice={dice} color={props.playerBlueChoice.color} trueDice={trueDice} diceValue={diceValue} />}
      </Container>
  );
}

export default PlayerOne;