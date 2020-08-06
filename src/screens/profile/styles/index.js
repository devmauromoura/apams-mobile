import styled from 'styled-components';
import design from '../../../config/color';

import { Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';

export const Container = styled.View`
    flex: 1;
    background-color: ${design.backgroundDark};
    width:100%;
`;

export const SubContainer = styled.View`
    align-items: center;
    margin: 5px;
`;

export const AvatarTouch = styled.TouchableOpacity`
`;

export const AvatarText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${design.whitecolor};
    margin: 20px;
    padding: 10px;
    border-radius: 3px;
    background-color: ${design.buttoncolorprimary};
`;

export const Avatar = styled.Image`
    height: 120px; 
    width: 120px;
    border-radius: 60px;
    margin-vertical: 10px;
    border-width: 5px;
    border-color: ${design.whitecolor};
`;

export const Form = styled(TextInput)`
    height: 40px;
    width: ${Dimensions.get('window').width - 10}px;
`;

export const ContainerButtons = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${design.buttoncolorprimary};
    height: 40px;
    width: 48%;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    border-radius: 5px;
`;

export const TextButton = styled.Text`
    color: ${design.whitecolor};
    font-weight: bold;
`;
