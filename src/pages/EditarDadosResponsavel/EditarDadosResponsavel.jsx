import { useState } from 'react';
import * as S from './EditarDadosResponsavel.styles'
import { useEffect } from 'react';
import { axiosInstance } from '../../lib/axios';
import { estados } from '../../lib/states';
import ReactInputMask from 'react-input-mask';

export const EditarDadosResponsavel = () => {
    const [email, setEmail] = useState();
    const [kinship, setKinship] = useState();
    const [phone, setPhone] = useState();
    const [cep, setCep] = useState();
    const [street, setStreet] = useState();
    const [number, setNumber] = useState();
    const [district, setDistrict] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [complement, setComplement] = useState();

    useEffect(() => {
        const responsavel = JSON.parse(localStorage.getItem("Responsavel"));
        if (responsavel) {
            setEmail(responsavel.email);
            setKinship(responsavel.kinship);
            setPhone(responsavel.phone);
            setCep(responsavel.address.cep);
            setStreet(responsavel.address.street);
            setNumber(responsavel.address.number);
            setDistrict(responsavel.address.district);
            setCity(responsavel.address.city);
            setState(responsavel.address.state);
            setComplement(responsavel.address.complement);
        }
    }, []);

    const editarDados = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('ElderlyCareToken');
        const updatedResponsavel = {
            email,
            kinship,
            phone,
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

        const response = await axiosInstance.put('patients/update/responsible', updatedResponsavel, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    return(
        <form onSubmit={editarDados}>
            <S.MainStyled>
                <S.BoxFundo>
                    <S.TituloBox>Editar dados - Responsável</S.TituloBox>
                    <S.DivInput>
                        <S.InputStyled
                            type='text'
                            placeholder='E-mail'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </S.DivInput>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <S.DivInput style={{width: '48%'}}>
                            <S.SelectStyled
                                required
                                onChange={(e) => setKinship(e.target.value)}
                                value={kinship}
                            >
                                <option value="" disabled selected>Parentesco</option>
                                <option value="FILHO(A)">Filho(a)</option>
                                <option value="NETO(A)">Neto(a)</option>
                                <option value="SOBRINHO(A)">Sobrinho(a)</option>
                                <option value="RESPONSÁVEL LEGAL">Responsável Legal</option>
                                <option value="OUTROS">Outros</option>
                            </S.SelectStyled>
                        </S.DivInput>
                        <S.DivInput style={{width: '48%'}}>
                            <ReactInputMask
                                required
                                mask="(99) 99999-9999"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                            >
                                {(inputProps) => <S.InputStyled {...inputProps} type="tel" placeholder="Telefone" />}
                            </ReactInputMask>
                        </S.DivInput>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <S.DivInput style={{width: '48%'}}>
                            <ReactInputMask
                                mask="99999-999"
                                onChange={(e) => setCep(e.target.value)}
                                value={cep}
                            >
                                {(inputProps) => <S.InputStyled {...inputProps} type="text" placeholder="CEP" />}
                            </ReactInputMask>
                        </S.DivInput>
                        <S.DivInput style={{width: '48%'}}>
                            <S.InputStyled
                                type='text'
                                placeholder='Rua'
                                onChange={(e) => setStreet(e.target.value)}
                                value={street}
                            />
                        </S.DivInput>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <S.DivInput style={{width: '48%'}}>
                            <S.InputStyled
                                type='number'
                                placeholder='Número'
                                onChange={(e) => setNumber(e.target.value)}
                                value={number}
                            />
                        </S.DivInput>
                        <S.DivInput style={{width: '48%'}}>
                            <S.InputStyled
                                type='text'
                                placeholder='Bairro'
                                onChange={(e) => setDistrict(e.target.value)}
                                value={district}
                            />
                        </S.DivInput>
                    </div>
                    <S.DivInput>
                        <S.InputStyled
                            type='text'
                            placeholder='Cidade'
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                        />
                    </S.DivInput>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <S.DivInput style={{width: '48%'}}>
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
                        <S.DivInput style={{width: '48%'}}>
                            <S.InputStyled
                                type='text'
                                placeholder='Complemento'
                                onChange={(e) => setComplement(e.target.value)}
                                value={complement}
                            />
                        </S.DivInput>
                    </div>
                    <S.BtnConfirmar>Confirmar edição</S.BtnConfirmar>
                </S.BoxFundo>
            </S.MainStyled>
        </form>
    )
}