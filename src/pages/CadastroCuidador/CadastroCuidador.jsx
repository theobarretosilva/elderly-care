import * as S from './CadastroCuidador.styles';
import logoCompleta from '../../assets/img/logo_completa.png';
import eyeIcon from '../../assets/svg/eye.svg';
import eyeClosedIcon from '../../assets/svg/eye_closed.svg';
import arrowLeft from '../../assets/svg/arrow-left.svg';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useCreateAccountCuidador } from '../../hooks/useCreateAccountCuidador';
import { Toaster } from 'react-hot-toast';
import { ErrorText } from '../../components/ErrorText/ErrorText';

export function CadastroCuidador() {
    const { onSubmit, register, isLoading, responseError, errors } = useCreateAccountCuidador();

    const SignInButtonLabel = isLoading ? (
        <CircularProgress size="1.5rem" color="inherit" />
    ) : (
        'Criar Conta'
    );

    const [visible, setVisible] = useState(false);

    return (
        <S.MainStyled>
            <S.DivVoltar>
                <S.ImgSeta src={arrowLeft} />
                <S.TxtVoltar>Voltar</S.TxtVoltar>
            </S.DivVoltar>
            <form onSubmit={onSubmit}>
                <S.DivLogoForm>
                    <S.DivLogoForm1>
                        <S.LogoStyled src={logoCompleta} />
                        <S.BoxForm>
                            <S.TxtWelcome>Olá, cadastre-se para começar 👋</S.TxtWelcome>
                            <S.TxtInsertInfo>Insira suas informações abaixo</S.TxtInsertInfo>
                            <S.DivInput>
                                <S.InputStyled
                                    type='text'
                                    placeholder='Nome completo'
                                    {...register('nomeCompleto')}
                                />
                                {errors.nomeCompleto && <ErrorText>{errors.nomeCompleto.message}</ErrorText>}
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled
                                    type='text'
                                    placeholder='CPF'
                                    {...register('cpf')}
                                />
                                {errors.cpf && <ErrorText>{errors.cpf.message}</ErrorText>}
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled
                                    type='text'
                                    placeholder='Endereço'
                                    {...register('endereco')}
                                />
                                {errors.endereco && <ErrorText>{errors.endereco.message}</ErrorText>}
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled
                                    type='tel'
                                    placeholder='Telefone'
                                    {...register('telefone')}
                                />
                                {errors.telefone && <ErrorText>{errors.telefone.message}</ErrorText>}
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled
                                    type='text'
                                    placeholder='Data de nascimento'
                                    {...register('dataNascimento')}
                                />
                                {errors.dataNascimento && <ErrorText>{errors.dataNascimento.message}</ErrorText>}
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled
                                    type='text'
                                    placeholder='E-mail'
                                    {...register('email')}
                                />
                                {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled
                                    type={visible ? 'text' : 'password'}
                                    placeholder='Senha'
                                    {...register('senha')}
                                />
                                <S.IconStyled
                                    src={visible ? eyeClosedIcon : eyeIcon}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setVisible(!visible)}
                                />
                                {errors.senha && <ErrorText>{errors.senha.message}</ErrorText>}
                            </S.DivInput>
                        </S.BoxForm>
                    </S.DivLogoForm1>
                    <S.BoxForm2>
                        <S.TxtSobreVoce>Nos conte um pouco sobre você</S.TxtSobreVoce>
                        <S.DivInput>
                            <S.SelectStyled {...register('tempoExperiencia')}>
                                <option value="" disabled>Quanto tempo de experiência na área você tem?</option>
                                <option value="0-1">0 - 1 anos</option>
                                <option value="1-2">1 - 2 anos</option>
                                <option value="2-3">2 - 3 anos</option>
                                <option value="3-5">3 - 5 anos</option>
                                <option value="5+">+5 anos</option>
                            </S.SelectStyled>
                            {errors.tempoExperiencia && <ErrorText>{errors.tempoExperiencia.message}</ErrorText>}
                        </S.DivInput>
                        <S.TextAreaStyled placeholder='Descreva casos em que você trabalhou...' {...register('casosTrabalho')} />
                        {errors.casosTrabalho && <ErrorText>{errors.casosTrabalho.message}</ErrorText>}
                        <S.DivInput>
                            <S.SelectStyled {...register('tempoFormacao')}>
                                <option value="" disabled>É formado a quanto tempo?</option>
                                <option value="0-1">0 - 1 anos</option>
                                <option value="1-2">1 - 2 anos</option>
                                <option value="2-3">2 - 3 anos</option>
                                <option value="3-5">3 - 5 anos</option>
                                <option value="5+">+5 anos</option>
                            </S.SelectStyled>
                            {errors.tempoFormacao && <ErrorText>{errors.tempoFormacao.message}</ErrorText>}
                        </S.DivInput>
                        <S.BtnCadastrar>{SignInButtonLabel}</S.BtnCadastrar>
                        {!!responseError && <ErrorText>{responseError}</ErrorText>}
                    </S.BoxForm2>
                </S.DivLogoForm>
            </form>
            <Toaster position="bottom-center" />
        </S.MainStyled>
    );
}
