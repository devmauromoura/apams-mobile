import { locale } from '../../config/momentlocale';
locale(); // Aplica o locale aqui. 
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList, RefreshControl } from 'react-native';
import Loading from '../../components/loading';
import {
    Container,
    CardContainer,
    Card,
    CardHeader,
    CardBody,
    CardButtons,
    Avatar,
    Name,
    Date,
    ImageBody,
    TextTitle,
    TextBody,
    TouchButton,
    IconButton,
    TextButton,
    Divider,
    Likes
} from './styles';

import colors from '../../config/color';
import * as HomeActions from './store/actions';
import Share from "react-native-share";
import { URL } from '../../services/api';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likeds: [],
            isFetching: false
        }
    }

    async componentDidMount() {
        const { callPosts, loginReducer } = this.props;
        const { token } = loginReducer;
        if (token) {
            await callPosts(token);
        }
    }
    onRefresh = async () => {
        this.setState({ isFetching: true });
        const { callPosts, loginReducer } = this.props;
        const { token } = loginReducer;
        if (token) {
            await callPosts(token);
            this.setState({ isFetching: false });
        }
    }

    likePost = (id) => {
        const { callLike, loginReducer } = this.props;
        const { token } = loginReducer;
        callLike(token, id);
    }

    unlikePost = (id) => {
        const { callUnlike, loginReducer } = this.props;
        const { token } = loginReducer;
        callUnlike(token, id);
    }

    renderItem = ({ item }) => {
        const { navigation } = this.props;
        const { posts } = this.props.homeReducer;
        const { likeds } = this.state;
        let like = posts.likes;
        if (like.find(lk => lk.post_id === item.id)) {
            likeds.push(like.find(lk => lk.post_id === item.id));
        }

        const image = { uri: URL + item.image };
        const avatar = { uri: URL + item.avatar };

        return (
            <Card>
                <Date>{item.created_at ? moment(item.created_at).fromNow() : ''}</Date>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Name>{item.name}</Name>
                </CardHeader>
                <CardBody>
                    <TextTitle>
                        {item.title}
                    </TextTitle>
                    {
                        item.image ?
                            <ImageBody source={image} resizeMode="cover" />
                            : null
                    }
                    <TextBody>
                        {item.description}
                    </TextBody>
                </CardBody>
                <Likes>{item.likes > 1 ? `${item.likes} curtidas.` : `${item.likes} curtida.`}</Likes>
                <Divider />
                <CardButtons>

                    <TouchButton onPress={() => {
                        if (likeds.find(i => i.post_id === item.id)) {
                            this.unlikePost(item.id);
                            const ind = likeds.findIndex(id => id.post_id === item.id);
                            const indL = like.findIndex(id => id.post_id === item.id);
                            likeds.splice(ind, 1);
                            like.splice(indL, 1);
                            item.likes -= 1;
                            this.forceUpdate();
                        } else {
                            this.likePost(item.id);
                            likeds.push({ post_id: item.id });
                            item.likes += 1;
                            this.forceUpdate();
                        }
                    }}>
                        <IconButton name="thumb-up" size={20} curtido={likeds.find(i => i.post_id === item.id)} />
                        <TextButton>{likeds.find(i => i.post_id === item.id) ? 'Descurtir' : 'Curtir'}</TextButton>
                    </TouchButton>

                    <TouchButton onPress={() => navigation.navigate('Comments', {
                        id: item.id
                    })}>
                        <IconButton name="comment" size={20} color="#00000" />
                        <TextButton>Comentários</TextButton>
                    </TouchButton>
                    <TouchButton onPress={() => this.shareItem(item)}>
                        <IconButton name="share" size={20} color="#00000" />
                        <TextButton>Compartilhar</TextButton>
                    </TouchButton>
                </CardButtons>
            </Card>
        )
    };

    shareItem = (item) => {
        const options = {
            title: 'Compartilhar',
            message: `${item.title}\n${URL + item.image}\n${item.description}`,
        }
        Share.open(options)
            .then((res) => { console.log(res) })
            .catch((err) => { err && console.log(err); });
    }

    render() {
        const { navigation, homeReducer } = this.props;
        const { loading, posts } = homeReducer;
        const post = posts.posts;

        if (loading) {
            return (
                <Container>
                    <Loading text="Carregando Post's" />
                </Container>
            )
        } else {
            return (
                <Container>
                    <CardContainer>
                        <FlatList
                            data={post}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.id}
                            onRefresh={() => this.onRefresh()}
                            refreshing={this.state.isFetching}
                        />
                    </CardContainer>
                </Container>
            )
        }
    }
}


const mapDispatchToProps = (dispatch) => ({
    callPosts: bindActionCreators(HomeActions.callPosts, dispatch),
    callLike: bindActionCreators(HomeActions.callLikePost, dispatch),
    callUnlike: bindActionCreators(HomeActions.callUnlikePost, dispatch)
});

const mapStateToProps = (state) => ({
    loginReducer: state.login,
    homeReducer: state.home
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);