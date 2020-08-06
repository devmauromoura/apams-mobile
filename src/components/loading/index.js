import React, { Component } from 'react';
import { Container, Text } from './styles';
import LottieView from 'lottie-react-native';

class Loading extends Component {
    render() {
        const { text } = this.props;
        return (
            <Container>
                <LottieView
                    autoPlay
                    loop
                    source={require('../../assets/icons/animated/4888-dog-icon.json')}
                />
                <Text>{text ? text : 'Carregando...'}</Text>
            </Container>
        );
    }
}

export default Loading;
