import React from 'react';
import Modal from 'react-native-modal';
import {
    ContainerModal,
    Button,
    ButtonText,
    ContainerData,
    DataTitle,
    CardDev,
    CardIcon,
    CardText,
    CardTitle,
    CardDescription
} from './styles';

import { Linking } from 'react-native';

const callLink = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
        await Linking.openURL(url);
    }
}

const Development = (props) => {
    const { visible, close } = props;
    return (
        <Modal isVisible={visible} onBackdropPress={() => close()} style={{
            alignItems: 'center'
        }}>
            <ContainerModal>
                <ContainerData>
                    <DataTitle>Desenvolvimento</DataTitle>
                    <CardDev onPress={() => callLink('https://github.com/devmauromoura/')}>
                        <CardIcon name="information" />
                        <CardText>
                            <CardTitle>Mauro P. Moura</CardTitle>
                            <CardDescription>devmauromoura@gmail.com</CardDescription>
                            <CardDescription>Desenvolvedor</CardDescription>
                        </CardText>
                    </CardDev>
                    <CardDev onPress={() => callLink('https://github.com/gabrielmarcato/')}>
                        <CardIcon name="information" />
                        <CardText>
                            <CardTitle>Gabriel O. Marcato</CardTitle>
                            <CardDescription>gabrielomarcato@gmail.com</CardDescription>
                            <CardDescription>Desenvolvedor</CardDescription>
                        </CardText>
                    </CardDev>
                    <CardDev onPress={() => callLink('http://www.fasipe.com.br/')}>
                        <CardIcon name="information" />
                        <CardText>
                            <CardTitle>Universidade Fasipe</CardTitle>
                            <CardDescription>Provedora do Projeto</CardDescription>
                        </CardText>
                    </CardDev>
                </ContainerData>
                <Button onPress={() => close()}>
                    <ButtonText>Fechar</ButtonText>
                </Button>
            </ContainerModal>
        </Modal>
    )
}

export default Development;