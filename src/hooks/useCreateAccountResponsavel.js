import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { schemas } from '../lib/yup/schemas'
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from '../lib/axios'
import toast from "react-hot-toast";

export const useCreateAccountResponsavel = () => {
    const defaultValues = {
        nomeCompleto: '',
        cpf: '',
        linkFoto: '',
        endereco: {
            cep: '',
            rua: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: '',
            complemento: '',
        },
        telefone: '',
        parentesco: '',
        email: '',
        senha: '',
    };

    const [responseError, setResponseError] = useState('')

    const {
        control,
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemas.responsavelForm),
        defaultValues,
    })

    const navigate = useNavigate()

    const cadastrarResponsavelMutation = useMutation({
        mutationFn: (data) => {
            setResponseError('')
            const createAccountPromise = axiosInstance.post('/patients/signup/responsible', data)
            toast.promise(createAccountPromise, {
              loading: 'Processando...',
              success: 'Conta criada!',
              error: 'Houve um erro, tente novamente mais tarde.',
            })
            return createAccountPromise
        },
        onSuccess: () => {
            setTimeout(() => navigate('/cadastroIdoso'), 3 * 1000)
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
        cadastrarResponsavelMutation.mutate(data)
    }
    
    const onSubmit = handleSubmit(handleCadastroForm)
    
    return {
        isLoading: cadastrarResponsavelMutation.isLoading,
        onSubmit,
        control,
        register,
        errors,
        responseError,
    }
}