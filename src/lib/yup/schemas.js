import * as yup from 'yup';
import { validators } from './validators';

export const schemas = {
    cuidadorForm: yup.object().shape({
        nomeCompleto: validators.requiredString,
        cpf: validators.cpf,
        email: validators.email,
        dataNascimento: validators.dataNascimento,
        address: yup.object().shape({
            cep: validators.cep,
            rua: validators.requiredString,
            numero: validators.requiredString,
            bairro: validators.requiredString,
            cidade: validators.requiredString,
            estado: validators.requiredString,
            complemento: validators.requiredString,
        }),
        telefone: validators.telefone,
        senha: validators.password,
        tempoExperiencia: validators.requiredString,
        casosTrabalho: validators.requiredString,
        tempoFormacao: validators.requiredString,
    }),
    responsavelForm: yup.object().shape({
        nomeCompleto: validators.requiredString,
        cpf: validators.cpf,
        endereco: yup.object().shape({
            cep: validators.cep,
            rua: validators.requiredString,
            numero: validators.requiredString,
            bairro: validators.requiredString,
            cidade: validators.requiredString,
            estado: validators.requiredString,
            complemento: validators.requiredString,
        }),
        telefone: validators.telefone,
        parentesco: validators.requiredString,
        email: validators.email,
        senha: validators.password,
    }),
    idosoForm: yup.object().shape({
        nomeCompleto: validators.requiredString,
        cpf: validators.cpf,
        dataNascimento: validators.dataNascimento,
        endereco: yup.object().shape({
            cep: validators.cep,
            rua: validators.requiredString,
            numero: validators.requiredString,
            bairro: validators.requiredString,
            cidade: validators.requiredString,
            estado: validators.requiredString,
            complemento: validators.requiredString,
        }),
        tipoCuidados: validators.requiredString,
        historicoIdoso: validators.requiredString
    })
};
