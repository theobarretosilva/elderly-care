import { useState } from "react";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const useCreateAccountResponsavel = () => {
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
    const [kinship, setKinship] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    const [responseError, setResponseError] = useState('')

    const payload = {
        name,
        cpf,
        photo,
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
            axiosInstance.post('/patients/signup/responsible', payload)
            .then((response) => {
                toast.success('Responsável criado com sucesso! Seguindo para cadastro do idoso.')
                setTimeout(() => navigate('/cadastroIdoso'), 3 * 1000);
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
            setKinship,
            setName,
            setNumber,
            setPass,
            setPhone,
            setphoto,
            setState,
            setStreet
        },
        submit,
        responseError
    }
}