import { useEffect, useState } from 'react'
import { CardProposta } from '../../components/CardProposta/CardProposta'
import * as S from './InicioCuidador.styles'
import { axiosInstance } from '../../lib/axios'

export function InicioCuidador() {
    const [propostas, setPropostas] = useState([]);

    useEffect(() => {
        const fetchPropostas = async () => {
            try {
                const response = await axiosInstance.get('/proposal/getAvailable');
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
            <CardProposta
                nomeIdoso="Jucelino Euclides"
                idadeIdoso={88}
                cuidadosIdoso="ele precisa de muita ajuda no banho, para comer, deambular, não ouve de um ouvido e é paraplégico"
                nomeResponsavel="Maurício Meireles"
                telefoneResponsavel="(48) 99122-7701"
                email="barretotheo25@gmail.com"
            />
            </S.DivCards>
        </S.MainStyled>
    )
}