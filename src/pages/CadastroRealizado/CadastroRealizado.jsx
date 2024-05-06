import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

export function CadastroRealizado() {
    const {user, setUser} = useContext(UserContext);

    return(
        <>
            TELA DE CADASTRO REALIZADO
        </>
    )
}