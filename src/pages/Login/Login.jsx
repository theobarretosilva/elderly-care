import { useState } from 'react';
import * as S from './Login.styles';
import logoCompleta from '../../assets/img/logo_completa.png';
import eyeIcon from '../../assets/svg/eye.svg';
import eyeClosedIcon from '../../assets/svg/eye_closed.svg';
import mailIcon from '../../assets/svg/mail.svg';
import { useNavigate } from 'react-router';
import { CircularProgress, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useLogin } from '../../hooks/useLogin';
import { ErrorText } from '../../components/ErrorText/ErrorText';
import toast, { Toaster } from 'react-hot-toast';
import { axiosInstance } from '../../lib/axios';

export function Login() {
    const [value, setValue] = useState('Idoso');
    const [usuario, setUsuario] = useState();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const payload = { email, password };

    const fazerLogin = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axiosInstance.post(
                `${value}/signin`,
                payload
            );
            console.log(data)

            if (data.token) {
                localStorage.setItem('ElderlyCareToken', data.token);
                axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
                localStorage.setItem("Usuario atual", value);
                toast.success("Login concluído com sucesso! Redirecionando para a página inicial", {duration: 3000});
                setTimeout(() => navigate(`/logged/inicio${usuario}`), 3000);
            }

            if (data === "E-mail e/ou senha incorretos") {
                toast.error(data, {
                    duration: 3000
                })
            }
        } catch (error) {
            console.log("Não foi possível fazer login", error)
        }
        
    }

    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setValue((event.target).value);
    };

    const { isLoading, errors, register, responseError } = useLogin(value)

    const LoginButtonLabel = isLoading ? (
        <CircularProgress size="1.5rem" color="inherit" />
    ) : (
        'Entrar'
    );

    return(
        <S.MainStyled>
            <S.LogoStyled src={logoCompleta} />
            <S.BoxLogin>
                <S.TxtWelcome>Olá, bem vindo(a) de volta 👋</S.TxtWelcome>
                <form onSubmit={fazerLogin}>
                    <S.PInsInf>Insira suas informações</S.PInsInf>
                    <S.DivInput>
                        <S.InputStyled
                            type='text'
                            placeholder='E-mail'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <S.IconStyled src={mailIcon} />
                    </S.DivInput>
                    <S.DivInput>
                        <S.InputStyled
                            type={visible ? 'text' : 'password'}
                            placeholder='Senha'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <S.IconStyled 
                            src={visible ? eyeClosedIcon : eyeIcon} 
                            style={{cursor: 'pointer'}} 
                            onClick={() => setVisible(!visible)} 
                        />
                    </S.DivInput>
                    <S.PEsqueciSenha>Esqueceu a senha?</S.PEsqueciSenha>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Tipo de login</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel onChange={() => setUsuario('Idoso')} value="patients" control={<Radio />} label="Responsável" />
                            <FormControlLabel onChange={() => setUsuario('Cuidador')} value="caregiver" control={<Radio />} label="Cuidador" />
                        </RadioGroup>
                    </FormControl>
                    <S.BtnEntrar>{LoginButtonLabel}</S.BtnEntrar>
                    {!!responseError && <ErrorText>{responseError}</ErrorText>}
                    <S.PCriarConta>Não tem uma conta? 
                        <span onClick={() => navigate('/escolhaCadastro')} style={{color: '#0077B6', cursor: 'pointer'}}>
                            ‎ Registre-se
                        </span>
                    </S.PCriarConta>
                </form>
                <Toaster position="bottom-center" />
            </S.BoxLogin>
        </S.MainStyled>
    );
}
