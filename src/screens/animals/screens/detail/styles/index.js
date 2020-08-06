import styled from 'styled-components';
import design from '../../../../../config/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Dimensions } from 'react-native';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${design.background};
`;

export const Header = styled.View`

`;
export const Cover = styled.Image`
    width: 100%;
    height: 120px;
    background-color: #c2c2c2;
`;

export const Name = styled.View`
    width: 100%;
    height: 30px;
    background-color: ${design.backgroundDark};
    margin-top: -10px;
    padding-left: 140px;
    justify-content: center;
`;

export const NameText = styled.Text`
    font-weight: bold;
    color: ${design.whitecolor};
    font-size: 16px;
`;

export const ImageAvatar = styled.Image`
    height: 120px;
    width: 120px;
    border-radius: 60px;
    background-color: #c2c2c2;
    border-width: 3px;
    border-color: ${design.backgroundDark}
    margin-top: -90px;
    margin-left: 10px;
`;

export const Main = styled.View`
    padding: 10px;
`;

export const RowContainer = styled.View`
    flex-direction: row;
    padding: 10px;
    justify-content: space-between;
    width: 100%;
`;

export const CardInfo = styled.View`
    background-color: #ffffff;
    max-height: 100%;
    width: 100%;
    border-radius: 5px;
    align-items: center;
    padding: 5px;
    margin-bottom: 10px;
`;

export const CardTitle = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;

export const CardContainer = styled.View`
`;

export const CardDesc = styled.Text`
    font-weight: bold;
`;
export const CardValue = styled.Text`
    font-size: 15px;
`;

export const HistoryContainer = styled.View`
    width: 100%;
    max-height: 100%;
`;
export const CardHistory = styled.Text`
    font-size: 15px;
    text-align: justify;
`;

export const Footer = styled.View`
    padding: 5px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
    height: 80px;
    width: 49%;
    background-color: ${design.buttoncolorprimary};
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    border-radius: 05px;
`;

export const ButtonIcon = styled(Icon)`
    
`;

export const TextButton = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${design.whitecolor};
`;