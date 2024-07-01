import * as S from './EditarDadosCuidador.styles'
import { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axios";
import { estados } from '../../lib/states';
import ReactInputMask from 'react-input-mask';
import toast from 'react-hot-toast';

export const EditarDadosCuidador = () => {
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [experience, setExperience] = useState();
    const [description_experience, setDescription_experience] = useState();
    const [training_time, setTraining_time] = useState();
    const [cep, setCep] = useState();
    const [street, setStreet] = useState();
    const [number, setNumber] = useState();
    const [district, setDistrict] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [complement, setComplement] = useState();

    useEffect(() => {
        const cuidador = JSON.parse(localStorage.getItem("Cuidador"));

        if (cuidador) {
            setEmail(cuidador.email);
            setPhone(cuidador.phone);
            setExperience(cuidador.experience);
            setDescription_experience(cuidador.description_experience);
            setTraining_time(cuidador.training_time);
            setCep(cuidador.address.cep);
            setStreet(cuidador.address.street);
            setNumber(cuidador.address.number);
            setDistrict(cuidador.address.district);
            setCity(cuidador.address.city);
            setState(cuidador.address.state);
            setComplement(cuidador.address.complement);
        }
    }, []);

    const editarDados = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('ElderlyCareToken');
        const updatedCuidador = {
            email,
            experience,
            description_experience,
            training_time,
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

        await axiosInstance.put('caregiver/update', updatedCuidador, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            toast.success("Alterado com sucesso!")
        })
    }

    return(
        <form onSubmit={editarDados}>
            <S.MainStyled>
                <S.BoxFundo>
                    <S.TituloBox>Editar dados - Cuidador</S.TituloBox>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <S.DivInput style={{width: '48%'}}>
                            <S.InputStyled
                                type='text'
                                placeholder='E-mail'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </S.DivInput>
                        <S.DivInput style={{width: '48%'}}>
                            <S.InputStyled
                                type='text'
                                placeholder='E-mail'
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                            />
                        </S.DivInput>  
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <S.DivInput style={{width: '48%'}}>
                            <S.SelectStyled onChange={(e) => setExperience(e.target.value)} value={experience}>
                                <option value="" selected disabled>Tempo de experiência</option>
                                <option value="0-1 anos">0 - 1 anos</option>
                                <option value="1-2 anos">1 - 2 anos</option>
                                <option value="2-3 anos">2 - 3 anos</option>
                                <option value="3-5 anos">3 - 5 anos</option>
                                <option value="5+ anos">+5 anos</option>
                            </S.SelectStyled>
                        </S.DivInput>
                        <S.DivInput style={{width: '48%'}}>
                            <S.SelectStyled onChange={(e) => setTraining_time(e.target.value)} value={training_time}>
                                <option value="" selected disabled>Tempo de formação</option>
                                <option value="0-1 anos">0 - 1 anos</option>
                                <option value="1-2 anos">1 - 2 anos</option>
                                <option value="2-3 anos">2 - 3 anos</option>
                                <option value="3-5 anos">3 - 5 anos</option>
                                <option value="5+ anos">+5 anos</option>
                            </S.SelectStyled>
                        </S.DivInput>
                    </div>
                    <S.TextAreaStyled
                        placeholder='Descreva casos em que você trabalhou...'
                        onChange={(e) => setDescription_experience(e.target.value)}
                        value={description_experience}
                    />
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