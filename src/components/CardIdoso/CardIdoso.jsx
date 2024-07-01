import * as S from './CardIdoso.styles';
import { axiosInstance } from '../../lib/axios';
import PropTypes from 'prop-types';

export const CardIdoso = ({ idoso, cuidador }) => {
    const payload = {
        caregiver_id: cuidador.id_caregiver,
        elder_id: idoso.id_elder
    };

    const selecionarIdoso = async () => {
        try {
            const token = localStorage.getItem('ElderlyCareToken');

            const response = await axiosInstance.post('/proposal/send', payload, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

        } catch (error) {
            console.error('Failed to send proposal:', error);
        }
    };

    return (
        <S.Modal key={idoso.id_elder}>
            <S.ModalHeader>
                <S.ModalTitle>{idoso.name}</S.ModalTitle>
                <S.ModalCloseButton onClick={() => setIsModalOpen(false)}>X</S.ModalCloseButton>
            </S.ModalHeader>
            <S.ModalContent>
                <S.FotoIdoso src={idoso.photo} />
            </S.ModalContent>
            <S.ModalFooter>
                <S.BtnConfirm onClick={selecionarIdoso}>Selecionar idoso</S.BtnConfirm>
            </S.ModalFooter>
        </S.Modal>
    );
};

CardIdoso.propTypes = {
    idoso: PropTypes.object.isRequired,
    cuidador: PropTypes.object.isRequired,
};
