import React, { useState, useEffect } from "react";
import { View, Modal, FlatList, Text } from "react-native";

import planesWalkers from "../../planesWalkers";
import { Container, PlayerSelectBg, SelectText } from "./styles";
import PlanesWalkerItem from "../PlanesWalkerItem";

interface Props {
  isVisible?: boolean;
  navigation: (to: string, {selections: []}) => void;
  onFinish: () => void
}

const planesWalkersArray = [];

Object.keys(planesWalkers).forEach((planes) => {
  planesWalkersArray.push(planesWalkers[planes]);
});

const PlayerSelect: React.FC<Props> = ({ isVisible, navigation, onFinish }) => {
  const [selections, setSelections] = useState<string[]>([]);
  const [playerNum, setPlayerNum] = useState(1); 

  function addSelection(planes: string) {
    selections.push(planes);
    setPlayerNum(2);
    if (selections.length > 1) {
      onFinish();
      navigation('TwoTeams', {selections: selections});
    }
  }

  return (
    <Modal transparent={true} visible={isVisible}>
      <Container>
      <SelectText>Player {playerNum}</SelectText>
        <PlayerSelectBg>
          <FlatList
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
            data={planesWalkersArray}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <PlanesWalkerItem {...item} selected={addSelection} />
            )}
          />
        </PlayerSelectBg>
      </Container>
    </Modal>
  );
};

export default PlayerSelect;
