import { useForm } from 'react-hook-form';
import { useGetIdoso } from './useGetIdoso'
import { yupResolver } from '@hookform/resolvers/yup';
import { schemas } from '../lib/yup/schemas'
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { axiosInstance } from '../lib/axios'

export const useEditarIdoso = () => {
    const { idoso } = useGetIdoso();

    const defaultValues = {
        date_birth: '',
        ministration: '',
        historic: '',
        address: {
            cep: '',
            street: '',
            number: '',
            district: '',
            city: '',
            state: '',
            complement: ''
        }
    };

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(schemas.editarIdosoForm),
        defaultValues,
    })

    useEffect(() => {
        if (idoso) {
            setValue('date_birth', idoso.date_birth)
            setValue('ministration', idoso.ministration)
            setValue('historic', idoso.historic)
            setValue('address', idoso.address)
        }
    }, [idoso, setValue]);

    const editarIdosoMutation = useMutation({
        mutationFn: (data) => {
            const { date_birth, ministration, historic, address  } = data;
            const payload = {
            date_birth,
            password: optionalPassword || undefined,
            confirmPassword: optionalConfirmPassword || undefined,
            }
            const editPromise = axiosInstance.put('/elderly/perfil', payload)
            toast.promise(editPromise, {
            loading: 'Processando...',
            success: 'Dados atualizados!',
            error: 'Houve um erro, tente novamente mais tarde.',
            })
            return editPromise
        },
    });
}