import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Score, ScoreDisplay, EndGame, StartGame } from './styles';

const TwoScore: React.FC = () => {
  const [playerOneScore, setPlayerOneScore] = useState(0)
  const [playerTwoScore, setPlayerTwoScore] = useState(0)

  return (
    <Container>
      <TouchableOpacity onPress={() => setPlayerOneScore(playerOneScore - 1)} >
        <StartGame >
          <ScoreDisplay> -1 </ScoreDisplay>
        </StartGame>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setPlayerOneScore(playerOneScore + 1)} >
        <StartGame >
          <ScoreDisplay> +1 </ScoreDisplay>
        </StartGame>
      </TouchableOpacity>

      <Score>
        <ScoreDisplay>{playerOneScore} x {playerTwoScore}</ScoreDisplay>
      </Score>

      <TouchableOpacity onPress={() => setPlayerTwoScore(playerTwoScore - 1)} >
      <EndGame >
        <ScoreDisplay> -1 </ScoreDisplay>
      </EndGame>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setPlayerTwoScore(playerTwoScore + 1)} >
      <EndGame >
        <ScoreDisplay> +1 </ScoreDisplay>
      </EndGame>
      </TouchableOpacity>
    </Container>
  )
}

export default TwoScore;