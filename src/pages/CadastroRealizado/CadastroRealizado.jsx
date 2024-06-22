// import { useContext } from "react"
// import { UserContext } from "../../context/UserContext"
import * as S from './CadastroRealizado.styles'

export function CadastroRealizado() {
    // const {user, setUser} = useContext(UserContext);

    return(
        <S.MainStyled>
            <S.TxtCadRea>Cadastro realizado!</S.TxtCadRea>
            <S.ImgCadRea src='../../src/assets/svg/cadastro_realizado.svg' />
        </S.MainStyled>
    )
}