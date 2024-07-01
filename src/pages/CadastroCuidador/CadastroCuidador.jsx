import * as S from './CadastroCuidador.styles';
import logoCompleta from '../../assets/img/logo_completa.png';
import eyeIcon from '../../assets/svg/eye.svg';
import eyeClosedIcon from '../../assets/svg/eye_closed.svg';
import arrowLeft from '../../assets/svg/arrow-left.svg';
import { useState } from 'react';
import { useCreateAccountCuidador } from '../../hooks/useCreateAccountCuidador';
import { Toaster } from 'react-hot-toast';
import { ErrorText } from '../../components/ErrorText/ErrorText';
import { useNavigate } from 'react-router';
import ReactInputMask from 'react-input-mask';
import { estados } from '../../lib/states';

export function CadastroCuidador() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const { setValue, submit, responseError } = useCreateAccountCuidador();
    
    return (
        <>
            <S.DivVoltar  onClick={() => navigate('/escolhaCadastro')}>
                <S.ImgSeta src={arrowLeft} />
                <S.TxtVoltar>Voltar</S.TxtVoltar>
            </S.DivVoltar>
            <S.MainStyled>
                <form onSubmit={submit}>
                    <S.DivLogoForm>
                        <S.DivLogoForm1>
                            <S.LogoStyled src={logoCompleta} />
                            <S.BoxForm>
                                <S.TxtWelcome>Olá, cadastre-se para começar 👋</S.TxtWelcome>
                                <S.TxtInsertInfo>Insira suas informações abaixo</S.TxtInsertInfo>
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
                                        onChange={(e) => setValue.setPassword(e.target.value)}
                                    />
                                    <S.IconStyled
                                        required
                                        src={visible ? eyeClosedIcon : eyeIcon}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setVisible(!visible)}
                                    />
                                </S.DivInput>
                                <S.DivInput>
                                    <S.InputStyled
                                        required
                                        type='url'
                                        placeholder='Link foto de perfil'
                                        onChange={(e) => setValue.setphoto(e.target.value)}
                                    />
                                </S.DivInput>
                            </S.BoxForm>
                        </S.DivLogoForm1>
                        <S.BoxForm2>
                            <S.DivFormEndereco>
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
                                        type='text'
                                        placeholder='Complemento'
                                        onChange={(e) => setValue.setComplement(e.target.value)}
                                    />
                                </S.DivInput>
                            </S.DivFormEndereco>
                            <S.Linha />
                            <S.TxtSobreVoce>Nos conte um pouco sobre você</S.TxtSobreVoce>
                            <S.DivFormEndereco>
                                <S.DivInput style={{width: '48%'}}>
                                    <S.SelectStyled required onChange={(e) => setValue.setExperience(e.target.value)}>
                                        <option value="" selected disabled>Tempo de experiência na área</option>
                                        <option value="0-1 anos">0 - 1 anos</option>
                                        <option value="1-2 anos">1 - 2 anos</option>
                                        <option value="2-3 anos">2 - 3 anos</option>
                                        <option value="3-5 anos">3 - 5 anos</option>
                                        <option value="5+ anos">+5 anos</option>
                                    </S.SelectStyled>
                                </S.DivInput>
                                <S.DivInput required style={{width: '48%'}}>
                                    <S.SelectStyled onChange={(e) => setValue.setTraining_time(e.target.value)}>
                                        <option value="" selected disabled>Formado(a) a quanto tempo?</option>
                                        <option value="0-1 anos">0 - 1 anos</option>
                                        <option value="1-2 anos">1 - 2 anos</option>
                                        <option value="2-3 anos">2 - 3 anos</option>
                                        <option value="3-5 anos">3 - 5 anos</option>
                                        <option value="5+ anos">+5 anos</option>
                                    </S.SelectStyled>
                                </S.DivInput>
                            </S.DivFormEndereco>
                            <S.TextAreaStyled
                                required
                                placeholder='Descreva casos em que você trabalhou...'
                                onChange={(e) => setValue.setDescription_experience(e.target.value)}
                            />
                            <S.BtnCadastrar>Cadastrar</S.BtnCadastrar>
                            {!!responseError && <ErrorText>{responseError}</ErrorText>}
                        </S.BoxForm2>
                    </S.DivLogoForm>
                </form>
                <Toaster position="bottom-center" />
            </S.MainStyled>
        </>
    );
}
