import { useQuery } from "@tanstack/react-query"
import { UserService } from "../service/user.service"
import { IFullUser} from "../types/user.interface"
import { errorCathch } from "../api/api.helper"
import { useAuth } from "./useAuth"

export const useProfile = ()=>{
    const {user} = useAuth()
    const {data} = useQuery(['get profile'],()=> UserService.getProfile(),{
        
        select: ({data}) => data,
        onError: error =>{
            console.log(errorCathch(error))
        },
        enabled: !!user

    })
    return {profile:data }
}