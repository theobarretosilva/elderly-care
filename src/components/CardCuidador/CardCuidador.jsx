import * as S from './CardCuidador.styles'

export const CardCuidador = () => {
    return(
        <S.CardStyled>
            <S.ImgCuidador src='../../src/assets/img/ingresso_cuidador.png' />
            <S.DivInfo>
                <S.TxtNome>Juninho Gameplay</S.TxtNome>
                <S.TxtInfo>Idade: 29</S.TxtInfo>
                <S.TxtInfo>Experiência: +5 anos</S.TxtInfo>
                <S.TxtInfo>Formado(a) faz: +10 anos</S.TxtInfo>
                <S.TxtInfo>Certificações: 3</S.TxtInfo>
            </S.DivInfo>
        </S.CardStyled>
    )
}