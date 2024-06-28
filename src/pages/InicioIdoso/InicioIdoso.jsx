import { useState, useEffect } from 'react';
import { CardCuidador } from '../../components/CardCuidador/CardCuidador';
import * as S from './InicioIdoso.styles';
import { useGetCuidadores } from '../../hooks/useGetCuidadores';
import { useNavigate } from 'react-router';

export function InicioIdoso() {
    const navigate = useNavigate();
    const { cuidadoresData } = useGetCuidadores();

    const [idadeFiltro, setIdadeFiltro] = useState('');
    const [experienciaFiltro, setExperienciaFiltro] = useState('');
    const [formacaoFiltro, setFormacaoFiltro] = useState('');
    const [cuidadoresFiltrados, setCuidadoresFiltrados] = useState([]);

    useEffect(() => {
        let filtrados = cuidadoresData;

        if (idadeFiltro) {
            const [minIdade, maxIdade] = idadeFiltro.split('-').map(num => parseInt(num.replace('+', '')));
            filtrados = filtrados.filter(cuidador => {
                const idade = parseInt(cuidador.idade);
                if (maxIdade) {
                    return idade >= minIdade && idade <= maxIdade;
                } else {
                    return idade >= minIdade;
                }
            });
        }

        if (experienciaFiltro) {
            const [minExperiencia, maxExperiencia] = experienciaFiltro.split('-').map(num => parseInt(num.replace('+', '')));
            filtrados = filtrados.filter(cuidador => {
                const experiencia = parseInt(cuidador.experiencia);
                if (maxExperiencia) {
                    return experiencia >= minExperiencia && experiencia <= maxExperiencia;
                } else {
                    return experiencia >= minExperiencia;
                }
            });
        }

        if (formacaoFiltro) {
            const [minFormacao, maxFormacao] = formacaoFiltro.split('-').map(num => parseInt(num.replace('+', '')));
            filtrados = filtrados.filter(cuidador => {
                const formacao = parseInt(cuidador.formacao);
                if (maxFormacao) {
                    return formacao >= minFormacao && formacao <= maxFormacao;
                } else {
                    return formacao >= minFormacao;
                }
            });
        }

        setCuidadoresFiltrados(filtrados);
    }, [idadeFiltro, experienciaFiltro, formacaoFiltro, cuidadoresData]);

    return (
        <S.MainStyled>
            <S.TxtInicial>Cuidadores disponíveis para proposta</S.TxtInicial>
            <S.Linha />
            <S.DivFiltros>
                <S.SelectStyled onChange={(e) => setIdadeFiltro(e.target.value)} defaultValue="">
                    <option value="" disabled>Idade</option>
                    <option value="18-25">18 - 25 anos</option>
                    <option value="25-30">25 - 30 anos</option>
                    <option value="30-35">30 - 35 anos</option>
                    <option value="35-40">35 - 40 anos</option>
                    <option value="40+">+40 anos</option>
                </S.SelectStyled>
                <S.SelectStyled style={{ width: '12vw' }} onChange={(e) => setExperienciaFiltro(e.target.value)} defaultValue="">
                    <option value="" disabled>Experiência</option>
                    <option value="0-1">0 - 1 anos</option>
                    <option value="1-2">1 - 2 anos</option>
                    <option value="2-3">2 - 3 anos</option>
                    <option value="3-5">3 - 5 anos</option>
                    <option value="5+">+5 anos</option>
                </S.SelectStyled>
                <S.SelectStyled style={{ width: '15vw' }} onChange={(e) => setFormacaoFiltro(e.target.value)} defaultValue="">
                    <option value="" disabled>Tempo de formação</option>
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
                        key={cuidador.id}
                        linkFoto={cuidador.linkFoto} 
                        nome={cuidador.nome}
                        idade={cuidador.idade}
                        experiencia={cuidador.experiencia}
                        formacao={cuidador.formacao}
                        certificacoes={cuidador.certificacoes}
                        onClick={() => navigate('/logged/descricaoCuidador', cuidador)}
                    />
                ))}
            </S.DivCards>
        </S.MainStyled>
    )
}
