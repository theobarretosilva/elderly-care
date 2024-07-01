import * as yup from 'yup';
import { validators } from './validators';

export const schemas = {
    loginForm: yup.object().shape({
        email: validators.email,
        password: validators.password
    }),
    cuidadorForm: yup.object().shape({
        name: validators.requiredString,
        cpf: validators.cpf,
        email: validators.email,
        date_birth: validators.dataNascimento,
        address: yup.object().shape({
            cep: validators.cep,
            street: validators.requiredString,
            number: validators.requiredString,
            district: validators.requiredString,
            city: validators.requiredString,
            state: validators.requiredString,
            complement: validators.requiredString,
        }),
        phone: validators.telefone,
        password: validators.password,
        photoLink: validators.requiredString,
        experience: validators.requiredString,
        description_experience: validators.requiredString,
        training_time: validators.requiredString,
    }),
    responsavelForm: yup.object().shape({
        name: validators.requiredString,
        cpf: validators.cpf,
        photoLink: validators.requiredString,
        date_birth: validators.dataNascimento,
        address: yup.object().shape({
            cep: validators.cep,
            street: validators.requiredString,
            number: validators.requiredString,
            district: validators.requiredString,
            city: validators.requiredString,
            state: validators.requiredString,
            complement: validators.requiredString,
        }),
        phone: validators.telefone,
        kinship: validators.requiredString,
        email: validators.email,
        pass: validators.password,
    }),
    idosoForm: yup.object().shape({
        name: validators.requiredString,
        cpf: validators.cpf,
        date_birth: validators.dataNascimento,
        photoLink: validators.requiredString,
        address: yup.object().shape({
            cep: validators.cep,
            street: validators.requiredString,
            number: validators.requiredString,
            district: validators.requiredString,
            city: validators.requiredString,
            state: validators.requiredString,
            complement: validators.requiredString,
        }),
        ministration: validators.requiredString,
        historic: validators.requiredString
    }),
    editarIdosoForm: yup.object().shape({
        date_birth: validators.dataNascimento,
        ministration: validators.requiredString,
        historic: validators.requiredString,
        address: yup.object().shape({
            cep: validators.cep,
            street: validators.requiredString,
            number: validators.requiredString,
            district: validators.requiredString,
            city: validators.requiredString,
            state: validators.requiredString,
            complement: validators.requiredString,
        }),
    })
};
