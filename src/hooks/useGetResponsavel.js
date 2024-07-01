import { axiosInstance } from "../lib/axios";

export const useGetResponsavel = () => {
    const fetchPerfil = async () => {
        try {
            const token = localStorage.getItem('ElderlyCareToken');

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