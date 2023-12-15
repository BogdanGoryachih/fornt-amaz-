
import { instanse } from "@/src/api/api.interseptor"
import { ICategory } from "../types/category.interface"
import { IFullUser, IUser } from "../types/user.interface"
const User = 'users'
type TypeData={
    email: string
    password?: string
    avatarPath: string
    phone?:string
    name?: string
}
export const UserService = {
    async getProfile(){
        return instanse <IFullUser>({
            url: `${User}/profile`,
            method:'GET'
        })

    },
   
    async updateProfile(data: TypeData){
        return instanse <IUser>({
            url: `${User}/profile`,
            method:'PUT',
            data
        })

    },
    async toggleFavorite(productId: number){
        return instanse <IUser>({
            url: `${User}/profile/favorites/${productId}`,
            method:'PATCH'
        })

    },
    


}