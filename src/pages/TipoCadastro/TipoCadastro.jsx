import * as S from './TipoCadastro.styles';
import logoCompleta from '../../assets/img/logo_completa.png';
import ingressoIdoso from '../../assets/img/ingresso_idoso.png';
import ingressoCuidador from '../../assets/img/ingresso_cuidador.png';
import { useNavigate } from 'react-router';
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export function TipoCadastro() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const escolhaIdoso = () => {
        setUser("Idoso");
        navigate('/cadastroResponsavel');
    };

    const escolhaCuidador = () => {
        setUser("Cuidador");
        navigate('/cadastroCuidador');
    };

    return (
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
    );
}
