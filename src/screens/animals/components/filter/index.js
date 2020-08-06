import React from 'react';
import {
    ModalContainer, 
    ViewModal, 
    SubModalContainer,
   Check,
   CardCheck, 
   CardCheckText,
   ModalTitle,
   CardContainer,
   Divider,
   ButtonContainer,
   Button,
   ButtonText
} from './styles';

import Modal from 'react-native-modal';

const Filter = (props) => {
    const { visible, close, setType, setSize, type, size, clear } = props;
    return (
        <Modal isVisible={visible} onBackdropPress={() => close()}>
            <ModalContainer>
                <SubModalContainer>
                    <ViewModal>
                        <ModalTitle>Filtrar Animais</ModalTitle>
                        <CardContainer>
                            <CardCheck>
                                <Check value="Cachorro" status={type === "Cachorro" ? 'checked' : 'unchecked'} onPress={() => setType('Cachorro')}/>
                                <CardCheckText>Cachorro</CardCheckText>
                            </CardCheck>
                            <CardCheck>
                                <Check value="Gato" status={type === "Gato" ? 'checked' : 'unchecked'} onPress={() => setType('Gato')} />
                                <CardCheckText>Gato</CardCheckText>
                            </CardCheck>
                            <CardCheck>
                                <Check value="Outros" status={type === "Outros" ? 'checked' : 'unchecked'} onPress={() => setType('Outros')}/>
                                <CardCheckText>Outros</CardCheckText>
                            </CardCheck>
                        </CardContainer>
                        <Divider />
                        <CardContainer>
                            <CardCheck>
                                <Check value="Pequeno" status={size === "Pequeno" ? 'checked' : 'unchecked'} onPress={() => setSize('Pequeno')}/>
                                <CardCheckText>Pequeno</CardCheckText>
                            </CardCheck>
                            <CardCheck>
                                <Check value="Medio" status={size === "Medio" ? 'checked' : 'unchecked'} onPress={() => setSize('Medio')}/>
                                <CardCheckText>Médio</CardCheckText>
                            </CardCheck>
                            <CardCheck>
                                <Check value="Grande" status={size === "Grande" ? 'checked' : 'unchecked'} onPress={() => setSize('Grande')}/>
                                <CardCheckText>Grande</CardCheckText>
                            </CardCheck>
                        </CardContainer>
                        <Divider />
                        <ButtonContainer>
                            <Button onPress={() => clear()}>
                                <ButtonText>Limpar</ButtonText>
                            </Button>
                            <Button onPress={() => close()}>
                                <ButtonText>Fechar</ButtonText>
                            </Button>
                        </ButtonContainer>
                    </ViewModal>
                </SubModalContainer>
            </ModalContainer>
        </Modal>
    )
}

export default Filter;