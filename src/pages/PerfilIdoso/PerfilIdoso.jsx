import { useNavigate } from 'react-router'
import * as S from './PerfilIdoso.styles'
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../lib/axios';

export function PerfilIdoso() {
    const [idosos, setIdosos] = useState([]);
    const [responsavel, setResponsavel] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPerfil = async () => {
            try {
                const token = localStorage.getItem('ElderlyCareToken');

                const response = await axiosInstance.get('/patients/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setResponsavel(response.data);
                localStorage.setItem("Responsavel", JSON.stringify(response.data));

                setIdosos(response.data.elder_id)
                localStorage.setItem("Idoso", JSON.stringify(response.data.elder_id))
            } catch (error) {
                console.error('Failed to fetch profile:', error);
            }
        };

        fetchPerfil();
    }, []);
    
    if (!responsavel || !idosos) {
        return (
            <S.MainStyled>
                <S.ImgLoading src='../../src/assets/svg/loading.svg' />
            </S.MainStyled>
        )
    }

    return(
        <S.MainStyled>
            {idosos.map((idoso) => (
                <S.BoxFundo key={idoso.id}>
                    <S.TxtNome style={{ textAlign: 'center' }}>Idoso(a)</S.TxtNome>
                    <S.DivDados>
                        <S.Foto src={idoso.photo} />
                        <div>
                            <S.TxtNome>{idoso.name}</S.TxtNome>
                            <S.TxtInfo>Idade: {idoso.date_birth}</S.TxtInfo>
                        </div>
                    </S.DivDados>
                    <S.Linha />
                    <S.TxtInfo>Necessidades</S.TxtInfo>
                    <S.TxtDescricao>{idoso.ministration}</S.TxtDescricao>
                    <S.Linha />
                    <S.TxtInfo>Histórico</S.TxtInfo>
                    <S.TxtDescricao>{idoso.historic}</S.TxtDescricao>
                    <S.BtnEditar style={{marginTop: '1vh'}} onClick={() => navigate('/logged/editarIdoso')}>Editar dados</S.BtnEditar>
                </S.BoxFundo>
            ))}
            <S.BoxFundo>
                <S.TxtNome style={{textAlign: 'center'}}>Responsável</S.TxtNome>
                <S.DivDados>
                    <S.Foto src={responsavel.photo} />
                    <div>
                        <S.TxtNome>{responsavel.name}</S.TxtNome>
                        <S.TxtInfo>Nascimento: {responsavel.date_birth}</S.TxtInfo>
                        <S.TxtInfo>Parentesco: {responsavel.kinship}</S.TxtInfo>
                        <S.TxtInfo>Contato: {responsavel.phone}</S.TxtInfo>
                    </div>
                </S.DivDados>
                <br />
                <S.TxtInfo>E-mail: {responsavel.email}</S.TxtInfo>
                <S.TxtInfo>CPF: {responsavel.cpf}</S.TxtInfo>
                <S.Linha />
                <S.TxtInfo>CEP: {responsavel.address.cep}</S.TxtInfo>
                <S.TxtInfo>Rua: {responsavel.address.street}</S.TxtInfo>
                <S.TxtInfo>Número: {responsavel.address.number}</S.TxtInfo>
                <S.TxtInfo>Bairro: {responsavel.address.district}</S.TxtInfo>
                <S.TxtInfo>Cidade: {responsavel.address.city}</S.TxtInfo>
                <S.TxtInfo>Estado: {responsavel.address.state}</S.TxtInfo>
                <S.TxtInfo>Complemento: {responsavel.address.complement}</S.TxtInfo>
                <S.BtnEditar onClick={() => navigate('/logged/editarResponsavel')}>Editar dados</S.BtnEditar>
            </S.BoxFundo>
        </S.MainStyled>
    )
}