import { useNavigate } from "react-router"

export const useLogOutIfExpiredToken = () => {
    const navigate = useNavigate()

    const handleLogOutIfExpiredToken = (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem('ElderlyCareToken')
        navigate('/')
      }
    }
  
    return { handleLogOutIfExpiredToken }
}