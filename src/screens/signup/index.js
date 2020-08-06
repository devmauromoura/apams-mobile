import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { callRegister } from './store/actions';
import {
    Container,
    ContainerKeyboard,
    SubContainer,
    SubContainerText,
    Description,
    Input,
    Button,
    TextButton,
    InputContainer,
    IconInput
} from './styles';
import { Formik } from 'formik';
import Loading from '../../components/loading';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            repassword: ''
        };
    }

    handleCallRegister() {
        const { callRegister } = this.props;
        const { name, email, password } = this.state;
        const data = {
            'name': name,
            'email': email,
            'password': password
        };

        callRegister(data);
    }

    render() {
        const { register } = this.props;
        return (
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    repassword: ''
                }}
                onSubmit={() => this.handleCallRegister()}
            >
                {({ handleSubmit, values }) => (
                    <Container>
                        {
                            register.loading === false ?
                                <ContainerKeyboard>
                                    <SubContainerText>
                                        <Description>Olá, nós da APAMS estamos felizes de ter você por aqui. Preencha todas as informações para finalizar o cadastro, é rapidinho... Com ele você poderá usar todos os recursos de nossa plataforma.</Description>
                                    </SubContainerText>

                                    <SubContainer>
                                        <InputContainer>
                                            <IconInput name="account" size={20} color="#c2c2c2" />
                                            <Input placeholder="Insira seu nome completo" onChangeText={(value) => this.setState({ name: value })} onSubmitEditing={() => this.email.focus()} />
                                        </InputContainer>
                                        <InputContainer>
                                            <IconInput name="email" size={20} color="#c2c2c2" />
                                            <Input placeholder="Insira seu e-mail" onChangeText={(value) => this.setState({ email: value })} ref={ref => this.email = ref} onSubmitEditing={() => this.pass.focus()} />
                                        </InputContainer>
                                        <InputContainer>
                                            <IconInput name="key-variant" size={20} color="#c2c2c2" />
                                            <Input secureTextEntry={true} placeholder="Insira sua senha" onChangeText={(value) => this.setState({ password: value })} ref={ref => this.pass = ref} onSubmitEditing={() => this.repass.focus()} />
                                        </InputContainer>
                                        <InputContainer>
                                            <IconInput name="key-variant" size={20} color="#c2c2c2" />
                                            <Input secureTextEntry={true} placeholder="Insira novamente sua senha" onChangeText={(value) => this.setState({ repassword: value })} ref={ref => this.repass = ref} onSubmitEditing={() => handleSubmit()} />
                                        </InputContainer>

                                        <Button onPress={() => handleSubmit()}>
                                            <TextButton>Registrar</TextButton>
                                        </Button>
                                    </SubContainer>

                                </ContainerKeyboard>
                                :
                                <Loading
                                    text="Registrando..."
                                />
                        }
                    </Container>
                )}
            </Formik>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    callRegister: bindActionCreators(callRegister, dispatch),
});
const mapStateToProps = (state) => ({
    register: state.register,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);