import styled from 'styled-components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import design from '../../../config/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.SafeAreaView`
    height: 100%;
    width: 100%;
    background-color: ${design.background};
`;

export const SubContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const SubContainerText = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 80%;
    align-self: center;
`;


export const ContainerKeyboard = styled(KeyboardAwareScrollView)`
    width: 100%;
`;

export const Logo = styled.Image`
    align-self: center;
    width: 50%;
    max-height: 200px;
    resize-mode: contain;
`;
export const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${design.whitecolor};
    width: 80%;
    margin-bottom: 20px;
`;

export const Input = styled.TextInput`
    height: 45px;
    width: 90%;
    border-radius: 3px;
    font-size: 15px;
`;


export const IconInput = styled(Icon)`

`;


export const Button = styled.TouchableOpacity`
    margin-top: 10px;
    background-color: ${props => props.transparent ? 'transparent' : design.buttoncolorprimary}
    height: 45px;
    width: 80%;
    border-radius: 3px;
    align-items: center;
    justify-content: center;
`;

export const ButtonSecondary = styled.TouchableOpacity`
    margin-top: 10px;
    background-color: ${props => props.transparent ? 'transparent' : design.buttoncolorsecondary}
    height: 45px;
    width: 80%;
    border-radius: 3px;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    color: ${design.whitecolor}
    font-weight: bold;
    font-size: ${props => props.small ? 15 : 20}px;
`;

export const Footer = styled.View`
    align-items: center;
    position: absolute;
    bottom: 0;
    left:0;
    right: 0;
    padding-bottom: 10px;
    margin-top: 10px;
`;

export const Description = styled.Text`
    color: ${design.whitecolor};
    text-align: justify;
`;
