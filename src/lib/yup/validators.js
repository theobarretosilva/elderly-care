import { isCEP, isCPF, isDate, isPhone } from 'brazilian-values'
import * as yup from 'yup'

const errorMessages = {
    required: "Campo obrigatório",
    email: 'E-mail inválido',
    cpf: 'CPF inválido. O CPF precisa seguir o formato: "000.000.000-00"',
    telefone: 'Telefone inválido. O telefone precisa seguir o formato: "(24) 98138-0000"',
    dataNascimento: 'Data inválida. A data de nascimento precisa seguir o formato: "DD/MM/AAAA"',
    passwordLength: 'A senha precisa ter, no mínimo, 8 caracteres',
    cep: 'CEP inválido. O CEP precisa seguir o formato: "00.000-000"'
}

export const validators = {
    requiredBooleanString: yup
    .string()
    .oneOf(['true', 'false'])
    .required(errorMessages.required),
    email: yup
    .string()
    .required(errorMessages.required)
    .email(errorMessages.email),
    password: yup
    .string()
    .required(errorMessages.required)
    .min(8, errorMessages.passwordLength),
    requiredString: yup.string().required(errorMessages.required),
    telefone: yup
    .string()
    .required(errorMessages.required)
    .test('is-valid-phone', errorMessages.telefone, (value) => {
      return isPhone(value)
    }),
    cpf: yup
    .string()
    .required(errorMessages.required)
    .test('is-valid-cpf', errorMessages.cpf, (value) => {
        return isCPF(value)
    }),
    dataNascimento: yup
    .string()
    .required(errorMessages.required)
    .test('is-valid-date', errorMessages.dataNascimento, (value) => {
        return isDate(value)
    }),
    cep: yup
    .string()
    .required(errorMessages.required)
    .test('is-valid-cep', errorMessages.cep, (value) => {
        return isCEP(value)
    })
}