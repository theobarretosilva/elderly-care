import * as S from './CadastroCuidador.styles'
import logoCompleta from '../../assets/img/logo_completa.png';
import eyeIcon from '../../assets/svg/eye.svg';
import eyeClosedIcon from '../../assets/svg/eye_closed.svg';
import { useState } from 'react';

export function CadastroCuidador() {
    const [visible, setVisible] = useState(false);

    return(
        <S.MainStyled>
            <S.DivVoltar>
                <S.ImgSeta src='../../src/assets/svg/arrow-left.svg' />
                <S.TxtVoltar>Voltar</S.TxtVoltar>
            </S.DivVoltar>
            <S.DivLogoForm>
                <S.DivLogoForm1>
                    <S.LogoStyled src={logoCompleta} />
                    <S.BoxForm>
                        <S.TxtWelcome>Olá, cadastre-se para começar 👋</S.TxtWelcome>
                        <S.TxtInsertInfo>Insira suas informações abaixo</S.TxtInsertInfo>
                        <form>
                            <S.DivInput>
                                <S.InputStyled type='text' placeholder='Nome completo' />
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled type='text' placeholder='CPF' />
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled type='text' placeholder='Endereço' />
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled type='tel' placeholder='Telefone' />
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled type='date' placeholder='Data de nascimento' />
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled type='text' placeholder='E-mail' />
                            </S.DivInput>
                            <S.DivInput>
                                <S.InputStyled type='password' placeholder='Senha' />
                                <S.IconStyled 
                                    src={visible ? eyeClosedIcon : eyeIcon} 
                                    style={{cursor: 'pointer'}} 
                                    onClick={() => setVisible(!visible)} 
                                />
                            </S.DivInput>
                        </form>
                    </S.BoxForm>
                </S.DivLogoForm1>
                <S.BoxForm2>
                    <S.TxtSobreVoce>Nos conte um pouco sobre você</S.TxtSobreVoce>
                    <form>
                        <S.DivInput>
                            <S.SelectStyled>
                                <option selected disabled>Quanto tempo de experiência na área você tem?</option>
                                <option>0 - 1 anos</option>
                                <option>1 - 2 anos</option>
                                <option>2 - 3 anos</option>
                                <option>3 - 5 anos</option>
                                <option>+5 anos</option>
                            </S.SelectStyled>
                        </S.DivInput>
                        <S.TextAreaStyled />
                        <S.DivInput>
                            <S.SelectStyled>
                                <option selected disabled>É formado a quanto tempo?</option>
                                <option>0 - 1 anos</option>
                                <option>1 - 2 anos</option>
                                <option>2 - 3 anos</option>
                                <option>3 - 5 anos</option>
                                <option>+5 anos</option>
                            </S.SelectStyled>
                        </S.DivInput>
                    </form>
                    <S.BtnCadastrar>Cadastrar</S.BtnCadastrar>
                </S.BoxForm2>
            </S.DivLogoForm>
        </S.MainStyled>
    )
}