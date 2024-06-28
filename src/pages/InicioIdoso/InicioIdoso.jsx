import { CardCuidador } from '../../components/CardCuidador/CardCuidador'
import * as S from './InicioIdoso.styles'

export function InicioIdoso() {
    return(
        <S.MainStyled>
            <S.TxtInicial>Cuidadores disponíveis para proposta</S.TxtInicial>
            <S.Linha />
            <S.DivFiltros>
                <S.SelectStyled>
                    <option selected disabled>Idade</option>
                </S.SelectStyled>
                <S.SelectStyled style={{width: '12vw'}}>
                    <option selected disabled>Experiência</option>
                </S.SelectStyled>
                <S.SelectStyled style={{width: '15vw'}}>
                    <option selected disabled>Tempo de formação</option>
                </S.SelectStyled>
                <S.SelectStyled style={{width: '11vw'}}>
                    <option selected disabled>Certificações</option>
                </S.SelectStyled>
            </S.DivFiltros>
            <S.DivCards>
                <CardCuidador />
                <CardCuidador />
                <CardCuidador />
                <CardCuidador />
                <CardCuidador />
            </S.DivCards>
        </S.MainStyled>
    )
}