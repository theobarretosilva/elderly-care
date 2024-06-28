import * as S from './CadastroResponsavel.styles'
import arrowLeft from '../../assets/svg/arrow-left.svg';
import { useNavigate } from 'react-router';
import logoCompleta from '../../assets/img/logo_completa.png';
import eyeIcon from '../../assets/svg/eye.svg';
import eyeClosedIcon from '../../assets/svg/eye_closed.svg';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { ErrorText } from '../../components/ErrorText/ErrorText';
import { useCreateAccountResponsavel } from '../../hooks/useCreateAccountResponsavel';
import { Toaster } from 'react-hot-toast';
import ReactInputMask from 'react-input-mask';

export function CadastroResponsavel() {
    const navigate = useNavigate();
    const { onSubmit, register, isLoading, responseError, errors } = useCreateAccountResponsavel();

    const [visible, setVisible] = useState(false);

    const SignInButtonLabel = isLoading ? (
        <CircularProgress size="1.5rem" color="inherit" />
    ) : (
        'Criar Conta'
    );

    return(
        <>
            <S.DivVoltar onClick={() => navigate('/escolhaCadastro')}>
                <S.ImgSeta src={arrowLeft} />
                <S.TxtVoltar>Voltar</S.TxtVoltar>
            </S.DivVoltar>
            <S.MainStyled>
                <S.LogoStyled src={logoCompleta} />
                <S.DivGeralStyled>
                    <S.DivForm>
                        <S.BoxForm>
                            <S.TxtWelcome>Olá, cadastre-se para começar 👋</S.TxtWelcome>
                            <S.TxtInsertInfo>Insira suas informações, como responsável pelo idoso</S.TxtInsertInfo>
                            <form onSubmit={onSubmit}>
                                <S.DivInput>
                                    <S.InputStyled
                                        type='text'
                                        placeholder='Nome completo'
                                        {...register('name')}
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
                                        {...register('address')}
                                    />
                                    {errors.endereco && <ErrorText>{errors.endereco.message}</ErrorText>}
                                </S.DivInput>
                                <S.DivInput>
                                    <S.InputStyled
                                        type='tel'
                                        placeholder='Telefone'
                                        {...register('phone')}
                                    />
                                    {errors.telefone && <ErrorText>{errors.telefone.message}</ErrorText>}
                                </S.DivInput>
                                <S.DivInput>
                                    <S.InputStyled
                                        type='text'
                                        placeholder='Parentesco'
                                        {...register('kinship')}
                                    />
                                    {errors.parentesco && <ErrorText>{errors.parentesco.message}</ErrorText>}
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
                                {!!responseError && <ErrorText>{responseError}</ErrorText>}
                            </form>
                        </S.BoxForm>
                    </S.DivForm>
                    <S.BoxForm>
                        <S.DivInput>
                            <S.InputStyled
                                type='url'
                                placeholder='Link foto de perfil'
                                {...register('photoLink')}
                            />
                            {errors.linkFoto && <ErrorText>{errors.linkFoto.message}</ErrorText>}
                        </S.DivInput>
                        <S.DivInput>
                            <ReactInputMask
                                mask="99999-999"
                                {...register('endereco.cep')}
                            >
                                {(inputProps) => <S.InputStyled {...inputProps} type="text" placeholder="CEP" />}
                            </ReactInputMask>
                            {errors.cep && <ErrorText>{errors.cep.message}</ErrorText>}
                        </S.DivInput>
                        <S.DivInput>
                            <S.InputStyled
                                type='text'
                                placeholder='Rua'
                                {...register('endereco.street')}
                            />
                            {errors.rua && <ErrorText>{errors.rua.message}</ErrorText>}
                        </S.DivInput>
                        <S.DivInput>
                            <S.InputStyled
                                type='number'
                                placeholder='Número'
                                {...register('endereco.number')}
                            />
                            {errors.numero && <ErrorText>{errors.numero.message}</ErrorText>}
                        </S.DivInput>
                        <S.DivInput>
                            <S.InputStyled
                                type='text'
                                placeholder='Bairro'
                                {...register('endereco.district')}
                            />
                            {errors.bairro && <ErrorText>{errors.bairro.message}</ErrorText>}
                        </S.DivInput>
                        <S.DivInput>
                            <S.InputStyled
                                type='text'
                                placeholder='Cidade'
                                {...register('endereco.city')}
                            />
                            {errors.cidade && <ErrorText>{errors.cidade.message}</ErrorText>}
                        </S.DivInput>
                        <S.DivInput>
                            <S.InputStyled
                                type='text'
                                placeholder='Estado'
                                {...register('endereco.state')}
                            />
                            {errors.estado && <ErrorText>{errors.estado.message}</ErrorText>}
                        </S.DivInput>
                        <S.DivInput>
                            <S.InputStyled
                                type='text'
                                placeholder='Complemento'
                                {...register('endereco.complement')}
                            />
                            {errors.complemento && <ErrorText>{errors.complemento.message}</ErrorText>}
                        </S.DivInput>
                        <S.BtnCadastrar>{SignInButtonLabel}</S.BtnCadastrar>
                        {!!responseError && <ErrorText>{responseError}</ErrorText>}
                    </S.BoxForm>
                    <S.ImgSideForm src='../../src/assets/svg/cadastro_responsavel.svg' />
                </S.DivGeralStyled>
                <Toaster position="bottom-center" />
            </S.MainStyled>
        </>
    )
}
