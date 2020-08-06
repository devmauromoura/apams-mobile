import styled from 'styled-components';
import design from '../../../config/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
    flex: 1;
    background-color: ${design.backgroundDark};
`;

export const Scroll = styled.ScrollView`
    flex: 1;
`;

export const CardContainer = styled.View`
    width: 100%;
    height: 100%;
    padding-horizontal: 10px;
`;

export const Card = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 10px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image`
    height: 70px;
    width: 70px;
    border-width: 3px;
    border-radius: 35px;
    border-color: ${design.backgroundDark};
    margin-right: 10px;
`;

export const Name = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;

export const Date = styled.Text`
    align-self: flex-end;
    margin-bottom: -15px;
    font-size: 12px;
`;

export const CardBody = styled.View`
    margin-vertical: 10px;
`;
export const ImageBody = styled.Image`
    width: 100%;
    height: 200px;
    background-color: #c2c2c2;
    margin-bottom: 5px;
`;

export const TextTitle = styled.Text`
    font-weight: bold;
    text-align: justify;
    margin-bottom: 5px;
`;

export const TextBody = styled.Text`
    text-align: justify;
`;

export const CardButtons = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const TouchButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
`;

export const IconButton = styled(Icon)`
    color: ${props => props.curtido ? design.backgroundDark : '#c2c2c2'};
`;

export const TextButton = styled.Text`
`;

export const Divider = styled.View`
    width: 100%;
    height: 1px;
    background-color: rgba(255, 188, 0, 0.4);
    margin-bottom: 10px;
`;

export const Likes = styled.Text``;

export const LoadingContainer = styled.View`
    flex: 1;
    margin-top: 50px;
`;