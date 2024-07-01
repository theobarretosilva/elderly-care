import { axiosInstance } from "../lib/axios";

export const useGetResponsavel = () => {
    const fetchPerfil = async () => {
        try {
            // Supondo que você tenha o token armazenado em algum lugar, como o localStorage ou um state
            const token = localStorage.getItem('ElderlyCareToken'); // ou obtenha de onde você armazena o token

            const response = await axiosInstance.get('/patients/profile', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            console.error('Failed to fetch profile:', error);
        }
    };

}