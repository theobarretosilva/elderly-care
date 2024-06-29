import { useLocation } from 'react-router';
import * as S from './DescricaoCuidadorIdoso.styles'
import emaisjs from '@emailjs/browser'
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../lib/axios';

export function DescricaoCuidadorIdoso() {
    const location = useLocation();
    const [user, setUser] = useState();

    useEffect(() => {
        const fetchPerfil = async () => {
            try {
                // Supondo que você tenha o token armazenado em algum lugar, como o localStorage ou um state
                const token = localStorage.getItem('ElderlyCareToken'); // ou obtenha de onde você armazena o token

                const response = await axiosInstance.get('/patients/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(response.data)
                setUser(response.data);
            } catch (error) {
                console.error('Failed to fetch profile:', error);
            }
        };

        fetchPerfil();
    }, []);

    const { cuidador } = location.state || {};

    console.log(user);

    const templateParams = {
        from_name: user.name,
        to_name: cuidador.name,
        message: "Olá! Me interessei pelo seu perfil! Por favor, entre em contato comigo por meio dos contatos abaixo:",
        email: user.email,
        phone: user.phone,
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