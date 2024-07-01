import { useState } from "react";
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
            axiosInstance.post('/patients/signup/elder', payload)
            .then((response) => {
                toast.success('Idoso cadastrado com sucesso! Redirecionando para o início')
                setTimeout(() => navigate('/'), 3 * 1000);
            })

        } catch (error) {
            window.alert(error)
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
    }
}