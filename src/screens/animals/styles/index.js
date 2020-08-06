import styled from 'styled-components';
import design from '../../../config/color';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';

import { Searchbar, RadioButton } from 'react-native-paper';


export const Container = styled.View`
    flex: 1;
    background-color: ${design.backgroundDark};
    width: 100%;
`;

export const Scroll = styled.ScrollView`

`;

export const SubContainer = styled.View`
    margin: 5px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const ImageTouch = styled.TouchableOpacity`
    align-items: center;
    margin: 5px;
    width: ${Dimensions.get('window').width / 4}px;
`;

export const Image = styled.Image`
    height: ${Dimensions.get('window').width / 4}px;
    width: ${Dimensions.get('window').width / 4}px;
    border-radius: ${(Dimensions.get('window').width / 4 ) / 2}px;
    border-width: 3px;
    border-color: ${design.whitecolor};
    background-color: #c2c2c2;
`;

export const TextTouch = styled.Text`
    color: ${design.whitecolor};
    font-weight: bold;
`;


export const Text = styled.Text`
    
`;

export const SettingsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;

`;

export const SearchBar = styled(Searchbar)`
    width: 85%;
    margin-top: 10px;
    align-self: center;
`;

export const TouchSettings = styled.TouchableOpacity`
`;

export const IconSettings = styled(Icon)`

`;
