import React, { Component } from 'react';
import {
    Container,
    ContainerKeyboard,
    SubContainer,
    SubContainerText,
    Description,
    Input,
    Button,
    TextButton,
    IconInput,
    InputContainer
} from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RecoveryActions from './store/actions';

class RecoverPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }

    recovery = () => {
        const { email } = this.state;
        const { callRecovery } = this.props;
        callRecovery(email);
    }

    render() {
        return (
            <Container>
                <ContainerKeyboard>
                    <SubContainerText>
                        <Description>Ao recuperar senha, nós enviaremos um e-mail para você. Nele haverá uma nova senha gerada randomicamente, use-a para acessar sua conta e altere para uma de sua preferência.</Description>
                    </SubContainerText>
                    <SubContainer>
                        <InputContainer>
                            <IconInput name="email" size={20} color="#c2c2c2" />
                            <Input placeholder="E-mail" onChangeText={value => { this.setState({ email: value }) }} />
                        </InputContainer>
                        <Button onPress={() => this.recovery()}>
                            <TextButton>Recuperar</TextButton>
                        </Button>
                    </SubContainer>
                </ContainerKeyboard>
            </Container>
        );
    }

}


const mapDispatchToProps = (dispatch) => ({
    callRecovery: bindActionCreators(RecoveryActions.callRecovery, dispatch)
});


export default connect(null, mapDispatchToProps)(RecoverPassword);