import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from '../../components/loading';
import {
    Container,
    SubContainer,
    TextButton,
    Avatar,
    AvatarTouch,
    Form,
    Button,
    ContainerButtons,
    AvatarText
} from './styles';
import colors from '../../config/color';

import ImagePicker from 'react-native-image-picker';
import * as UsersActions from './store/actions';
import { URL } from '../../services/api';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            celular: '',
            avatar: {},
            avatarPath: '',
            senha: ''
        }
    }

    componentDidMount() {
        const { GetUser, UpdateUser, login } = this.props;
        GetUser(login.token);
    }

    componentDidUpdate(prevProps, prevState) {
        const { profile } = this.props;
        const { user } = profile;
        if (prevProps.profile.user !== user) {
            this.setState({
                nome: user.name,
                email: user.email,
                celular: user.cellphone
            });
        }
    }

    setImage = async () => {
        const options = {
            title: 'Selecione o Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.launchImageLibrary(options, (response) => {
            this.setState({
                avatarPath: response.uri,
                avatar: {
                    fileName: response.fileName,
                    fileType: response.type,
                    base64: response.data
                }
            })
        });
    }

    saveProfile() {
        const { UpdateUser, login, profile } = this.props;
        const { user } = profile;
        const { token } = login;
        const { nome, email, celular, avatar, senha } = this.state;
        let data = {};

        if (nome && nome != user.name) {
            data['name'] = nome;
        }
        if (email && email != user.email) {
            data['email'] = email;
        }
        if (celular && celular != user.cellphone) {
            data['cellphone'] = celular;
        }
        if (avatar && avatar.fileName) {
            data['avatar'] = avatar;
        }
        if (senha && senha !== '') {
            data['password'] = senha;
        }

        UpdateUser(token, data);
    }

    logout = () => {
        const { LogoutUser, login } = this.props;
        const { token } = login;
        LogoutUser(token);
    }

    render() {
        const { profile } = this.props;
        const { user, loading} = profile;
        const { nome, email, celular, avatar, avatarPath, senha } = this.state;
        const theme = {
            colors: { placeholder: 'gray', text: 'black', primary: 'black', underlineColor: 'transparent' }
        }

        if (loading) {
            return (
                <Container>
                    <Loading text="Carregando seus Dados." />
                </Container>
            )
        } else {
            return (
                <Container>
                    <SubContainer>
                        <AvatarTouch onPress={() => this.setImage()}>
                            {
                                avatarPath === '' && !user.avatar ?
                                    <AvatarText>Defina seu Avatar</AvatarText>
                                    :
                                    <Avatar source={{ uri: avatarPath ? avatarPath : URL + user.avatar }} />
                            }

                        </AvatarTouch>
                        <Form label="Nome Completo" mode="outlined" value={nome} onChangeText={text => this.setState({ nome: text })} theme={theme} />
                        <Form label="E-mail" mode="outlined" value={email} onChangeText={text => this.setState({ email: text })} theme={theme} />
                        <Form label="Celular" mode="outlined" value={celular} onChangeText={text => this.setState({ celular: text })} theme={theme} />
                        <Form secureTextEntry={true} label="Nova senha" mode="outlined" value={senha} onChangeText={text => this.setState({ senha: text })} theme={theme} />
                        <ContainerButtons>
                            <Button onPress={() => this.saveProfile()}><TextButton>Salvar</TextButton></Button>
                            <Button onPress={() => this.logout()}><TextButton>Sair</TextButton></Button>
                        </ContainerButtons>
                    </SubContainer>
                </Container>
            )
        }
    }
}


const mapDispatchToProps = (dispatch) => ({
    GetUser: bindActionCreators(UsersActions.callUserData, dispatch),
    UpdateUser: bindActionCreators(UsersActions.callUpdateUser, dispatch),
    LogoutUser: bindActionCreators(UsersActions.callLogoutUser, dispatch)
});

const mapStateToProps = (state) => ({
    login: state.login,
    profile: state.profile
});


export default connect(mapStateToProps, mapDispatchToProps)(Profile);