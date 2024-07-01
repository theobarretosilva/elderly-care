import { useLocation } from 'react-router';
import * as S from './DescricaoCuidadorIdoso.styles';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../lib/axios';
import { CardIdoso } from '../../components/CardIdoso/CardIdoso';

export function DescricaoCuidadorIdoso() {
    const location = useLocation();
    const [user, setUser] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [idosos, setIdosos] = useState([]);

    useEffect(() => {
        const fetchIdosos = async () => {
            try {
                const token = localStorage.getItem('ElderlyCareToken');

                const response = await axiosInstance.get('/patients/myElder', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setIdosos(response.data);
            } catch (error) {
                console.error('Failed to fetch elders:', error);
            }
        };

        fetchIdosos();
    }, []);

    useEffect(() => {
        const fetchPerfil = async () => {
            try {
                const token = localStorage.getItem('ElderlyCareToken');

                const response = await axiosInstance.get('/patients/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(response.data);
            } catch (error) {
                console.error('Failed to fetch profile:', error);
            }
        };

        fetchPerfil();
    }, []);

    const { cuidador } = location.state || {};

    if (!user) {
        return (
            <S.MainStyled>
                <S.ImgLoading src='../../src/assets/svg/loading.svg' />
            </S.MainStyled>
        )
    }

    return (
        <>
            <S.MainStyled>
                 <S.BoxFundo>
                     <S.DivDados>
                         <S.FotoCuidador src={cuidador.photo} />
                         <div>
                             <S.TxtNome>{cuidador.name}</S.TxtNome>
                             <S.TxtInfo>Idade: {cuidador.date_birth} anos</S.TxtInfo>
                             <S.TxtInfo>Experiência: {cuidador.experience}</S.TxtInfo>
                             <S.TxtInfo>Formado(a) faz: {cuidador.training_time}</S.TxtInfo>
                         </div>
                     </S.DivDados>
                     <S.Linha />
                     <S.TxtDescricao>{cuidador.description_experience}</S.TxtDescricao>
                     <S.BtnContato onClick={() => setIsModalOpen(true)}>Enviar proposta</S.BtnContato>
                 </S.BoxFundo>
            </S.MainStyled>
             {isModalOpen && (
                <S.FundoModal onClick={() => setIsModalOpen(false)}>
                    {idosos.map((idoso) => (
                        <CardIdoso
                            key={idoso.id_elder}
                            idoso={idoso}
                            cuidador={cuidador}
                        />
                    ))}
                </S.FundoModal>
            )}
        </>
    );
}
