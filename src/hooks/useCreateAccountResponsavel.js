// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router";
// import { useMutation } from "@tanstack/react-query";
// import { axiosInstance } from '../lib/axios'
// import { toast } from "react-hot-toast";

import { useState } from "react";
import { axiosInstance } from "../lib/axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemas } from "../lib/yup/schemas";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const useCreateAccountResponsavel = () => {
    const [name, setName] = useState();
    const [cpf, setCpf] = useState();
    const [photo_link, setPhoto_link] = useState();
    const [date_birth, setDate_birth] = useState();
    const [phone, setPhone] = useState();
    const [cep, setCep] = useState();
    const [street, setStreet] = useState();
    const [number, setNumber] = useState();
    const [district, setDistrict] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [complement, setComplement] = useState();
    const [kinship, setKinship] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    const defaultValues = {
        name: '',
        cpf: '',
        // photoLink: '',
        // date_birth: '',
        address: {
            cep: '',
            street: '',
            number: '',
            district: '',
            city: '',
            state: '',
            complement: '',
        },
        phone: '',
        kinship: '',
        email: '',
        pass: '',
    };

    const [responseError, setResponseError] = useState('')

    const {
        register,
        setError,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemas.responsavelForm),
        defaultValues,
    })

    const payload = {
        name,
        cpf,
        photo_link,
        date_birth,
        phone,
        address: {
            cep,
            street,
            number,
            district,
            city,
            state,
            complement,
        },
        kinship,
        email,
        pass
    };

    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
    
        try {
            // Mostrar notificação de carregamento
            axiosInstance.post('/patients/signup/responsible', payload)
            .then((response) => {
                toast.success('Responsável criado com sucesso! Seguindo para cadastro do idoso.')
                setTimeout(() => navigate('/cadastroIdoso'), 3 * 1000);
            })

        } catch (error) {
            console.log(error)
            // Captura e exibe o erro se a promise falhar
            setResponseError('Houve um erro, tente novamente mais tarde.');
                // if (response.statusText === "Conflict") {
                //     return toast.error('Já existe um usuário com o mesmo CPF/Email cadastrado!');
                // }
        }
    };
    

    return{
        setValue: {
            setCep,
            setCity,
            setComplement,
            setCpf,
            setDate_birth,
            setDistrict,
            setEmail,
            setKinship,
            setName,
            setNumber,
            setPass,
            setPhone,
            setPhoto_link,
            setState,
            setStreet
        },
        submit,
        register,
        errors,
        responseError
    }
}