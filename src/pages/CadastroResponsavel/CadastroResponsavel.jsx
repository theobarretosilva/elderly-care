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
    const { setValue, submit, errors, register, responseError } = useCreateAccountResponsavel();

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
                                        type='text'
                                        placeholder='Nome completo'
                                        {...register('name')}
                                        onChange={(e) => setValue.setName(e.target.value)}
                                    />
                                    {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
                                </S.DivInput>
                                <S.DivInput>
                                    <ReactInputMask
                                        mask="999.999.999-99"
                                        {...register('cpf')}
                                        onChange={(e) => setValue.setCpf(e.target.value)}
                                    >
                                        {(inputProps) => <S.InputStyled {...inputProps} type="text" placeholder="CPF" />}
                                    </ReactInputMask>
                                    {errors.cpf && <ErrorText>{errors.cpf.message}</ErrorText>}
                                </S.DivInput>
                                <S.DivInput>
                                    <ReactInputMask
                                        mask="(99) 99999-9999"
                                        {...register('phone')}
                                        onChange={(e) => setValue.setPhone(e.target.value)}
                                    >
                                        {(inputProps) => <S.InputStyled {...inputProps} type="tel" placeholder="Telefone" />}
                                    </ReactInputMask>
                                    {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
                                </S.DivInput>
                                {/* <S.DivInput>
                                    <ReactInputMask
                                        mask="99/99/9999"
                                        {...register('date_birth')}
                                        onChange={(e) => setValue.setDate_birth(e.target.value)}
                                    >
                                        {(inputProps) => <S.InputStyled {...inputProps} type="text" placeholder="Data de nascimento" />}
                                    </ReactInputMask>
                                    {errors.date_birth && <ErrorText>{errors.date_birth.message}</ErrorText>}
                                </S.DivInput> */}
                                <S.DivInput>
                                    <S.SelectStyled
                                        {...register('kinship')}
                                        onChange={(e) => setValue.setKinship(e.target.value)}
                                    >
                                        <option value="" disabled selected>Parentesco</option>
                                        <option value="FILHO(A)">Filho(a)</option>
                                        <option value="NETO(A)">Neto(a)</option>
                                        <option value="SOBRINHO(A)">Sobrinho(a)</option>
                                        <option value="RESPONSÁVEL LEGAL">Responsável Legal</option>
                                        <option value="OUTROS">Outros</option>
                                    </S.SelectStyled>
                                    {errors.kinship && <ErrorText>{errors.kinship.message}</ErrorText>}
                                </S.DivInput>
                                <S.DivInput>
                                    <S.InputStyled
                                        type='text'
                                        placeholder='E-mail'
                                        {...register('email')}
                                        onChange={(e) => setValue.setEmail(e.target.value)}
                                    />
                                    {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                                </S.DivInput>
                                <S.DivInput>
                                    <S.InputStyled
                                        type={visible ? 'text' : 'password'}
                                        placeholder='Senha'
                                        {...register('pass')}
                                        onChange={(e) => setValue.setPass(e.target.value)}
                                    />
                                    <S.IconStyled
                                        src={visible ? eyeClosedIcon : eyeIcon}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setVisible(!visible)}
                                    />
                                    {errors.pass && <ErrorText>{errors.pass.message}</ErrorText>}
                                </S.DivInput>
                                {!!responseError && <ErrorText>{responseError}</ErrorText>}
                            </S.BoxForm>
                        </S.DivForm>
                        <S.BoxForm>
                            {/* <S.DivInput>
                                <S.InputStyled
                                    type='url'
                                    placeholder='Link foto de perfil'
                                    {...register('photoLink')}
                                    onChange={(e) => setValue.setPhoto_link(e.target.value)}
                                />
                                {errors.photo_link && <ErrorText>{errors.photo_link.message}</ErrorText>}
                            </S.DivInput> */}
                            <S.DivInput>
                                <ReactInputMask
                                    mask="99999-999"
                                    {...register('endereco.cep')}
                                    onChange={(e) => setValue.setCep(e.target.value)}
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
                                    onChange={(e) => setValue.setStreet(e.target.value)}
                                />
                                {errors.street && <ErrorText>{errors.street.message}</ErrorText>}
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled
                                    type='number'
                                    placeholder='Número'
                                    {...register('endereco.number')}
                                    onChange={(e) => setValue.setNumber(e.target.value)}
                                />
                                {errors.number && <ErrorText>{errors.number.message}</ErrorText>}
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled
                                    type='text'
                                    placeholder='Bairro'
                                    {...register('endereco.district')}
                                    onChange={(e) => setValue.setDistrict(e.target.value)}
                                />
                                {errors.district && <ErrorText>{errors.district.message}</ErrorText>}
                            </S.DivInput>
                            <S.DivInput>
                                <S.SelectStyled
                                    {...register('endereco.state')}
                                    onChange={(e) => setValue.setState(e.target.value)}
                                >
                                    <option value="" disabled selected>Estado</option>
                                    {estados.map((estado) => (
                                        <option key={estado} value={estado}>{estado}</option>
                                    ))}
                                </S.SelectStyled>
                                {errors.state && <ErrorText>{errors.state.message}</ErrorText>}
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled
                                    type='text'
                                    placeholder='Cidade'
                                    {...register('endereco.city')}
                                    onChange={(e) => setValue.setCity(e.target.value)}
                                />
                                {errors.city && <ErrorText>{errors.city.message}</ErrorText>}
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled
                                    type='text'
                                    placeholder='Complemento'
                                    {...register('endereco.complement')}
                                    onChange={(e) => setValue.setComplement(e.target.value)}
                                />
                                {errors.complement && <ErrorText>{errors.complement.message}</ErrorText>}
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
