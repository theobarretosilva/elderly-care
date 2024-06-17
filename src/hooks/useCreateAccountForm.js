export const useCreateAccountForm = () => {
    const defaultValues = {
        nomeCompleto: '',
        cpf: '',
        endereco: '',
        telefone: '',
        dataNascimento: '',
        email: '',
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
    } = useForm<ProfileForm>({
        resolver: yupResolver(schemas.profileForm),
        defaultValues,
    })

    const navigate = useNavigate()

}