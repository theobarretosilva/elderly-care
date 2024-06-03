import * as S from './TipoCadastro.styles'
import logoCompleta from '../../assets/img/logo_completa.png';
import { useNavigate } from 'react-router';

export function TipoCadastro() {
    const navigate = useNavigate();

    return(
        <S.MainStyled>
            <S.LogoStyled src={logoCompleta} />
            <S.TxtIngresso>Escolha uma forma de ingressar como usuário</S.TxtIngresso>
            <S.DivBtns>
                <S.BtnEscolha onClick={() => navigate('/cadastroIdoso')}>
                    <S.ImgEscolha src='../../src/assets/img/ingresso_idoso.png' />
                    <S.TxtEscolha>Idoso(a)</S.TxtEscolha>
                </S.BtnEscolha>
                <S.BtnEscolha onClick={() => navigate('/cadastroCuidador')}>
                    <S.ImgEscolha src='../../src/assets/img/ingresso_cuidador.png' />
                    <S.TxtEscolha>Cuidador(a)</S.TxtEscolha>
                </S.BtnEscolha>
            </S.DivBtns>
        </S.MainStyled>
    )
}