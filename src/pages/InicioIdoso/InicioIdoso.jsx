// import { CardCuidador } from '../../components/CardCuidador/CardCuidador'
import * as S from './InicioIdoso.styles'

export function InicioIdoso() {
    // const { cuidadoresData } = useGetCuidadores();

    return(
        <S.MainStyled>
            <S.TxtInicial>Cuidadores disponíveis para proposta</S.TxtInicial>
            <S.Linha />
            <S.DivFiltros>
                <S.SelectStyled>
                    <option selected disabled>Idade</option>
                    <option value="18-25 anos">18 - 25 anos</option>
                    <option value="25-30 anos">25 - 30 anos</option>
                    <option value="30-35 anos">30 - 35 anos</option>
                    <option value="35-40 anos">35 - 40 anos</option>
                    <option value="+40 anos">+40 anos</option>
                </S.SelectStyled>
                <S.SelectStyled style={{width: '12vw'}}>
                    <option selected disabled>Experiência</option>
                    <option value="0-1 anos">0 - 1 anos</option>
                    <option value="1-2 anos">1 - 2 anos</option>
                    <option value="2-3 anos">2 - 3 anos</option>
                    <option value="3-5 anos">3 - 5 anos</option>
                    <option value="5+ anos">+5 anos</option>
                </S.SelectStyled>
                <S.SelectStyled style={{width: '15vw'}}>
                    <option selected disabled>Tempo de formação</option>
                    <option value="0-1 anos">0 - 1 anos</option>
                    <option value="1-2 anos">1 - 2 anos</option>
                    <option value="2-3 anos">2 - 3 anos</option>
                    <option value="3-5 anos">3 - 5 anos</option>
                    <option value="5+ anos">+5 anos</option>
                </S.SelectStyled>
            </S.DivFiltros>
            <S.DivCards>
                {/* {cuidadoresData.data.map((cuidador) => (
                    <CardCuidador 
                        linkFoto={} 
                        nome={}
                        idade={}
                        experiencia={}
                        formacao={}
                    />
                ))} */}
                
            </S.DivCards>
        </S.MainStyled>
    )
}