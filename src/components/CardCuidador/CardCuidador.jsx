import * as S from './CardCuidador.styles';
import PropTypes from 'prop-types';

export const CardCuidador = ({ linkFoto, nome, idade, experiencia, formacao, certificacoes }) => {
    return (
        <S.CardStyled>
            <S.ImgCuidador src={linkFoto} />
            <S.DivInfo>
                <S.TxtNome>{nome}</S.TxtNome>
                <S.TxtInfo>Idade: {idade}</S.TxtInfo>
                <S.TxtInfo>Experiência: {experiencia}</S.TxtInfo>
                <S.TxtInfo>Formado(a) faz: {formacao}</S.TxtInfo>
                <S.TxtInfo>Certificações: {certificacoes}</S.TxtInfo>
            </S.DivInfo>
        </S.CardStyled>
    );
}

CardCuidador.propTypes = {
    linkFoto: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    experiencia: PropTypes.string.isRequired,
    formacao: PropTypes.string.isRequired,
    certificacoes: PropTypes.string.isRequired
};
