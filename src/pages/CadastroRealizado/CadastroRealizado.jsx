import * as S from './CadastroRealizado.styles'
import { useNavigate } from "react-router";

export function CadastroRealizado() {
    const navigate = useNavigate()
    const user = localStorage.getItem("Usuario atual");

    if (user == "Elder") {
        setTimeout(() => navigate('/inicioIdoso'), 3 * 1000)
    } else {
        setTimeout(() => navigate('/InicioCuidador'), 3 * 1000)
    }

    return(
        <S.MainStyled>
            <S.TxtCadRea>Cadastro realizado!</S.TxtCadRea>
            <S.ImgCadRea src='../../src/assets/svg/cadastro_realizado.svg' />
        </S.MainStyled>
    )
}