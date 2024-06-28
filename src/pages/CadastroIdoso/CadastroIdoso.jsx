/* eslint-disable no-unused-vars */
import * as S from './CadastroIdoso.styles'
import arrowLeft from '../../assets/svg/arrow-left.svg';
import { useNavigate } from 'react-router';
import logoCompleta from '../../assets/img/logo_completa.png';
import { ErrorText } from '../../components/ErrorText/ErrorText';
import ReactInputMask from 'react-input-mask';
import { CircularProgress } from '@mui/material';
import { useCreateAccountIdoso } from '../../hooks/useCreateAccountIdoso'

export function CadastroIdoso() {
    const navigate = useNavigate();
    const { onSubmit, register, isLoading, responseError, errors } = useCreateAccountIdoso();

    const SignInButtonLabel = isLoading ? (
        <CircularProgress size="1.5rem" color="inherit" />
    ) : (
        'Criar Conta'
    );

    return(
        <>
            <S.DivVoltar  onClick={() => navigate('/cadastroResponsavel')}>
                <S.ImgSeta src={arrowLeft} />
                <S.TxtVoltar>Voltar</S.TxtVoltar>
            </S.DivVoltar>
            <S.MainStyled>
                <form onSubmit={onSubmit}>
                    <S.DivLogoForm>
                        <S.DivLogoForm1>
                            <S.LogoStyled src={logoCompleta} />
                            <S.BoxForm>
                                <S.TxtWelcome>Agora vamos aos dados do idoso</S.TxtWelcome>
                                <S.TxtInsertInfo>Insira as informações do idoso</S.TxtInsertInfo>
                                <S.DivFormEndereco>
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
                                            mask="99/99/9999"
                                            {...register('date_birth')}
                                        >
                                            {(inputProps) => <S.InputStyled {...inputProps} type="text" placeholder="Data de nascimento" />}
                                        </ReactInputMask>
                                        {errors.dataNascimento && <ErrorText>{errors.dataNascimento.message}</ErrorText>}
                                    </S.DivInput>
                                    <S.DivInput>
                                        <S.InputStyled
                                            type='url'
                                            placeholder='Link foto de perfil'
                                            {...register('photoLink')}
                                        />
                                        {errors.linkFoto && <ErrorText>{errors.linkFoto.message}</ErrorText>}
                                    </S.DivInput>
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
                                    <S.DivInput>
                                        <S.InputStyled
                                            type='text'
                                            placeholder='Complemento'
                                            {...register('address.complement')}
                                        />
                                        {errors.complemento && <ErrorText>{errors.complemento.message}</ErrorText>}
                                    </S.DivInput>
                                </S.DivFormEndereco>
                            </S.BoxForm>
                        </S.DivLogoForm1>
                        <S.BoxForm2>
                            <S.TxtSobreVoce>Nos conte sobre suas necessidades...</S.TxtSobreVoce>
                            <S.TextAreaStyled
                                placeholder='Quais tipos de cuidados você procura?'
                                {...register('ministration')}
                            />
                            {errors.tipoCuidados && <ErrorText>{errors.tipoCuidados.message}</ErrorText>}
                            <S.TextAreaStyled
                                placeholder='Qual o histórico clínico do idoso?'
                                {...register('historic')}
                            />
                            {errors.historicoIdoso && <ErrorText>{errors.historicoIdoso.message}</ErrorText>}
                            <S.BtnCadastrar>{SignInButtonLabel}</S.BtnCadastrar>
                            {!!responseError && <ErrorText>{responseError}</ErrorText>}
                        </S.BoxForm2>
                    </S.DivLogoForm>
                </form>
            </S.MainStyled>
        </>
    )
}