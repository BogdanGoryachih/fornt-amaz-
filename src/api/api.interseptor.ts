import axios from "axios";
import { errorCathch, getContentType } from "./api.helper";
import { getAccessToken, removeFromStorage } from "../service/auth/auth.helper";
import { AuthService } from "../service/auth/auth.service";

const axiosConstanse = {
    baseURL: process.env.SERVER_URL,
    headers:getContentType()
}

export const axiosClassic = axios.create(axiosConstanse)


export const instanse = axios.create(axiosConstanse)
instanse.interceptors.request.use(async config =>{
    const accessToken = getAccessToken()
    if(config.headers && accessToken)
        config.headers.Authorization = `Bearer ${accessToken}`
    
    return config
})

instanse.interceptors.response.use(config => config, async error=>{
    const originalRequest = error.config
    if
        (error?.response?.status === 401 || 
            errorCathch(error)=== 'jwt expired'||
            errorCathch(error)==='jwt must be provided'&&
            error.config &&
            !error.config._isRetry    
        ) {
            originalRequest._isRetry = true
            try{
                await AuthService.getNewTokens()
                return instanse.request(originalRequest)
            }
            catch(error){
            if(errorCathch(error) === 'jwt expired')
            removeFromStorage()
        }
                
            
        }
    
    throw error
})