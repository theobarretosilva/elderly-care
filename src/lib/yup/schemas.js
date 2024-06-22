import * as yup from 'yup'
import { validators } from './validators'

export const schemas = {
    cuidadorForm: yup.object().shape({
        nomeCompleto: validators.requiredString,
        cpf: validators.cpf,
        endereco: validators.requiredString,
        telefone: validators.telefone,
        dataNascimento: validators.dataNascimento,
        email: validators.email,
        senha: validators.password,
        tempoExperiencia: validators.requiredString,
        casosTrabalho: validators.requiredString,
        tempoFormacao: validators.requiredString
    })
}