import { useNavigate } from 'react-router'
import * as S from './Navbar.styles'

export const Navbar = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem("Usuario atual");

    if (user === "patients") {
        return(
            <S.HeaderStyled>
                <S.ImgLogoHrzntl src='../../src/assets/img/logo_horizontal.png' />
                <S.DivIcns>
                    <S.IcnStyled
                        onClick={() => navigate(`/logged/inicioIdoso`)}
                        src='../../src/assets/svg/home.svg'
                    />
                    <S.IcnStyled
                        onClick={() => navigate(`/logged/perfilIdosoEResponsavel`)}
                        src='../../src/assets/svg/profile.svg'
                    />
                </S.DivIcns> 
            </S.HeaderStyled>
        )
    }

    if (user === "caregiver") {
        return(
            <S.HeaderStyled>
                <S.ImgLogoHrzntl src='../../src/assets/img/logo_horizontal.png' />
                <S.DivIcns>
                    <S.IcnStyled
                        onClick={() => navigate(`/logged/inicioCuidador`)}
                        src='../../src/assets/svg/home.svg'
                    />
                    <S.IcnStyled
                        onClick={() => navigate(`/logged/perfilCuidador`)}
                        src='../../src/assets/svg/profile.svg'
                    />
                </S.DivIcns> 
            </S.HeaderStyled>
        )
    }
    
}