import { useQuery } from "@tanstack/react-query"
import { axiosInstance } from '../lib/axios'
import { useLogOutIfExpiredToken } from './useLogOutIfExpiredToken'

export const useGetCuidadores = () => {
    const { handleLogOutIfExpiredToken } = useLogOutIfExpiredToken();

    const getCuidadoresQuery = useQuery(['/caregiver/getAvailable'], {
        queryFn: async () => {
            const { data } = await axiosInstance.get('/caregiver/getAvailable');
            return data;
        },
        onError: handleLogOutIfExpiredToken,
    });

    return { getCuidadoresQuery };
}