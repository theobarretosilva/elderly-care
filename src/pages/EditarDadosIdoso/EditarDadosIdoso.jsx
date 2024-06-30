import ReactInputMask from 'react-input-mask'
import * as S from './EditarDadosIdoso.styles'
import { estados } from '../../lib/states';
import { useState } from 'react';
import { useEffect } from 'react';
import { axiosInstance } from '../../lib/axios';

export function EditarDadosIdoso() {
    const [id_elder, setId_elder] = useState();
    const [date_birth, setDate_birth] = useState();
    const [ministration, setMinistration] = useState();
    const [historic, setHistoric] = useState();
    const [cep, setCep] = useState();
    const [street, setStreet] = useState();
    const [number, setNumber] = useState();
    const [district, setDistrict] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [complement, setComplement] = useState();

    useEffect(() => {
        const idoso = JSON.parse(localStorage.getItem("Idoso"));
        console.log(idoso[0])

        if (idoso) {
            setId_elder(idoso[0].id_elder);
            setDate_birth(idoso[0].date_birth);
            setMinistration(idoso[0].ministration);
            setHistoric(idoso[0].historic);
            setCep(idoso[0].address.cep);
            setStreet(idoso[0].address.street);
            setNumber(idoso[0].address.number);
            setDistrict(idoso[0].address.district);
            setCity(idoso[0].address.city);
            setState(idoso[0].address.state);
            setComplement(idoso[0].address.complement);
        }
    }, []);

    const editarDados = async (e) => {
        e.preventDefault();

        const updatedIdoso = {
            id_elder,
            date_birth,
            ministration,
            historic,
            address: {
                cep,
                street,
                number,
                district,
                city,
                state,
                complement
            }
        };
        const response = await axiosInstance.put('patients/update/elder', updatedIdoso);
        console.log(response);
    }

    return(
        <form onSubmit={editarDados}>
        <S.MainStyled>
                <S.BoxFundo>
                    <S.TituloBox>Editar dados - Idoso(a)</S.TituloBox>
                    <S.DivInput>
                        <ReactInputMask
                            mask="99/99/9999"
                            onChange={(e) => setDate_birth(e.target.value)}
                            value={date_birth}
                        >
                            {(inputProps) => <S.InputStyled {...inputProps} type="text" placeholder="Data de nascimento" />}
                        </ReactInputMask>
                    </S.DivInput>
                    <S.TextAreaStyled
                        placeholder='Quais tipos de cuidados você procura?'
                        onChange={(e) => setMinistration(e.target.value)}
                        value={ministration}
                    />
                    <S.TextAreaStyled
                        placeholder='Qual o histórico clínico do idoso?'
                        onChange={(e) => setHistoric(e.target.value)}
                        value={historic}
                    />
                </S.BoxFundo>
                <S.BoxFundo>
                    <S.DivInput>
                        <ReactInputMask
                            mask="99999-999"
                            onChange={(e) => setCep(e.target.value)}
                            value={cep}
                        >
                            {(inputProps) => <S.InputStyled {...inputProps} type="text" placeholder="CEP" />}
                        </ReactInputMask>
                    </S.DivInput>
                    <S.DivInput>
                        <S.InputStyled
                            type='text'
                            placeholder='Rua'
                            onChange={(e) => setStreet(e.target.value)}
                            value={street}
                        />
                    </S.DivInput>
                    <S.DivInput>
                        <S.InputStyled
                            type='number'
                            placeholder='Número'
                            onChange={(e) => setNumber(e.target.value)}
                            value={number}
                        />
                    </S.DivInput>
                    <S.DivInput>
                        <S.InputStyled
                            type='text'
                            placeholder='Bairro'
                            onChange={(e) => setDistrict(e.target.value)}
                            value={district}
                        />
                    </S.DivInput>
                    <S.DivInput>
                        <S.InputStyled
                            type='text'
                            placeholder='Cidade'
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                        />
                    </S.DivInput>
                    <S.DivInput>
                        <S.SelectStyled
                            required
                            onChange={(e) => setState(e.target.value)}
                            value={state}
                        >
                            <option value="" disabled selected>Estado</option>
                            {estados.map((estado) => (
                                <option key={estado} value={estado}>{estado}</option>
                            ))}
                        </S.SelectStyled>
                    </S.DivInput>
                    <S.DivInput>
                        <S.InputStyled
                            type='text'
                            placeholder='Complemento'
                            onChange={(e) => setComplement(e.target.value)}
                            value={complement}
                        />
                    </S.DivInput>
                    <S.BtnConfirmar>Confirmar edição</S.BtnConfirmar>
                </S.BoxFundo>
            
        </S.MainStyled>
        </form>

    )
}