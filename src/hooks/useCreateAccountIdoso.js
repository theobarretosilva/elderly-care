import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { schemas } from "../lib/yup/schemas";
import { useNavigate } from "react-router";
import { axiosInstance } from "../lib/axios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreateAccountIdoso = () => {
    const defaultValues = {
        name: '',
        cpf: '',
        date_birth: '',
        photoLink: '',
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
        control,
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemas.idosoForm),
        defaultValues,
    })

    const navigate = useNavigate()

    const cadastrarIdosoMutation = useMutation({
        mutationFn: (data) => {
            setResponseError('')
            const createAccountPromise = axiosInstance.post('/patients/signup/elder', data)
            toast.promise(createAccountPromise, {
              loading: 'Processando...',
              success: 'Conta criada!',
              error: 'Houve um erro, tente novamente mais tarde.',
            })
            return createAccountPromise
        },
        onSuccess: () => {
            setTimeout(() => navigate('/patients/signin'), 3 * 1000)
        },
        onError: (error) => {
            const errorMessage = error.response?.data.message
            const isRepeatedCpf = errorMessage?.toLocaleLowerCase().includes('cpf')
      
            if (isRepeatedCpf) {
              setError('cpf', { message: 'Já existe um registro com esse CPF' })
              return
            }
      
            setResponseError('Houve um erro, tente novamente mais tarde.')
        },
    });

    const handleCadastroForm = (data) => {
        cadastrarIdosoMutation.mutate(data)
    }
    
    const onSubmit = handleSubmit(handleCadastroForm)
    
    return {
        isLoading: cadastrarIdosoMutation.isLoading,
        onSubmit,
        control,
        register,
        errors,
        responseError,
    }
}