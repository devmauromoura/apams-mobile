import styled from 'styled-components';
import design from '../../../../../config/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${design.backgroundDark};
`;

export const SubView = styled.ScrollView`
    width: 100%;
    height: 100%;
`;

export const Card = styled.View`
    width: 95%;
    background-color: #ffffff;
    margin-top: 5px;
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    align-self: center;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    padding: 5px;
    justify-content: space-between;
`;

export const CardSep = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CardImage = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border-width: 3px;
    border-color: ${design.backgroundDark};
    margin-right: 10px;
`;
export const CardName = styled.Text`
    font-weight: bold;
    font-size: 14px;
`;
export const CardDate = styled.Text`
    font-size: 12px;
`;

export const Divider = styled.View`
    width: 100%;
    height: 1px;
    background-color: rgba(255, 188, 0, 0.4);
    margin-bottom: 10px;
`;

export const CardBody = styled.View`
    padding: 5px;
`;

export const CardComment = styled.Text`
    text-align: justify;
`;


export const BottomContainer = styled.View`
    width: 100%;
    height: 70px;
    background-color: ${design.backgroundDark};
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.TextInput`
    height: 50px;
    width: 85%;
    background-color: #ffffff;
    margin-right: 10px;
    border-radius: 5px;
    padding-left: 5px;
`;

export const Button = styled.TouchableOpacity``;

export const IconButton = styled(Icon)`

`;