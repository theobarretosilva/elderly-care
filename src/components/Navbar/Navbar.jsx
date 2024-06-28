import { useNavigate } from 'react-router'
import * as S from './Navbar.styles'
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export const Navbar = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    return(
        <S.HeaderStyled>
            <S.ImgLogoHrzntl src='../../src/assets/img/logo_horizontal.png' />
            <S.DivIcns>
                <S.IcnStyled
                    onClick={() => navigate(`/inicio${user}`)}
                    src='../../src/assets/svg/home.svg'
                />
                <S.IcnStyled
                    onClick={() => navigate(`/perfil${user}`)}
                    src='../../src/assets/svg/profile.svg'
                />
            </S.DivIcns> 
        </S.HeaderStyled>
    )
}