import React, { Component } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import Loading from '../../components/loading';
import {
    Container,
    SubContainer,
    Text,
    ImageTouch,
    Image,
    TextTouch,
    SearchBar,
    IconSettings,
    SettingsContainer,
    TouchSettings,
    Scroll
} from './styles';

import Filter from './components/filter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AnimalsAction from './store/actions';
import { URL } from '../../services/api';


class Animals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterModal: false,
            text: '',
            type: '',
            size: '',
            isFetching: false
        }

        this.setType = this.setType.bind(this);
        this.setSize = this.setSize.bind(this);
        this.clear = this.clear.bind(this);
    }

    componentDidMount() {
        const { callAnimals, animalsReducer, loginReducer } = this.props;
        const { token } = loginReducer;
        callAnimals(token);
    }

    onRefresh = () => {
        this.setState({ isFetching: true });

        const { text, size, type } = this.state;
        const { callAnimals, loginReducer } = this.props;
        const { token } = loginReducer;
        callAnimals(token);

        this.setState({ isFetching: false });
    }

    toggleFilter = () => {
        const { filterModal } = this.state;
        this.setState({ filterModal: !filterModal });
    }

    filter = () => {
        const { text, size, type } = this.state;
        const { callAnimals, loginReducer } = this.props;
        const { token } = loginReducer;
        let query = "name=" + text;
        if (size.length > 1) {
            query += "&size=" + size;
        }
        if (type.length > 1) {
            query += "&type=" + type;
        }
        callAnimals(token, query);
    }

    setSize = (value) => {
        this.setState({ size: value });
        const { size, type, text } = this.state;
        const { callAnimals, loginReducer } = this.props;
        const { token } = loginReducer;
        let query = "size=" + value;
        if (text.length > 1) {
            query += "&text=" + text;
        }
        if (type.length > 1) {
            query += "&type=" + type;
        }
        callAnimals(token, query);
    }

    setType = (value) => {
        this.setState({ type: value });
        const { type, text, size } = this.state;
        const { callAnimals, loginReducer } = this.props;
        const { token } = loginReducer;
        let query = "type=" + value;
        if (size.length > 1) {
            query += "&size=" + size;
        }
        if (text.length > 1) {
            query += "&text=" + text;
        }
        callAnimals(token, query);
    }

    clear = () => {
        const { callAnimals, loginReducer } = this.props;
        const { token } = loginReducer;
        this.setState({
            text: '',
            size: '',
            type: '',
            filterModal: false
        });

        callAnimals(token);
    }

    render() {
        const { navigation, animalsReducer } = this.props;
        const { animals, loading } = animalsReducer;
        const { filterModal, text, type, size } = this.state;

        if (loading) {
            return (
                <Container>
                    <Loading text="Carregando os Animais" />
                </Container>
            )
        } else {
            return (
                <Container>
                    <Filter visible={filterModal} close={() => this.toggleFilter()} setType={this.setType} setSize={this.setSize} type={type} size={size} clear={() => this.clear()} />
                    <SettingsContainer>
                        <SearchBar value={text} onChangeText={value => this.setState({
                            text: value
                        })}
                            onEndEditing={() => this.filter()}
                        />
                        <TouchSettings onPress={() => this.toggleFilter()}>
                            <IconSettings
                                name="filter"
                                size={40}
                                color="#ffffff"
                            />
                        </TouchSettings>
                    </SettingsContainer>
                    <Scroll
                        refreshControl={
                            <RefreshControl refreshing={this.state.isFetching} onRefresh={() => this.onRefresh()} />
                        }
                    >
                        <SubContainer>
                            {animals.map(item => (
                                <ImageTouch onPress={() => navigation.navigate('AnimalDetail', {
                                    data: item
                                })}>
                                    <Image source={{ uri: URL + item.avatar_url }} />
                                    <TextTouch>{item.name}</TextTouch>
                                </ImageTouch>
                            ))}
                        </SubContainer>
                    </Scroll>
                </Container>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    callAnimals: bindActionCreators(AnimalsAction.callAnimals, dispatch),
});

const mapStateToProps = (state) => ({
    loginReducer: state.login,
    animalsReducer: state.animals
});


export default connect(mapStateToProps, mapDispatchToProps)(Animals);