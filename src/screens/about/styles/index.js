import styled from 'styled-components';
import colors from'../../../config/color';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${colors.backgroundDark};
    padding: 5px;
`;

export const AboutContainer = styled.View`
    align-items: center;
    margin-bottom: 10px;
`;
export const AboutTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${colors.whitecolor};
`;
export const AboutText = styled.Text`
    color: ${colors.whitecolor};
    text-align: justify;
    font-size: 16px;
`;
export const ButtonsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;
export const Button = styled.TouchableOpacity`
    width: 48%;
    height: 40px;
    background-color: ${colors.buttoncolorprimary};
    align-items: center;
    justify-content: center;
    border-radius: 3px;
`;
export const ButtonText = styled.Text`
    color: ${colors.whitecolor};
    font-size: 16px;
    font-weight: bold;
`;    