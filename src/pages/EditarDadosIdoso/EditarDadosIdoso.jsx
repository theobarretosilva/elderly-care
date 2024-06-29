import ReactInputMask from 'react-input-mask'
import * as S from './EditarDadosIdoso.styles'

export function EditarDadosIdoso() {
    const {  } = useEditarIdoso();

    return(
        <S.MainStyled>
            <S.BoxFundo>
                <S.TituloBox>Editar dados - Idoso(a)</S.TituloBox>
                <S.DivInput>
                    <ReactInputMask
                        mask="99/99/9999"
                        // {...register('date_birth')}
                    >
                        {(inputProps) => <S.InputStyled {...inputProps} type="text" placeholder="Data de nascimento" />}
                    </ReactInputMask>
                    {/* {errors.dataNascimento && <ErrorText>{errors.dataNascimento.message}</ErrorText>} */}
                </S.DivInput>
                <S.TextAreaStyled
                    placeholder='Quais tipos de cuidados você procura?'
                    // {...register('ministration')}
                />
                {/* {errors.tipoCuidados && <ErrorText>{errors.tipoCuidados.message}</ErrorText>} */}
                <S.TextAreaStyled
                    placeholder='Qual o histórico clínico do idoso?'
                    // {...register('historic')}
                />
                {/* {errors.historicoIdoso && <ErrorText>{errors.historicoIdoso.message}</ErrorText>} */}
            </S.BoxFundo>
            <S.BoxFundo>
                <S.DivInput>
                    <ReactInputMask
                        mask="99999-999"
                        // {...register('address.cep')}
                    >
                        {(inputProps) => <S.InputStyled {...inputProps} type="text" placeholder="CEP" />}
                    </ReactInputMask>
                    {/* {errors.cep && <ErrorText>{errors.cep.message}</ErrorText>} */}
                </S.DivInput>
                <S.DivInput>
                    <S.InputStyled
                        type='text'
                        placeholder='Rua'
                        // {...register('address.street')}
                    />
                    {/* {errors.rua && <ErrorText>{errors.rua.message}</ErrorText>} */}
                </S.DivInput>
                <S.DivInput>
                    <S.InputStyled
                        type='number'
                        placeholder='Número'
                        // {...register('address.number')}
                    />
                    {/* {errors.numero && <ErrorText>{errors.numero.message}</ErrorText>} */}
                </S.DivInput>
                <S.DivInput>
                    <S.InputStyled
                        type='text'
                        placeholder='Bairro'
                        // {...register('address.distric')}
                    />
                    {/* {errors.bairro && <ErrorText>{errors.bairro.message}</ErrorText>} */}
                </S.DivInput>
                <S.DivInput>
                    <S.InputStyled
                        type='text'
                        placeholder='Cidade'
                        // {...register('address.city')}
                    />
                    {/* {errors.cidade && <ErrorText>{errors.cidade.message}</ErrorText>} */}
                </S.DivInput>
                <S.DivInput>
                    <S.InputStyled
                        type='text'
                        placeholder='Estado'
                        // {...register('address.state')}
                    />
                    {/* {errors.estado && <ErrorText>{errors.estado.message}</ErrorText>} */}
                </S.DivInput>
                <S.DivInput>
                    <S.InputStyled
                        type='text'
                        placeholder='Complemento'
                        // {...register('address.complement')}
                    />
                    {/* {errors.complemento && <ErrorText>{errors.complemento.message}</ErrorText>} */}
                </S.DivInput>
                <S.BtnConfirmar>Confirmar edição</S.BtnConfirmar>
            </S.BoxFundo>
        </S.MainStyled>
    )
}