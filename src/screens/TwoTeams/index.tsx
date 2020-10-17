import React from 'react';
import {SafeAreaView} from 'react-native';

import BluePlayer from '../../components/BluePlayer'
import planesWalkers from '../../planesWalkers'
import Score from '../../components/TwoScore';

import { Container, PlayerTwo } from './styles';



interface Props {
  route: {
    params: {
      selections: string[]
    }
  }
}

const TwoTeams: React.FC<Props> = (props) => {

  return (
      <Container>
        <BluePlayer playerBlueChoice={planesWalkers[props.route.params.selections[0]]}  upSide/>
        <Score />
        <BluePlayer  playerBlueChoice={planesWalkers[props.route.params.selections[1]]}/>
      </Container>
  )
}

export default TwoTeams;