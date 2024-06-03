import { useState } from 'react';
import * as S from './Login.styles';
import logoCompleta from '../../assets/img/logo_completa.png';
import eyeIcon from '../../assets/svg/eye.svg';
import eyeClosedIcon from '../../assets/svg/eye_closed.svg';
import mailIcon from '../../assets/svg/mail.svg';
import { useNavigate } from 'react-router';

export function Login() {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    return(
        <S.MainStyled>
            <S.LogoStyled src={logoCompleta} />
            <S.BoxLogin>
                <S.TxtWelcome>Olá, bem vindo(a) de volta 👋</S.TxtWelcome>
                <form>
                    <S.PInsInf>Insira suas informações</S.PInsInf>
                    <S.DivInput>
                        <S.InputStyled type='text' />
                        <S.IconStyled src={mailIcon} />
                    </S.DivInput>
                    <S.DivInput>
                        <S.InputStyled type={visible ? 'text' : 'password'} />
                        <S.IconStyled 
                            src={visible ? eyeClosedIcon : eyeIcon} 
                            style={{cursor: 'pointer'}} 
                            onClick={() => setVisible(!visible)} 
                        />
                    </S.DivInput>
                    <S.PEsqueciSenha>Esqueceu a senha?</S.PEsqueciSenha>
                    <S.BtnEntrar>Entrar</S.BtnEntrar>
                    <S.PCriarConta>Não tem uma conta? 
                        <span onClick={() => navigate('/escolhaCadastro')} style={{color: '#0077B6', cursor: 'pointer'}}>
                            Registre-se
                        </span>
                    </S.PCriarConta>
                </form>
            </S.BoxLogin>
        </S.MainStyled>
    );
}
