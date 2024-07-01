import { useState, useEffect } from 'react';
import { CardCuidador } from '../../components/CardCuidador/CardCuidador';
import * as S from './InicioIdoso.styles';
import { useNavigate } from 'react-router';
import { axiosInstance } from '../../lib/axios';

export function InicioIdoso() {
    const navigate = useNavigate();
    const [cuidadoresData, setCuidadoresData] = useState([]);

    useEffect(() => {
        const fetchCuidadores = async () => {
            try {
                const response = await axiosInstance.get('/caregiver/getAvailable');
                setCuidadoresData(response.data);
            } catch (error) {
                console.error('Failed to fetch caregivers:', error);
            }
        };

        fetchCuidadores();
    }, []);

    return (
        <S.MainStyled>
            <S.TxtInicial>Cuidadores disponíveis para proposta</S.TxtInicial>
            <S.Linha />
            <S.DivCards>
                {cuidadoresData.map((cuidador) => (
                    <CardCuidador 
                        key={cuidador.cpf}
                        linkFoto={cuidador.photo} 
                        nome={cuidador.name}
                        idade={cuidador.date_birth}
                        experiencia={cuidador.experience}
                        formacao={cuidador.training_time}
                        onClick={() => navigate('/logged/descricaoCuidador', { state: { cuidador } })}
                    />
                ))}
            </S.DivCards>
        </S.MainStyled>
    );
}
