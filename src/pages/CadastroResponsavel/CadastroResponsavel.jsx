import * as S from './CadastroResponsavel.styles'
import arrowLeft from '../../assets/svg/arrow-left.svg';
import { useNavigate } from 'react-router';
import logoCompleta from '../../assets/img/logo_completa.png';
import eyeIcon from '../../assets/svg/eye.svg';
import eyeClosedIcon from '../../assets/svg/eye_closed.svg';
import { useState } from 'react';
import { ErrorText } from '../../components/ErrorText/ErrorText';
import { useCreateAccountResponsavel } from '../../hooks/useCreateAccountResponsavel';
import { Toaster } from 'react-hot-toast';
import ReactInputMask from 'react-input-mask';
import { estados } from '../../lib/states'

export function CadastroResponsavel() {

    const navigate = useNavigate();
    const { setValue, submit, responseError } = useCreateAccountResponsavel();

    const [visible, setVisible] = useState(false);

    return(
        <>
            <S.DivVoltar onClick={() => navigate('/escolhaCadastro')}>
                <S.ImgSeta src={arrowLeft} />
                <S.TxtVoltar>Voltar</S.TxtVoltar>
            </S.DivVoltar>
            <S.MainStyled>
                <S.LogoStyled src={logoCompleta} />
                <form onSubmit={submit}>
                    <S.DivGeralStyled>
                        <S.DivForm>
                            <S.BoxForm>
                                <S.TxtWelcome>Olá, cadastre-se para começar 👋</S.TxtWelcome>
                                <S.TxtInsertInfo>Insira suas informações, como responsável pelo idoso</S.TxtInsertInfo>
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
                                        mask="(99) 99999-9999"
                                        onChange={(e) => setValue.setPhone(e.target.value)}
                                    >
                                        {(inputProps) => <S.InputStyled {...inputProps} type="tel" placeholder="Telefone" />}
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
                                    <S.SelectStyled
                                        required
                                        onChange={(e) => setValue.setKinship(e.target.value)}
                                    >
                                        <option value="" disabled selected>Parentesco</option>
                                        <option value="FILHO(A)">Filho(a)</option>
                                        <option value="NETO(A)">Neto(a)</option>
                                        <option value="SOBRINHO(A)">Sobrinho(a)</option>
                                        <option value="RESPONSÁVEL LEGAL">Responsável Legal</option>
                                        <option value="OUTROS">Outros</option>
                                    </S.SelectStyled>
                                </S.DivInput>
                                <S.DivInput>
                                    <S.InputStyled
                                        required
                                        type='text'
                                        placeholder='E-mail'
                                        onChange={(e) => setValue.setEmail(e.target.value)}
                                    />
                                </S.DivInput>
                                <S.DivInput>
                                    <S.InputStyled
                                        required
                                        type={visible ? 'text' : 'password'}
                                        placeholder='Senha'
                                        onChange={(e) => setValue.setPass(e.target.value)}
                                    />
                                    <S.IconStyled
                                        src={visible ? eyeClosedIcon : eyeIcon}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setVisible(!visible)}
                                    />
                                </S.DivInput>
                                {!!responseError && <ErrorText>{responseError}</ErrorText>}
                            </S.BoxForm>
                        </S.DivForm>
                        <S.BoxForm>
                            <S.DivInput>
                                <S.InputStyled
                                    required
                                    type='url'
                                    placeholder='Link foto de perfil'
                                    onChange={(e) => setValue.setphoto(e.target.value)}
                                />
                            </S.DivInput>
                            <S.DivInput>
                                <ReactInputMask
                                    required
                                    mask="99999-999"
                                    onChange={(e) => setValue.setCep(e.target.value)}
                                >
                                    {(inputProps) => <S.InputStyled {...inputProps} type="text" placeholder="CEP" />}
                                </ReactInputMask>
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled
                                    required
                                    type='text'
                                    placeholder='Rua'
                                    onChange={(e) => setValue.setStreet(e.target.value)}
                                />
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled
                                    required
                                    type='number'
                                    placeholder='Número'
                                    onChange={(e) => setValue.setNumber(e.target.value)}
                                />
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled
                                    required
                                    type='text'
                                    placeholder='Bairro'
                                    onChange={(e) => setValue.setDistrict(e.target.value)}
                                />
                            </S.DivInput>
                            <S.DivInput>
                                <S.SelectStyled
                                    required
                                    onChange={(e) => setValue.setState(e.target.value)}
                                >
                                    <option value="" disabled selected>Estado</option>
                                    {estados.map((estado) => (
                                        <option key={estado} value={estado}>{estado}</option>
                                    ))}
                                </S.SelectStyled>
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled
                                    required
                                    type='text'
                                    placeholder='Cidade'
                                    onChange={(e) => setValue.setCity(e.target.value)}
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
                            <S.BtnCadastrar>Criar conta</S.BtnCadastrar>
                            {!!responseError && <ErrorText>{responseError}</ErrorText>}
                        </S.BoxForm>
                        <S.ImgSideForm src='../../src/assets/svg/cadastro_responsavel.svg' />
                    </S.DivGeralStyled>
                </form>
                <Toaster position="bottom-center" />
            </S.MainStyled>
        </>
    )
}
