import * as S from './TipoCadastro.styles';
import logoCompleta from '../../assets/img/logo_completa.png';
import ingressoIdoso from '../../assets/img/ingresso_idoso.png';
import ingressoCuidador from '../../assets/img/ingresso_cuidador.png';
import { useNavigate } from 'react-router';
import arrowLeft from '../../assets/svg/arrow-left.svg';

export function TipoCadastro() {
    const navigate = useNavigate();

    const escolhaIdoso = () => {
        localStorage.setItem("Usuario atual", "Elder");
        navigate('/cadastroResponsavel');
    };

    const escolhaCuidador = () => {
        localStorage.setItem("Usuario atual", "Caregiver")
        navigate('/cadastroCuidador');
    };

    return (
        <>
            <S.DivVoltar  onClick={() => navigate('/')}>
                <S.ImgSeta src={arrowLeft} />
                <S.TxtVoltar>Voltar</S.TxtVoltar>
            </S.DivVoltar>
            <S.MainStyled>
                <S.LogoStyled src={logoCompleta} />
                <S.TxtIngresso>Escolha uma forma de ingressar como usuário</S.TxtIngresso>
                <S.DivBtns>
                    <S.BtnEscolha onClick={escolhaIdoso}>
                        <S.ImgEscolha src={ingressoIdoso} />
                        <S.TxtEscolha>Idoso(a)</S.TxtEscolha>
                    </S.BtnEscolha>
                    <S.BtnEscolha onClick={escolhaCuidador}>
                        <S.ImgEscolha src={ingressoCuidador} />
                        <S.TxtEscolha>Cuidador(a)</S.TxtEscolha>
                    </S.BtnEscolha>
                </S.DivBtns>
            </S.MainStyled>
        </>
        
    );
}
