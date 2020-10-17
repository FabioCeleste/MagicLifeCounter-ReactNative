import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    flex: 1;
    position: absolute;
    z-index: 3;
    top: 47%;
    left: 10%; 
`;

export const Score = styled.View`
    width: 90px;
    height:45px;
    background: #444;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
`;
export const EndGame = styled.View`
    width: 45px;
    height:45px;
    border-radius: 30px;
    background: #26408B;
    align-items: center;
    justify-content: center;
    margin-left: 16px;
    border: 2px solid black;
`;
export const StartGame = styled.View`
    width: 45px;
    height:45px;
    border-radius: 30px;
    background: #E3170A;
    margin-right: 16px;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
`;

export const ScoreDisplay = styled.Text`
    font-size: 24px;
    color: white;
`;
