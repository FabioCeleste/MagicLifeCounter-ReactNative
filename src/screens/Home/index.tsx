import React, {useState} from 'react';
import { View, TouchableOpacity  } from 'react-native';

import bgImage from '../../assets/imgs/home.jpeg';
import PlayerSelect from '../../components/PlayerSelect';
import { Container, Button, ButtonText } from './styles';

interface Props {
  navigation: {
    navigate: (to: string) => void;
  }
}

const Home: React.FC<Props> = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);

  function onFinish(){
    setIsVisible(false);
  }
  

  return (    
        <Container source={bgImage} blurRadius={3}>
          <Button>
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
            <ButtonText>
                Start
            </ButtonText>
            </TouchableOpacity>
          </Button>
          <PlayerSelect isVisible={isVisible} navigation={navigation.navigate} onFinish={onFinish} /> 
        </Container>
      
  )
}

export default Home;