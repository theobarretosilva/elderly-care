/* eslint-disable no-unused-vars */
import * as S from './CadastroIdoso.styles'
import arrowLeft from '../../assets/svg/arrow-left.svg';
import { useNavigate } from 'react-router';
import logoCompleta from '../../assets/img/logo_completa.png';
import { ErrorText } from '../../components/ErrorText/ErrorText';
import ReactInputMask from 'react-input-mask';
import { CircularProgress } from '@mui/material';
import { useCreateAccountIdoso } from '../../hooks/useCreateAccountIdoso'
import { Toaster } from 'react-hot-toast';

export function CadastroIdoso() {
    const navigate = useNavigate();
    const { setValue, submit, responseError } = useCreateAccountIdoso();

    return(
        <>
            <S.DivVoltar  onClick={() => navigate('/cadastroResponsavel')}>
                <S.ImgSeta src={arrowLeft} />
                <S.TxtVoltar>Voltar</S.TxtVoltar>
            </S.DivVoltar>
            <S.MainStyled>
                <form onSubmit={submit}>
                    <S.DivLogoForm>
                        <S.DivLogoForm1>
                            <S.LogoStyled src={logoCompleta} />
                            <S.BoxForm>
                                <S.TxtWelcome>Agora vamos aos dados do idoso</S.TxtWelcome>
                                <S.TxtInsertInfo>Insira as informações do idoso</S.TxtInsertInfo>
                                <S.DivFormEndereco>
                                    <S.DivInput>
                                        <S.InputStyled
                                            required
                                            type='text'
                                            placeholder='Nome completo'
                                            onChange={(e) => setValue.setName(e.target.value)}
                                        />
                                    </S.DivInput>
                                    <S.DivInput>
                                        <ReactInputMask
                                            required
                                            mask="999.999.999-99"
                                            onChange={(e) => setValue.setCpf(e.target.value)}
                                        >
                                            {(inputProps) => <S.InputStyled {...inputProps} type="text" placeholder="CPF" />}
                                        </ReactInputMask>
                                    </S.DivInput>
                                    <S.DivInput>
                                        <ReactInputMask
                                            required
                                            mask="99/99/9999"
                                            onChange={(e) => setValue.setDate_birth(e.target.value)}
                                        >
                                            {(inputProps) => <S.InputStyled {...inputProps} type="text" placeholder="Data de nascimento" />}
                                        </ReactInputMask>
                                    </S.DivInput>
                                    <S.DivInput>
                                        <S.InputStyled
                                            required
                                            type='url'
                                            placeholder='Link foto de perfil'
                                            onChange={(e) => setValue.setphoto(e.target.value)}
                                        />
                                    </S.DivInput>
                                    <S.DivInput style={{width: '48%'}}>
                                        <ReactInputMask
                                            required
                                            mask="99999-999"
                                            onChange={(e) => setValue.setCep(e.target.value)}
                                        >
                                            {(inputProps) => <S.InputStyled {...inputProps} type="text" placeholder="CEP" />}
                                        </ReactInputMask>
                                    </S.DivInput>
                                    <S.DivInput style={{width: '48%'}}>
                                        <S.InputStyled
                                            required
                                            type='text'
                                            placeholder='Rua'
                                            onChange={(e) => setValue.setStreet(e.target.value)}
                                        />
                                    </S.DivInput>
                                    <S.DivInput style={{width: '48%'}}>
                                        <S.InputStyled
                                            required
                                            type='number'
                                            placeholder='Número'
                                            onChange={(e) => setValue.setNumber(e.target.value)}
                                        />
                                    </S.DivInput>
                                    <S.DivInput style={{width: '48%'}}>
                                        <S.InputStyled
                                            required
                                            type='text'
                                            placeholder='Bairro'
                                            onChange={(e) => setValue.setDistrict(e.target.value)}
                                        />
                                    </S.DivInput>
                                    <S.DivInput style={{width: '48%'}}>
                                        <S.InputStyled
                                            required
                                            type='text'
                                            placeholder='Cidade'
                                            onChange={(e) => setValue.setCity(e.target.value)}
                                        />
                                    </S.DivInput>
                                    <S.DivInput style={{width: '48%'}}>
                                        <S.InputStyled
                                            required
                                            type='text'
                                            placeholder='Estado'
                                            onChange={(e) => setValue.setState(e.target.value)}
                                        />
                                    </S.DivInput>
                                    <S.DivInput>
                                        <S.InputStyled
                                            required
                                            type='text'
                                            placeholder='Complemento'
                                            onChange={(e) => setValue.setComplement(e.target.value)}
                                        />
                                    </S.DivInput>
                                </S.DivFormEndereco>
                            </S.BoxForm>
                        </S.DivLogoForm1>
                        <S.BoxForm2>
                            <S.TxtSobreVoce>Nos conte sobre suas necessidades...</S.TxtSobreVoce>
                            <S.TextAreaStyled
                                required
                                placeholder='Quais tipos de cuidados você procura?'
                                onChange={(e) => setValue.setMinistration(e.target.value)}
                            />
                            <S.TextAreaStyled
                                required
                                placeholder='Qual o histórico clínico do idoso?'
                                onChange={(e) => setValue.setHistoric(e.target.value)}
                            />
                            <S.BtnCadastrar>Finalizar cadastro</S.BtnCadastrar>
                            {!!responseError && <ErrorText>{responseError}</ErrorText>}
                        </S.BoxForm2>
                    </S.DivLogoForm>
                </form>
                <Toaster position="bottom-center" />
            </S.MainStyled>
        </>
    )
}