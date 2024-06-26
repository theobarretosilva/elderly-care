import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { schemas } from '../lib/yup/schemas'
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from '../lib/axios'
import toast from "react-hot-toast";

export const useCreateAccountCuidador = () => {
    const defaultValues = {
        nomeCompleto: '',
        cpf: '',
        email: '',
        dataNascimento: '',
        address: {
            cep: '',
            street: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: '',
            complemento: '',
        },
        telefone: '',
        senha: '',
        tempoExperiencia: '',
        casosTrabalho: '',
        tempoFormacao: ''
    };

    const [responseError, setResponseError] = useState('')

    const {
        control,
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemas.cuidadorForm),
        defaultValues,
    })

    const navigate = useNavigate()

    const cadastrarCuidadorMutation = useMutation({
        mutationFn: (data) => {
            setResponseError('')
            console.log(data)
            const createAccountPromise = axiosInstance.post('/caregiver/signup', data)
            toast.promise(createAccountPromise, {
              loading: 'Processando...',
              success: 'Conta criada!',
              error: 'Houve um erro, tente novamente mais tarde.',
            })
            return createAccountPromise
        },
        onSuccess: () => {
            setTimeout(() => navigate('/caregiver/signin'), 3 * 1000)
        },
        onError: (error) => {
            const errorMessage = error.response?.data.message
            const isRepeatedCpf = errorMessage?.toLocaleLowerCase().includes('cpf')
            const isRepeatedEmail = errorMessage
              ?.toLocaleLowerCase()
              .includes('email')
      
            if (isRepeatedCpf) {
              setError('cpf', { message: 'Já existe um registro com esse CPF' })
              return
            }
      
            if (isRepeatedEmail) {
              setError('email', { message: 'Já existe um registro com esse email' })
              return
            }
      
            setResponseError('Houve um erro, tente novamente mais tarde.')
        },
    })

    const handleCadastroForm = (data) => {
        cadastrarCuidadorMutation.mutate(data)
    }
    
    const onSubmit = handleSubmit(handleCadastroForm)
    
    return {
    isLoading: cadastrarCuidadorMutation.isLoading,
    onSubmit,
    control,
    register,
    errors,
    responseError,
    }
}