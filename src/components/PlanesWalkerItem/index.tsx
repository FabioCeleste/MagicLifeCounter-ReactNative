import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Container, ProfImage, Name } from './styles';
import planesWalkers from '../../planesWalkers';

interface Props {
    name: string;
    mini: string;
    selected: (planes:string) => void;
}

const PlanesWalkerFlatList: React.FC<Props> = (props) => {

  return (
    <Container>
      <TouchableOpacity onPress={() => props.selected(props.name)}>
      <ProfImage source={props.mini} />
      </TouchableOpacity>
      <Name>
        {props.name}
      </Name>
    </Container>
  );
}

export default PlanesWalkerFlatList;