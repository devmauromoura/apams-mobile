import styled from 'styled-components';
import design from '../../../../../config/color';
import { Searchbar, RadioButton } from 'react-native-paper';

export const ModalContainer = styled.View`
    flex: 1;
    justify-content: center;
`;

export const ViewModal = styled.View`
    width: 100%;
    background-color: ${design.backgroundDark};
    border-radius: 5px;
    padding: 5px;
    align-items: center;
`;

export const SubModalContainer = styled.View`
    align-items: center;
    justify-content:center;
`;


export const CardCheck = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const CardCheckText = styled.Text`
    color: #ffffff;
`;

export const Check = styled(RadioButton)`
    color: #ffffff
`;

export const ModalTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
`;

export const CardContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
`;

export const Divider = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${design.background};
    margin-bottom: 10px;
`;

export const ButtonContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
    width: 49%;
    height: 40px;
    background-color: ${design.buttoncolorprimary};
    border-radius: 3px;
    align-items: center;
    justify-content: center;
`;
export const ButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
`;