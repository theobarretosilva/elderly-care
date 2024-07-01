import { useState } from "react";
import { useNavigate } from "react-router";
import { axiosInstance } from '../lib/axios'
import toast from "react-hot-toast";

export const useCreateAccountCuidador = () => {
    const [name, setName] = useState();
    const [cpf, setCpf] = useState();
    const [photo, setphoto] = useState();
    const [date_birth, setDate_birth] = useState();
    const [phone, setPhone] = useState();
    const [cep, setCep] = useState();
    const [street, setStreet] = useState();
    const [number, setNumber] = useState();
    const [district, setDistrict] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [complement, setComplement] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [experience, setExperience] = useState();
    const [description_experience, setDescription_experience] = useState();
    const [training_time, setTraining_time] = useState();

    const [responseError, setResponseError] = useState('')

    const payload = {
        name,
        cpf,
        email,
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
        phone,
        password,
        experience,
        description_experience,
        training_time,
    };

    const navigate = useNavigate()

    const submit = async (e) => {
        e.preventDefault();
    
        try {
            axiosInstance.post('/caregiver/signup', payload)
            .then((response) => {
                toast.success('Cuidador cadastrado com sucesso! Seguindo para página inicial.')
                setTimeout(() => navigate('/'), 3 * 1000);
            })

        } catch (error) {
            window.alert(error)
            setResponseError('Houve um erro, tente novamente mais tarde.');
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
            setName,
            setNumber,
            setPhone,
            setphoto,
            setState,
            setStreet,
            setPassword,
            setExperience,
            setDescription_experience,
            setTraining_time
        },
        submit,
        responseError
    }
}