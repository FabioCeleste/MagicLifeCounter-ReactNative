import styled from 'styled-components/native';

interface props {
    upSide: boolean
}

export const Container = styled.ImageBackground`
    padding-top: 15px;
    display: flex;
    height: 50%;
    background: blue;    
    align-items: center;
    ${(props: props) => props.upSide ? 'transform: rotate(180deg);' : ''}
    
`;
export const ProfileImage = styled.Image`
    height: 127px;
    width: 127px;
    border-radius: 127;
    border: 3px solid black;
    z-index: 2;
`;

export const LifeCounter = styled.View`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
`;

export const Life = styled.View`
    position: relative;
    align-self: center;
    left: -15px;
    width: 158px;
    height: 78px;
    background: #454545;
    z-index: 1;
    border: 1px solid black;
`;

export const PlusNMinus = styled.View`
    display: flex;
    flex-direction: row;
    width: 35%;
    bottom: 30px;
    justify-content: space-around;
    margin-left: 90px;
`;

export const LifeText = styled.Text`
    font-size: 50px;
    align-self: center;
    margin-right: 5px;
    color: white;
`;

export const BoxPlusnMinus = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background: #454545;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid black;
`;

export const TextPlusNMinus = styled.Text`
    color: white;
    font-size: 30px;
`;



