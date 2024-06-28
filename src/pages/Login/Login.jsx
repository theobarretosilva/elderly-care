import { useContext, useState } from 'react';
import * as S from './Login.styles';
import logoCompleta from '../../assets/img/logo_completa.png';
import eyeIcon from '../../assets/svg/eye.svg';
import eyeClosedIcon from '../../assets/svg/eye_closed.svg';
import mailIcon from '../../assets/svg/mail.svg';
import { useNavigate } from 'react-router';
import { CircularProgress, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useLogin } from '../../hooks/useLogin';
import { ErrorText } from '../../components/ErrorText/ErrorText';
import { UserContext } from '../../context/UserContext';

export function Login() {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const [value, setValue] = useState('patients');

    const handleChange = (event) => {
        setValue((event.target).value);
    };

    const { isLoading, onSubmit, errors, register, responseError } = useLogin(value)

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
                <form onSubmit={onSubmit}>
                    <S.PInsInf>Insira suas informações</S.PInsInf>
                    <S.DivInput>
                        <S.InputStyled type='text' placeholder='E-mail' {...register('email')}/>
                        <S.IconStyled src={mailIcon} />
                    </S.DivInput>
                    {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                    <S.DivInput>
                        <S.InputStyled type={visible ? 'text' : 'password'} placeholder='Senha' {...register('password')}/>
                        <S.IconStyled 
                            src={visible ? eyeClosedIcon : eyeIcon} 
                            style={{cursor: 'pointer'}} 
                            onClick={() => setVisible(!visible)} 
                        />
                    </S.DivInput>
                    {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
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
                            <FormControlLabel onClick={setUser('Idoso')} value="patients" control={<Radio />} label="Responsável" />
                            <FormControlLabel onClick={setUser('Cuidador')} value="caregiver" control={<Radio />} label="Cuidador" />
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
            </S.BoxLogin>
        </S.MainStyled>
    );
}
