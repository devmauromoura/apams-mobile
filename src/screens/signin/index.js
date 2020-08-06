import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { callLogin } from './store/actions';
import {
    Container,
    ContainerKeyboard,
    SubContainer,
    Logo,
    Input,
    Button,
    TextButton,
    Description,
    Footer,
    IconInput,
    InputContainer
} from './styles';
import logoApams from '../../assets/img/logo-apams.png';
import Loading from '../../components/loading';
import AsyncStorage from '@react-native-community/async-storage';

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    async componentDidMount() {
        const email = await AsyncStorage.getItem('@USER/EMAIL');
        if (email) {
            this.setState({ email: email });
        }
    }

    async callLogin() {
        const { callLogin } = this.props;
        const { email } = this.state;
        try {
            callLogin(this.state);
            await AsyncStorage.setItem('@USER/EMAIL', email)
        } catch (e) {
            // saving error
        }

    }

    render() {
        const { navigation, login } = this.props;
        const { email, password } = this.state;
        return (
            <Container>
                <Logo source={logoApams} />

                {
                    login.loading === false ?
                        <ContainerKeyboard behavior="position" resetScrollToCoords={{ x: 0, y: 0 }}>
                            <SubContainer>
                                <InputContainer>
                                    <IconInput name="email" size={20} color="#c2c2c2" />
                                    <Input autoCapitalize="none" value={email} placeholder="E-mail" onChangeText={value => { this.setState({ email: value }) }} onSubmitEditing={() => this.passwordRef.focus()} />
                                </InputContainer>
                                <InputContainer>
                                    <IconInput name="key-variant" size={20} color="#c2c2c2" />
                                    <Input autoCapitalize="none" secureTextEntry={true} value={password} placeholder="Senha" onChangeText={value => { this.setState({ password: value }) }} ref={ref => this.passwordRef = ref} onSubmitEditing={() => this.callLogin()} />
                                </InputContainer>
                                <Button onPress={() => this.callLogin()}>
                                    <TextButton>Acessar</TextButton>
                                </Button>
                                <Button onPress={() => navigation.navigate('RecoverPassword')} transparent={true}>
                                    <TextButton small={true}>Recuperar senha</TextButton>
                                </Button>
                            </SubContainer>
                        </ContainerKeyboard>
                        :
                        <Loading text="Autenticando..." />
                }
                <Footer>
                    <Description>v1.0.0</Description>
                </Footer>
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    callLogin: bindActionCreators(callLogin, dispatch)
});

const mapStateToProps = (state) => ({
    login: state.login,
});


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);