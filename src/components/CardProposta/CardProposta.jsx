import { useState } from 'react';
import { axiosInstance } from '../../lib/axios';
import * as S from './CardProposta.styles';
import PropTypes from 'prop-types';

export const CardProposta = ({ cuidadosIdoso, nomeIdoso, idadeIdoso, nomeResponsavel, telefoneResponsavel, email, proposta }) => {
    const [status, setStatus] = useState();

    const atualizarProposta = async (novoStatus) => {
        try {
            const token = localStorage.getItem('ElderlyCareToken');
            const payload = {
                status: novoStatus,
                id_status: proposta.id_proposal
            };

            const response = await axiosInstance.put('/proposal/update', payload, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setStatus(novoStatus); // Atualiza o estado apenas após o sucesso da requisição
        } catch (error) {
            window.alert("Não foi possível atualizar a proposta", error);
        }
    };

    return (
        <S.CardStyled>
            <S.TxtNome>{nomeIdoso}</S.TxtNome>
            <S.TxtInfo><b>Idade:</b> {idadeIdoso} anos</S.TxtInfo>
            <S.TxtInfo>{cuidadosIdoso}</S.TxtInfo>
            <S.Linha>‎ </S.Linha>
            <S.TxtInfo>Caso interesse, entrar em contato</S.TxtInfo>
            <S.TxtInfo><b>Responsável:</b> {nomeResponsavel}</S.TxtInfo>
            <S.TxtInfo><b>Telefone responsável:</b> {telefoneResponsavel}</S.TxtInfo>
            <S.TxtInfo><b>E-mail de contato:</b> {email}</S.TxtInfo>
            {proposta.status === "Aceito" ? (
                    <S.DivBtns>
                        <S.BtnAceita onClick={() => atualizarProposta(true)}>Aceitar</S.BtnAceita>
                        <S.BtnRecusa onClick={() => atualizarProposta(false)}>Recusar</S.BtnRecusa>
                    </S.DivBtns>) : (
                    <S.TxtPropAceita>Proposta aceita!</S.TxtPropAceita>
                )}
        </S.CardStyled>
    );
}

CardProposta.propTypes = {
    cuidadosIdoso: PropTypes.string.isRequired,
    nomeIdoso: PropTypes.string.isRequired,
    idadeIdoso: PropTypes.string.isRequired,
    nomeResponsavel: PropTypes.string.isRequired,
    telefoneResponsavel: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    proposta: PropTypes.object.isRequired
};
