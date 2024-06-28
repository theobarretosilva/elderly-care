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
import { useNavigate } from 'react-router';
import ReactInputMask from 'react-input-mask';

export function CadastroCuidador() {
    const navigate = useNavigate();
    const { onSubmit, register, isLoading, responseError, errors } = useCreateAccountCuidador();

    const SignInButtonLabel = isLoading ? (
        <CircularProgress size="1.5rem" color="inherit" />
    ) : (
        'Criar Conta'
    );

    const [visible, setVisible] = useState(false);
    
    return (
        <>
            <S.DivVoltar  onClick={() => navigate('/escolhaCadastro')}>
                <S.ImgSeta src={arrowLeft} />
                <S.TxtVoltar>Voltar</S.TxtVoltar>
            </S.DivVoltar>
            <S.MainStyled>
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
                                        {...register('name')}
                                    />
                                    {errors.nomeCompleto && <ErrorText>{errors.nomeCompleto.message}</ErrorText>}
                                </S.DivInput>
                                <S.DivInput>
                                    <ReactInputMask
                                        mask="999.999.999-99"
                                        {...register('cpf')}
                                    >
                                        {(inputProps) => <S.InputStyled {...inputProps} type="text" placeholder="CPF" />}
                                    </ReactInputMask>
                                    {errors.cpf && <ErrorText>{errors.cpf.message}</ErrorText>}
                                </S.DivInput>
                                <S.DivInput>
                                    <ReactInputMask
                                        mask="(99) 99999-9999"
                                        {...register('phone')}
                                    >
                                        {(inputProps) => <S.InputStyled {...inputProps} type="tel" placeholder="Telefone" />}
                                    </ReactInputMask>
                                    {errors.telefone && <ErrorText>{errors.telefone.message}</ErrorText>}
                                </S.DivInput>
                                <S.DivInput>
                                    <ReactInputMask
                                        mask="99/99/9999"
                                        {...register('date_birth')}
                                    >
                                        {(inputProps) => <S.InputStyled {...inputProps} type="text" placeholder="Data de nascimento" />}
                                    </ReactInputMask>
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
                                        {...register('password')}
                                    />
                                    <S.IconStyled
                                        src={visible ? eyeClosedIcon : eyeIcon}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setVisible(!visible)}
                                    />
                                    {errors.senha && <ErrorText>{errors.senha.message}</ErrorText>}
                                </S.DivInput>
                                <S.DivInput>
                                    <S.InputStyled
                                        type='url'
                                        placeholder='Link foto de perfil'
                                        {...register('photoLink')}
                                    />
                                    {errors.linkFoto && <ErrorText>{errors.linkFoto.message}</ErrorText>}
                                </S.DivInput>
                            </S.BoxForm>
                        </S.DivLogoForm1>
                        <S.BoxForm2>
                            <S.DivFormEndereco>
                                <S.DivInput style={{width: '48%'}}>
                                    <ReactInputMask
                                        mask="99999-999"
                                        {...register('address.cep')}
                                    >
                                        {(inputProps) => <S.InputStyled {...inputProps} type="text" placeholder="CEP" />}
                                    </ReactInputMask>
                                    {errors.cep && <ErrorText>{errors.cep.message}</ErrorText>}
                                </S.DivInput>
                                <S.DivInput style={{width: '48%'}}>
                                    <S.InputStyled
                                        type='text'
                                        placeholder='Rua'
                                        {...register('address.street')}
                                    />
                                    {errors.rua && <ErrorText>{errors.rua.message}</ErrorText>}
                                </S.DivInput>
                                <S.DivInput style={{width: '48%'}}>
                                    <S.InputStyled
                                        type='number'
                                        placeholder='Número'
                                        {...register('address.number')}
                                    />
                                    {errors.numero && <ErrorText>{errors.numero.message}</ErrorText>}
                                </S.DivInput>
                                <S.DivInput style={{width: '48%'}}>
                                    <S.InputStyled
                                        type='text'
                                        placeholder='Bairro'
                                        {...register('address.distric')}
                                    />
                                    {errors.bairro && <ErrorText>{errors.bairro.message}</ErrorText>}
                                </S.DivInput>
                                <S.DivInput style={{width: '48%'}}>
                                    <S.InputStyled
                                        type='text'
                                        placeholder='Cidade'
                                        {...register('address.city')}
                                    />
                                    {errors.cidade && <ErrorText>{errors.cidade.message}</ErrorText>}
                                </S.DivInput>
                                <S.DivInput style={{width: '48%'}}>
                                    <S.InputStyled
                                        type='text'
                                        placeholder='Estado'
                                        {...register('address.state')}
                                    />
                                    {errors.estado && <ErrorText>{errors.estado.message}</ErrorText>}
                                </S.DivInput>
                                <S.DivInput style={{width: '48%'}}>
                                    <S.InputStyled
                                        type='text'
                                        placeholder='Complemento'
                                        {...register('address.complement')}
                                    />
                                    {errors.complemento && <ErrorText>{errors.complemento.message}</ErrorText>}
                                </S.DivInput>
                            </S.DivFormEndereco>
                            <S.Linha />
                            <S.TxtSobreVoce>Nos conte um pouco sobre você</S.TxtSobreVoce>
                            <S.DivFormEndereco>
                                <S.DivInput  style={{width: '48%'}}>
                                    <S.SelectStyled {...register('experience')}>
                                        <option value="" disabled>Tempo de experiência na área</option>
                                        <option value="0-1 anos">0 - 1 anos</option>
                                        <option value="1-2 anos">1 - 2 anos</option>
                                        <option value="2-3 anos">2 - 3 anos</option>
                                        <option value="3-5 anos">3 - 5 anos</option>
                                        <option value="5+ anos">+5 anos</option>
                                    </S.SelectStyled>
                                    {errors.tempoExperiencia && <ErrorText>{errors.tempoExperiencia.message}</ErrorText>}
                                </S.DivInput>
                                <S.DivInput  style={{width: '48%'}}>
                                    <S.SelectStyled {...register('training_time')}>
                                        <option value="" disabled>Formado(a) a quanto tempo?</option>
                                        <option value="0-1 anos">0 - 1 anos</option>
                                        <option value="1-2 anos">1 - 2 anos</option>
                                        <option value="2-3 anos">2 - 3 anos</option>
                                        <option value="3-5 anos">3 - 5 anos</option>
                                        <option value="5+ anos">+5 anos</option>
                                    </S.SelectStyled>
                                    {errors.tempoFormacao && <ErrorText>{errors.tempoFormacao.message}</ErrorText>}
                                </S.DivInput>
                            </S.DivFormEndereco>
                            <S.TextAreaStyled placeholder='Descreva casos em que você trabalhou...' {...register('description_experience')} />
                            {errors.casosTrabalho && <ErrorText>{errors.casosTrabalho.message}</ErrorText>}
                            <S.BtnCadastrar>{SignInButtonLabel}</S.BtnCadastrar>
                            {!!responseError && <ErrorText>{responseError}</ErrorText>}
                        </S.BoxForm2>
                    </S.DivLogoForm>
                </form>
                <Toaster position="bottom-center" />
            </S.MainStyled>
        </>
    );
}
