import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert
} from 'react-native';

import {
    Container,
    Header,
    Cover,
    ImageAvatar,
    Name,
    NameText,
    Main,
    RowContainer,
    CardInfo,
    CardTitle,
    CardContainer,
    CardDesc,
    CardValue,
    CardHistory,
    HistoryContainer,
    Footer,
    Button,
    TextButton,
    ButtonIcon
} from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AnimalsActions from '../../store/actions';
import * as ProfileActions from '../../../profile/store/actions';
import { URL } from '../../../../services/api';

class AnimalDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        const { callProfile, loginReducer } = this.props;
        const { token } = loginReducer;
        callProfile(token);
    }

    callAdopt = (id, name) => {
        const { profileReducer, loginReducer, callAdopt } = this.props;
        const { user } = profileReducer;
        const { token } = loginReducer;

        if (!user.cellphone || user.cellphone.lenght < 8) {
            Alert.alert('Atenção.', `Para solicitar a adoção do(a) ${name}, você precisa configurar o número de contato em seu perfil.`);
        } else {
            callAdopt(token, id);
            Alert.alert('Solicitação realizada.', `A solicitação para adoção do(a) ${name} foi enviada. Aguarde contato.`);
        }

    }

    render() {
        const { navigation, route } = this.props;
        const { data } = route.params;
        return (
            <Container>
                <Header>
                    <Cover resizeMode="cover" blurRadius={1} source={{ uri: URL + data.avatar_url }} />
                    <Name>
                        <NameText>{data.name}{data.adopted === "1" ? " (Adotado)" : null}</NameText>
                    </Name>
                    <ImageAvatar source={{ uri: URL + data.avatar_url }} />
                </Header>

                <Main>
                    <CardInfo>
                        <CardTitle>Dados Gerais</CardTitle>
                        <RowContainer>
                            <CardContainer>
                                <CardDesc>Idade</CardDesc>
                                <CardValue>{data.age}</CardValue>
                            </CardContainer>

                            <CardContainer>
                                <CardDesc>Peso</CardDesc>
                                <CardValue>{data.weight}</CardValue>
                            </CardContainer>

                            <CardContainer>
                                <CardDesc>Porte</CardDesc>
                                <CardValue>{data.size}</CardValue>
                            </CardContainer>

                            <CardContainer>
                                <CardDesc>Sexo</CardDesc>
                                <CardValue>{data.sex === 'M' ? 'Macho' : 'Femea'}</CardValue>
                            </CardContainer>
                        </RowContainer>
                    </CardInfo>
                    <CardInfo>
                        <CardTitle>História</CardTitle>
                        <HistoryContainer>
                            <CardHistory>{data.history}</CardHistory>
                        </HistoryContainer>
                    </CardInfo>

                </Main>
                <Footer>
                    <Button onPress={() => navigation.navigate('AnimalGallery', {
                        animal_id: data.id
                    })}>
                        <ButtonIcon name="image-multiple" size={30} color="#fff" />
                        <TextButton>Galeria</TextButton>
                    </Button>
                    <Button onPress={() => {
                        data.adopted === "0" ?
                            this.callAdopt(data.id, data.name)
                            :
                            null
                    }}>
                        <ButtonIcon name="heart" size={30} color="#fff" />
                        <TextButton>Quero Adotar</TextButton>
                    </Button>
                </Footer>
                <View />
            </Container>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    callAdopt: bindActionCreators(AnimalsActions.callAdopt, dispatch),
    callProfile: bindActionCreators(ProfileActions.callUserData, dispatch)
});

const mapStateToProps = (state) => ({
    loginReducer: state.login,
    profileReducer: state.profile
});


export default connect(mapStateToProps, mapDispatchToProps)(AnimalDetail);