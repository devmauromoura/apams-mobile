import React, { Component } from 'react';
import { Container, Text } from './styles';

import Gallery from 'react-native-image-gallery';
import design from '../../../../config/color';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AnimalsActions from '../../store/actions';
import Loading from '../../../../components/loading';
import { URL } from '../../../../services/api';

class AnimalGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        const { route, callGallery, loginReducer } = this.props;
        const { token } = loginReducer;
        const { animal_id } = route.params;
        callGallery(token, animal_id);
    }

    render() {
        const { animalsReducer } = this.props;
        const { gallery, loading } = animalsReducer;
        let source = [];

        gallery.forEach(element => {
            if (
                element.image_url != null &&
                element.image_url != undefined &&
                element.image_url != ""
            ) {
                const data = { source: { uri: URL + element.image_url } };
                source.push(data);
            }
        });

        if (loading) {
            return (
                <Container>
                    <Loading text="Carregando Galeria" />
                </Container>
            )
        } else {
            return (
                <Container>
                    <Gallery
                        style={{ flex: 1, backgroundColor: design.backgroundDark }}
                        images={source}
                    />
                </Container>
            )
        }
    }

}

const mapDispatchToProps = (dispatch) => ({
    callGallery: bindActionCreators(AnimalsActions.callGallery, dispatch)
});

const mapStateToProps = (state) => ({
    loginReducer: state.login,
    animalsReducer: state.animals
});


export default connect(mapStateToProps, mapDispatchToProps)(AnimalGallery);