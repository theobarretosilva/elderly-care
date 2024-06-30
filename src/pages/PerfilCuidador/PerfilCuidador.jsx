import { useEffect, useState } from 'react'
import * as S from './PerfilCuidador.styles'
import { useNavigate } from 'react-router';
import { axiosInstance } from '../../lib/axios';

export function PerfilCuidador() {
    const [cuidador, setCuidador] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCuidador = async () => {
            try {
                const token = localStorage.getItem('ElderlyCareToken');

                const response = await axiosInstance.get('/caregiver/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                console.log(response);
                setCuidador(response.data);
                localStorage.setItem("Cuidador", JSON.stringify(response.data));
            } catch (error) {
                console.error('Failed to fetch profile:', error);
            }
        }

        fetchCuidador();
    }, [])

    if (!cuidador) {
        return <div>Loading...</div>; // Exibe um carregando enquanto os dados não são carregados
    }

    return(
        <S.MainStyled>
            <S.BoxFundo>
                <S.DivDados>
                    <S.Foto src={cuidador.photo} />
                    <div>
                        <S.TxtNome>{cuidador.name}</S.TxtNome>
                        <S.TxtInfo><b>CPF:</b> {cuidador.cpf}</S.TxtInfo>
                        <S.TxtInfo><b>Telefone:</b> {cuidador.phone}</S.TxtInfo>
                        <S.TxtInfo><b>Nascimento:</b> {cuidador.date_birth}</S.TxtInfo>
                        <S.TxtInfo><b>Email:</b> {cuidador.email}</S.TxtInfo>
                    </div>
                </S.DivDados>
                <br />
                <S.TxtInfo><b>Experiência:</b> {cuidador.experience}</S.TxtInfo>
                <S.TxtInfo><b>Tempo de formação:</b> {cuidador.training_time}</S.TxtInfo>
                <S.Linha />
                <S.TxtInfo><b>Descrição experiência</b></S.TxtInfo>
                <S.TxtDescricao>{cuidador.description_experience}</S.TxtDescricao>
                <S.BtnEditar style={{marginTop: '1vh'}} onClick={() => navigate('/logged/editarCuidador')}>Editar dados</S.BtnEditar>
            </S.BoxFundo>
        </S.MainStyled>
    )
}