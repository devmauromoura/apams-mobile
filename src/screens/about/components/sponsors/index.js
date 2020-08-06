import React from 'react';
import Modal from 'react-native-modal';
import {
    ContainerModal,
    Button,
    ButtonText,
    ContainerData,
    DataTitle,
    CardDev,
    CardImage,
    CardText,
    CardTitle,
    CardDescription
} from './styles';

import { URL } from '../../../../services/api';

const Sponsors = (props) => {
    const { visible, close, data } = props;
    return (
        <Modal isVisible={visible} onBackdropPress={() => close()} style={{
            alignItems: 'center'
        }}>
            <ContainerModal>
                <ContainerData>
                    <DataTitle>Patrocinadores</DataTitle>
                    {
                        data ?
                            data.map(item => (
                                <CardDev>
                                    <CardImage source={{ uri: URL + item.avatar }} resizeMode="contain" />
                                    <CardText>
                                        <CardTitle>{item.name}</CardTitle>
                                        <CardDescription>{item.description}</CardDescription>
                                    </CardText>
                                </CardDev>
                            ))
                            :
                            null
                    }
                </ContainerData>
                <Button onPress={() => close()}>
                    <ButtonText>Fechar</ButtonText>
                </Button>
            </ContainerModal>
        </Modal>
    )
}

export default Sponsors;