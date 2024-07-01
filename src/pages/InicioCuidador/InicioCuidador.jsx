import { useEffect, useState } from 'react'
import * as S from './InicioCuidador.styles'
import { axiosInstance } from '../../lib/axios'
import { CardProposta } from '../../components/CardProposta/CardProposta'

export function InicioCuidador() {
    const [propostas, setPropostas] = useState([]);

    useEffect(() => {
        const fetchPropostas = async () => {
            try {
                const token = localStorage.getItem('ElderlyCareToken');

                const response = await axiosInstance.get('/proposal/getAvailable', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setPropostas(response.data);
                console.log(response.data)
            } catch (error) {
                console.log("Não foi possível recuperar suas propostas", error)
            }
        };

        fetchPropostas();
    }, [])

    return(
        <S.MainStyled>
            <S.TxtInicial>Propostas feitas para você</S.TxtInicial>
            <S.Linha />
            <S.DivCards>
                {propostas.map((proposta) => {
                    <CardProposta
                        nomeIdoso={proposta.elder_id.name}
                        idadeIdoso={proposta.elder_id.date_birth}
                        cuidadosIdoso={proposta.elder_id.ministration}
                        nomeResponsavel={proposta.elder_id.responsible_id.name}
                        telefoneResponsavel={proposta.elder_id.responsible_id.phone}
                        email={proposta.elder_id.responsible_id.email}
                    />  
                })}
            </S.DivCards>
        </S.MainStyled>
    )
}