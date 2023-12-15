import { FC, PropsWithChildren, useEffect } from "react";
import { TypeComponentAuthFields } from "./auth-pages.types";
import dynamic from "next/dynamic";
import { useAuth } from "../hooks/useAuth";
import { useActions } from "../hooks/useAction";
import { useRouter } from "next/router";
import { getAccessToken } from "../service/auth/auth.helper";
import Cookies from "js-cookie";
const DynamicChekRole = dynamic(()=> import('./Check-role'),{ssr:false})

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({Component:{
    isOnlyUser}, children})=>{

        const {user} = useAuth()
        const {checkAuth, logut}= useActions()
        const {pathname} = useRouter()

        useEffect(()=>{
            const accessToken = getAccessToken()
            if(accessToken)
                checkAuth()
            
        }, [])
        useEffect(()=>{
            const refreshToken = Cookies.get('refreshToken')
            if(!refreshToken&&user){
                logut()
            }
        },[pathname])

    return isOnlyUser?( <DynamicChekRole Component={{isOnlyUser}} children={children}></DynamicChekRole>):(<>{children}</>)
}
export default AuthProvider