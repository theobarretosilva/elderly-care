import * as S from './CardProposta.styles';
import PropTypes from 'prop-types';

export const CardProposta = ({ cuidadosIdoso, nomeIdoso, idadeIdoso, nomeResponsavel, telefoneResponsavel, email }) => {
    return (
        <S.CardStyled>
            <S.TxtNome>{nomeIdoso}</S.TxtNome>
            <S.TxtInfo><b>Idade:</b> {idadeIdoso} anos</S.TxtInfo>
            <S.TxtInfo>{cuidadosIdoso}</S.TxtInfo>
            <S.Linha>‎ </S.Linha>
            <S.TxtInfo><b>Responsável:</b> {nomeResponsavel}</S.TxtInfo>
            <S.TxtInfo><b>Telefone responsável:</b> {telefoneResponsavel}</S.TxtInfo>
            <S.TxtInfo><b>E-mail de contato:</b> {email}</S.TxtInfo>
            <S.DivBtns>
                <S.BtnAceita>Aceitar</S.BtnAceita>
                <S.BtnRecusa>Recusar</S.BtnRecusa>
            </S.DivBtns>
        </S.CardStyled>
    );
}

CardProposta.propTypes = {
    cuidadosIdoso: PropTypes.string.isRequired,
    nomeIdoso: PropTypes.string.isRequired,
    idadeIdoso: PropTypes.number.isRequired,
    nomeResponsavel: PropTypes.string.isRequired,
    telefoneResponsavel: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};