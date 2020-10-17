import styled from 'styled-components/native';

interface props {
    color: string;
}

export const CloseButtom = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;  
`;
export const CloseBox = styled.View`
    width: 35px;
    height: 35px;
    background: #444;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 2px solid black;
    margin-left: 100px;
`;

export const Dice20Text = styled.Text`
    position: absolute;
    left: 45px;
    font-size: 25px;
    bottom: 45px;
    color: white;
`;
export const Dice4Text = styled.Text`
    position: absolute;
    left: 50px;
    font-size: 35px;
    bottom: 25px;
    color: white;
`;
export const Dice10Text = styled.Text`
    position: absolute;
    left: 40px;
    font-size: 35px;
    bottom: 55px;
    color: white;
`;
export const Dice12Text = styled.Text`
    position: absolute;
    left: 40px;
    font-size: 35px;
    bottom: 35px;
    color: white;
`;

export const DiceBox = styled.View`
    position: relative;
`;

export const DefaultText = styled.Text`
    color: white;
    font-size: 70px;
`;

export const Dice6 = styled.View`
    width: 110px;
    height: 110px;
    background: ${props => props.color};
    border: 3px solid black;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
`;
export const Coin = styled.View`
    width: 110px;
    height: 110px;
    background: ${props => props.color};
    border-radius: 60px;
    border: 3px solid black;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
`;
