import styled from 'styled-components';
import design from '../../../config/color';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    margin-top: -80px;
`;

export const Text = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${design.whitecolor};
    margin-top: 200px;
`;