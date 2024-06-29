import { useNavigate } from 'react-router'
import * as S from './PerfilIdoso.styles'
// import { useGetIdoso } from '../../hooks/useGetIdoso'
// import { useGetResponsavel } from '../../hooks/useGetResponsavel'

export function PerfilIdoso() {
    // const { idoso } = useGetIdoso();
    // const { responsavel } = useGetResponsavel();
    const navigate = useNavigate();

    return(
        <S.MainStyled>
            <S.BoxFundo>
                <S.TxtNome style={{textAlign: 'center'}}>Idoso(a)</S.TxtNome>
                <S.DivDados>
                    <S.Foto src='../../src/assets/img/user.png' />
                    <div>
                        <S.TxtNome>JUliceino ajfnadf</S.TxtNome>
                        <S.TxtInfo>Idade: </S.TxtInfo>
                    </div>
                </S.DivDados>
                <S.Linha />
                <S.TxtInfo>Necessidades</S.TxtInfo>
                <S.TxtDescricao>Mollit officia eiusmod proident proident.Mollit officia eiusmod proident proident.Mollit officia eiusmod proident proident.Mollit officia eiusmod proident proident.Mollit officia eiusmod proident proident.Mollit officia eiusmod proident proident.</S.TxtDescricao>
                <S.Linha />
                <S.TxtInfo>Histórico</S.TxtInfo>
                <S.TxtDescricao>Mollit officia eiusmod proident proident.Mollit officia eiusmod proident proident.Mollit officia eiusmod proident proident.Mollit officia eiusmod proident proident.Mollit officia eiusmod proident proident.Mollit officia eiusmod proident proident.</S.TxtDescricao>
                <S.BtnEditar style={{marginTop: '1vh'}} onClick={() => navigate('/logged/editarIdoso')}>Editar dados</S.BtnEditar>
            </S.BoxFundo>
            <S.BoxFundo>
                <S.TxtNome style={{textAlign: 'center'}}>Responsável</S.TxtNome>
                <S.DivDados>
                    <S.Foto src='../../src/assets/img/user.png' />
                    <div>
                        <S.TxtNome>Maria Lucia</S.TxtNome>
                        <S.TxtInfo>Idade: 45</S.TxtInfo>
                        <S.TxtInfo>Parentesco: Neto(a)</S.TxtInfo>
                        <S.TxtInfo>Contato: 48991227701</S.TxtInfo>
                    </div>
                </S.DivDados>
                <S.BtnEditar onClick={() => navigate('/logged/editarResponsavel')}>Editar dados</S.BtnEditar>
            </S.BoxFundo>
        </S.MainStyled>
    )
}