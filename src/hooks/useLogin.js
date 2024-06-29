import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { schemas } from '../lib/yup/schemas'
import { axiosInstance } from '../lib/axios'
import { useMutation } from "@tanstack/react-query";

export const useLogin = (value) => {
  const defaultValues = { email: '', pass: '' };
  const navigate = useNavigate();
  const [responseError, setResponseError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemas.loginForm),
    defaultValues,
  })

  const handleLoginSuccess = ({ token }) => {
    localStorage.setItem('ElderlyCareToken', token)
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`
    navigate('/login')
    localStorage.setItem("Usuario atual", value);
  }

  const loginMutation = useMutation({
    mutationFn: async (data) => {
      setResponseError('')
      const { data: responseData } = await axiosInstance.post(
        `${value}/signin`,
        data
      )
      return responseData
    },
    onSuccess: handleLoginSuccess,
    onError: (error) => {
      const errorMessage = error.response?.data.message
        ? error.response.data.message
        : 'Houve um erro, tente novamente mais tarde.'
      setResponseError(errorMessage)
    },
  })

  const handleLogin = (data) => {
    loginMutation.mutate(data)
  }
  
  const onSubmit = handleSubmit(handleLogin)

  return {
    isLoading: loginMutation.isLoading,
    onSubmit,
    errors,
    register,
    responseError,
  }
}