import styled from 'styled-components';
import colors from '../../../../../config/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ContainerModal = styled.View`
    width: 100%;
    max-height: 90%;
    background-color: ${colors.backgroundDark};
    padding: 5px;
`;

export const ContainerData = styled.View``;
export const DataTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${colors.whitecolor};
    align-self: center;
    margin-bottom: 5px;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    background-color: ${colors.buttoncolorprimary};
    border-radius: 3px;
    align-items: center;
    justify-content: center;
`;
export const ButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.whitecolor};
`;

export const CardDev = styled.TouchableOpacity`
    flex-direction: row;
    border-bottom-width: 2px;
    border-radius: 3px;
    padding-bottom: 5px;
    margin-bottom: 5px;
    border-color: ${colors.background};
    align-items: center;
`;
export const CardIcon = styled(Icon)`
    font-size: 50px;
    color: ${colors.whitecolor};
    width: 15%;
`;
export const CardText = styled.View`
    width: 85%;
    color: ${colors.whitecolor};
`;
export const CardTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.whitecolor};
`;
export const CardDescription = styled.Text`
    color: ${colors.whitecolor};
    text-align: justify;
`;