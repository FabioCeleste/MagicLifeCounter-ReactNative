import styled from 'styled-components/native';

interface props{
    width: number;
    color: string
}

export const Container = styled.View`
flex-direction: row;
  
`;


export const Coin = styled.View`
    width: ${(props: props) => props.width ? props.width : ""}px;
    height: ${(props: props) => props.width ? props.width : ""}px;
    background: ${props => props.color};
    border-radius: 100px;
    border: 3px solid black;
    justify-content: center;
    align-items: center;
`;

export const Dice6 = styled.View`
    width: ${(props: props) => props.width ? props.width : ""}px;
    margin: 0 3px 0 3px;
    height: ${(props: props) => props.width ? props.width : ""}px;
    background: ${props => props.color};
    border: 3px solid black;
    justify-content: center;
    align-items: center;
`;

export const DiceText = styled.Text`
color: white;
font-size: 24px;
`;

export const DiceText4 = styled.Text`
position: absolute;
color: white;
font-size: 24px;
left: 70px;
top: 15px;
`;

export const DiceText8 = styled.Text`
position: absolute;
color: white;
font-size: 24px;
left: 182px;
top: 15px;
`;

export const DiceText10 = styled.Text`
position: absolute;
color: white;
font-size: 14px;
left: 235px;
top: 7px;
`;

export const DiceText12 = styled.Text`
position: absolute;
color: white;
font-size: 19px;
left: 287px;
top: 17px;
`;

export const DiceText20 = styled.Text`
position: absolute;
color: white;
font-size: 16px;
left: 347px;
top: 20px;
`;