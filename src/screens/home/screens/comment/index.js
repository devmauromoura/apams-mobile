import React, { Component } from 'react';
import { Platform, RefreshControl } from 'react-native';
import moment from 'moment';
import { locale } from '../../../../config/momentlocale';
locale(); // Aplica o locale aqui.
import {
    Container,
    SubContainer,
    BottomContainer,
    Input,
    IconButton,
    Card,
    SubView,
    CardHeader,
    CardSep,
    CardImage,
    CardName,
    CardDate,
    CardBody,
    CardComment,
    Divider,
    Button
} from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as HomeActions from '../../store/actions';
import Loading from '../../../../components/loading';
import { URL } from '../../../../services/api';
import { HeaderBackButton } from '@react-navigation/stack';


class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            isFetching: false
        };
    }

    componentDidMount() {
        const { route, callComments, loginReducer, navigation } = this.props;
        const { id } = route.params;
        const { token } = loginReducer;

        callComments(token, id);

        navigation.setOptions({
            headerLeft: () => (
                <HeaderBackButton
                    tintColor="#ffffff"
                    onPress={() => navigation.goBack()}
                />
            ),
        });
    }

    onRefresh = async () => {
        this.setState({ isFetching: true });
        const { route, callComments, loginReducer } = this.props;
        const { id } = route.params;
        const { token } = loginReducer;

        await callComments(token, id);
        this.setState({ isFetching: false });
    }

    send = () => {
        const { message } = this.state;
        const { sendMessage, route, loginReducer, callComments } = this.props;
        const { id } = route.params;
        const { token } = loginReducer;
        const data = {
            id: id,
            message: message
        }

        sendMessage(token, data);
        setTimeout(() => {
            callComments(token, id);
            this.setState({ message: '' });
            this.forceUpdate();
        }, 500);

    }

    render() {
        const { comment } = this.state;
        const { homeReducer } = this.props;
        const { comments, loadingc } = homeReducer;
        if (loadingc) {
            return (
                <Container>
                    <Loading text="Carregando Comentários" />
                </Container>
            )
        } else {
            return (
                <Container>

                    <SubView
                        refreshControl={
                            <RefreshControl refreshing={this.state.isFetching} onRefresh={() => this.onRefresh()} />
                        }
                    >
                        {
                            comments.map(item => (
                                <Card>
                                    <CardHeader>
                                        <CardSep>
                                            <CardImage source={{ uri: URL + item.avatar }} />
                                            <CardName>{item.name}</CardName>
                                        </CardSep>
                                        <CardDate>{moment(item.created_at).fromNow()}</CardDate>
                                    </CardHeader>
                                    <Divider />
                                    <CardBody>
                                        <CardComment>{item.comment}</CardComment>
                                    </CardBody>
                                </Card>
                            ))
                        }
                    </SubView>
                    <BottomContainer>
                        <Input
                            value={comment}
                            onChangeText={text => this.setState({ message: text })}
                        />
                        <Button onPress={this.send}>
                            <IconButton name="send" size={20} color="#00000" />
                        </Button>
                    </BottomContainer>
                </Container>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    callComments: bindActionCreators(HomeActions.callComments, dispatch),
    sendMessage: bindActionCreators(HomeActions.sendComment, dispatch)
});

const mapStateToProps = (state) => ({
    loginReducer: state.login,
    homeReducer: state.home
});


export default connect(mapStateToProps, mapDispatchToProps)(Comments);
