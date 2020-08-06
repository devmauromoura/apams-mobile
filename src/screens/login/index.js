import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { callLogin, saveToken } from '../signin/store/actions';
import {
    Container,
    ContainerKeyboard,
    SubContainer,
    Logo,
    DividerOr,
    DividerOrText,
    DividerOrLine,
    Button,
    ButtonSecondary,
    ButtonFacebook,
    TextButton,
    Description,
    Footer
} from './styles';
import logoApams from '../../assets/img/logo-apams.png';
import AsyncStorage from '@react-native-community/async-storage';
import * as RootNavigation from '../../RootNavigation';
import * as HomeActions from '../home/store/actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verifyToken: false
        }
    }

    async componentDidMount() {
        const { saveToken, callVerifyToken } = this.props;
        const token = await AsyncStorage.getItem('@USER/TOKEN');
        if (token) {
            await saveToken(token);
            await callVerifyToken(token);
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Logo source={logoApams} />
                <ContainerKeyboard behavior="position" resetScrollToCoords={{ x: 0, y: 0 }}>
                    <SubContainer>
                        <Button onPress={() => navigation.navigate('SignIn')}>
                            <TextButton>Acessar</TextButton>
                        </Button>
                        <DividerOr>
                            <DividerOrLine />
                            <DividerOrText>
                                Ou
                            </DividerOrText>
                            <DividerOrLine />
                        </DividerOr>
                        {/* <ButtonFacebook onPress={() => navigation.navigate('Register')}>
                            <TextButton>Conectar com o Facebook</TextButton>
                        </ButtonFacebook> */}
                        <ButtonSecondary onPress={() => navigation.navigate('Register')}>
                            <TextButton>Criar conta</TextButton>
                        </ButtonSecondary>
                    </SubContainer>
                </ContainerKeyboard>
                <Footer>
                    <Description>v1.0.0</Description>
                </Footer>
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    callLogin: bindActionCreators(callLogin, dispatch),
    saveToken: bindActionCreators(saveToken, dispatch),
    callVerifyToken: bindActionCreators(HomeActions.callVerifyToken, dispatch)
});


export default connect(null, mapDispatchToProps)(Login);