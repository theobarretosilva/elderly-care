import { useLocation } from 'react-router';
import * as S from './DescricaoCuidadorIdoso.styles'
import emaisjs from '@emailjs/browser'
import toast from 'react-hot-toast';
import { useGetUser } from '../../hooks/useGetUser'

export function DescricaoCuidadorIdoso() {
    const { usuario } = useGetUser();
    const location = useLocation();

    const { cuidador } = location.state || {};

    const templateParams = {
        from_name: usuario.nome,
        to_name: cuidador.name,
        message: "Olá! Me interessei pelo seu perfil! Por favor, entre em contato comigo por meio dos contatos abaixo:",
        email: usuario.email,
        phone: usuario.telefone,
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emaisjs.send('service_j8q9d8l', 'template_vw3a6z7',  templateParams, 'R7xmXxa_lmNKUIlNW')
        .then((response) => {
            toast.success('Email de contato enviado com sucesso!', {
                duration: 4000,
                position: 'top-center',
            });

            console.log(response)
        }, (err) => {
            toast.error('Não foi possivel enviar o email de contato! Tente novamente mais tarde!', {
                duration: 4000,
                position: 'top-center',
            });

            console.log(err)
        })
    };

    return(
        <S.MainStyled>
            <S.BoxFundo>
                <S.DivDados>
                    <S.FotoCuidador src={cuidador.photoLink} />
                    <div>
                        <S.TxtNome>{cuidador.name}</S.TxtNome>
                        <S.TxtInfo>Idade: {cuidador.age}</S.TxtInfo>
                        <S.TxtInfo>Experiência: {cuidador.experience}</S.TxtInfo>
                        <S.TxtInfo>Formado(a) faz: {cuidador.training_time}</S.TxtInfo>
                    </div>
                </S.DivDados>
                <S.Linha />
                <S.TxtDescricao>{cuidador.description_experience}</S.TxtDescricao>
                <S.BtnContato onClick={sendEmail}>Entrar em contato</S.BtnContato>
            </S.BoxFundo>
        </S.MainStyled>
    )
}