import { useForm } from 'react-hook-form';
import { useGetIdoso } from './useGetIdoso'
import { yupResolver } from '@hookform/resolvers/yup';
import { schemas } from '../lib/yup/schemas'
import { useEffect } from 'react';

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
    }, [idoso, setValue])

    
}