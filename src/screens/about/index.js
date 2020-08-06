import React, { Component } from 'react';
import {
    Container,
    AboutContainer,
    AboutTitle,
    AboutText,
    ButtonsContainer,
    Button,
    ButtonText
} from './styles';

import Development from './components/development';
import Sponsors from './components/sponsors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AboutActions from './store/actions';
import Loading from '../../components/loading';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            devModal: false,
            sponsorModal: false
        };
    }

    componentDidMount() {
        const { loginReducer, callAbout, callSponsors } = this.props;
        const { token } = loginReducer;

        callAbout(token);
        callSponsors(token);
    }

    toggleDev = () => {
        const { devModal } = this.state;
        this.setState({
            devModal: !devModal
        })
    }
    toggleSponsors = () => {
        const { sponsorModal } = this.state;
        this.setState({
            sponsorModal: !sponsorModal
        })
    }

    render() {
        const { devModal, sponsorModal } = this.state;
        const { aboutReducer } = this.props;
        const { loading, about, sponsors } = aboutReducer;

        if (loading) {
            return (
                <Container>
                    <Loading text="Carregando Dados" />
                </Container>
            )
        } else {
            return (
                <Container>
                    <Development visible={devModal} close={() => this.toggleDev()} />
                    <Sponsors visible={sponsorModal} data={sponsors} close={() => this.toggleSponsors()} />
                    <AboutContainer>
                        <AboutTitle>{about.title}</AboutTitle>
                        <AboutText>{about.description}</AboutText>
                    </AboutContainer>
                    <ButtonsContainer>
                        <Button onPress={() => this.toggleSponsors()}>
                            <ButtonText>Patrocinadores</ButtonText>
                        </Button>
                        <Button onPress={() => this.toggleDev()}>
                            <ButtonText>Desenvolvimento</ButtonText>
                        </Button>
                    </ButtonsContainer>
                </Container>
            )
        }
    }

}

const mapDispatchToProps = (dispatch) => ({
    callAbout: bindActionCreators(AboutActions.callAbout, dispatch),
    callSponsors: bindActionCreators(AboutActions.callSponsors, dispatch)
});

const mapStateToProps = (state) => ({
    loginReducer: state.login,
    aboutReducer: state.about
});


export default connect(mapStateToProps, mapDispatchToProps)(About);