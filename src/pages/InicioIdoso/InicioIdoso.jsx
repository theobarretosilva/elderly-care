import { useState, useEffect } from 'react';
import { CardCuidador } from '../../components/CardCuidador/CardCuidador';
import * as S from './InicioIdoso.styles';
import { useNavigate } from 'react-router';
import { axiosInstance } from '../../lib/axios';

export function InicioIdoso() {
    const navigate = useNavigate();
    const [cuidadoresData, setCuidadoresData] = useState([]);
    const [idadeFiltro, setIdadeFiltro] = useState('');
    const [experienciaFiltro, setExperienciaFiltro] = useState('');
    const [formacaoFiltro, setFormacaoFiltro] = useState('');
    const [cuidadoresFiltrados, setCuidadoresFiltrados] = useState([]);

    useEffect(() => {
        const fetchCuidadores = async () => {
            try {
                const response = await axiosInstance.get('/caregiver/getAvailable');
                setCuidadoresData(response.data);
                setCuidadoresFiltrados(response.data); // Initializing filtered data with fetched data
            } catch (error) {
                console.error('Failed to fetch caregivers:', error);
            }
        };

        fetchCuidadores();
    }, []);

    useEffect(() => {
        const filterCuidadores = () => {
            let filtrados = cuidadoresData;

            const applyFilter = (data, filterKey, filterValue) => {
                if (!filterValue) return data;

                const [min, max] = filterValue.split('-').map(num => parseInt(num.replace('+', '')));
                return data.filter(cuidador => {
                    const value = parseInt(cuidador[filterKey]);
                    return max ? value >= min && value <= max : value >= min;
                });
            };

            filtrados = applyFilter(filtrados, 'idade', idadeFiltro);
            filtrados = applyFilter(filtrados, 'experience', experienciaFiltro);
            filtrados = applyFilter(filtrados, 'training_time', formacaoFiltro);

            setCuidadoresFiltrados(filtrados);
        };

        filterCuidadores();
    }, [idadeFiltro, experienciaFiltro, formacaoFiltro, cuidadoresData]);

    return (
        <S.MainStyled>
            <S.TxtInicial>Cuidadores disponíveis para proposta</S.TxtInicial>
            <S.Linha />
            <S.DivFiltros>
                <S.SelectStyled onChange={(e) => setIdadeFiltro(e.target.value)} value={idadeFiltro}>
                    <option value="">Idade</option>
                    <option value="18-25">18 - 25 anos</option>
                    <option value="25-30">25 - 30 anos</option>
                    <option value="30-35">30 - 35 anos</option>
                    <option value="35-40">35 - 40 anos</option>
                    <option value="40+">+40 anos</option>
                </S.SelectStyled>
                <S.SelectStyled style={{ width: '12vw' }} onChange={(e) => setExperienciaFiltro(e.target.value)} value={experienciaFiltro}>
                    <option value="">Experiência</option>
                    <option value="0-1">0 - 1 anos</option>
                    <option value="1-2">1 - 2 anos</option>
                    <option value="2-3">2 - 3 anos</option>
                    <option value="3-5">3 - 5 anos</option>
                    <option value="5+">+5 anos</option>
                </S.SelectStyled>
                <S.SelectStyled style={{ width: '15vw' }} onChange={(e) => setFormacaoFiltro(e.target.value)} value={formacaoFiltro}>
                    <option value="">Tempo de formação</option>
                    <option value="0-1">0 - 1 anos</option>
                    <option value="1-2">1 - 2 anos</option>
                    <option value="2-3">2 - 3 anos</option>
                    <option value="3-5">3 - 5 anos</option>
                    <option value="5+">+5 anos</option>
                </S.SelectStyled>
            </S.DivFiltros>
            <S.DivCards>
                {cuidadoresFiltrados.map((cuidador) => (
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
