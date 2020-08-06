import styled from 'styled-components';
import { Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import design from '../../../config/color';

export const Container = styled.SafeAreaView`
    height: 100%;
    width: 100%;
    background-color: ${design.background};
    padding: 10px;
`;

export const SubContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
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

export const Input = styled.TextInput`
    margin-top: 20px;
    background-color: ${design.whitecolor};
    height: 45px;
    width: 80%;
    border-radius: 3px;
    font-size: 15px;
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

export const ButtonFacebook = styled.TouchableOpacity`
    margin-top: 10px;
    background-color: #3b5998;
    height: 45px;
    width: 80%;
    border-radius: 3px;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    color: ${design.whitecolor}
    font-weight: bold;
    font-size: ${props => props.small ? 15 : 18}px;
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
    font-weight: bold;
`;

export const DividerOr = styled.View`
    flex-direction: row;
    height: 20px;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
`;

export const DividerOrLine = styled.View`
    width: 60px;
    height: 1px;
    background-color: ${design.whitecolor};
    margin-horizontal: 10px
`;

export const DividerOrText = styled.Text`
    font-weight: bold;
    color: ${design.whitecolor};
`;