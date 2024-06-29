import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { schemas } from "../lib/yup/schemas";
import { useNavigate } from "react-router";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useCreateAccountIdoso = () => {
    const [name, setName] = useState();
    const [cpf, setCpf] = useState();
    const [date_birth, setDate_birth] = useState();
    const [photo, setphoto] = useState();
    const [cep, setCep] = useState();
    const [street, setStreet] = useState();
    const [number, setNumber] = useState();
    const [district, setDistrict] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [complement, setComplement] = useState();
    const [ministration, setMinistration] = useState();
    const [historic, setHistoric] = useState();

    const defaultValues = {
        name: '',
        cpf: '',
        date_birth: '',
        // photo: '',
        address: {
            cep: '',
            street: '',
            number: '',
            district: '',
            city: '',
            state: '',
            complement: '',
        },
        ministration: '',
        historic: ''
    };

    const [responseError, setResponseError] = useState('')

    const {
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemas.idosoForm),
        defaultValues,
    })

    const payload = {
        name,
        cpf,
        date_birth,
        photo,
        address: {
            cep,
            street,
            number,
            district,
            city,
            state,
            complement,
        },
        ministration,
        historic
    };

    const navigate = useNavigate()

    const submit = async (e) => {
        e.preventDefault();
    
        try {
            // Mostrar notificação de carregamento
            axiosInstance.post('/patients/signup/elder', payload)
            .then((response) => {
                toast.success('Idoso cadastrado com sucesso! Redirecionando para o início')
                setTimeout(() => navigate('/'), 3 * 1000);
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
            setName,
            setNumber,
            setphoto,
            setState,
            setStreet,
            setMinistration,
            setHistoric
        },
        submit,
        register,
        errors,
        responseError
    }
}