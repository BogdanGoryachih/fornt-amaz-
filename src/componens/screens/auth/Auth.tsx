import { useActions } from "@/src/hooks/useAction";

import { IEmailPassword } from "@/src/store/user/user.interface";
import Meta from "@/src/ui/Meta";
import Button from "@/src/ui/button/Button";
import Heading from "@/src/ui/button/Heading";
import Field from "@/src/ui/input/Field";
import { NextPage } from "next";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { validEmail } from "./valid-email";
import { useAuth } from "@/src/hooks/useAuth";
import { useAuthRedirect } from "@/src/hooks/useAuthreduct";

const AuthPage: FC = ()=>{
useAuthRedirect()
        const {isLoading} = useAuth()
        const {login,register}= useActions()
        const [type,setType] = useState<'Авторизация'| 'Регистрация'>('Авторизация')
       
        const {register:formRegister, handleSubmit,formState:{errors}
        ,reset}= useForm<IEmailPassword>({
            mode:'onChange'
   })
   const onSubmit:SubmitHandler<IEmailPassword> = (data)=>{
    if(type === 'Авторизация'){
        login(data)
    }else{
        register(data)
    }
    reset()
   }
    return( <Meta titel="auth">
        
        <section className="flex">
        <form onSubmit={handleSubmit(onSubmit)} className="from-auth-sambit">
              <Heading className="header-auth-type">{type}</Heading>
              
            <Field
             {...formRegister('email',{
                
                pattern:{
                    value: validEmail,
                    message:"Ведите валидный email",
                }
            })} placeholder="Email"
                error={errors.email?.message}/>
            <Field {...formRegister('password',{
               
                minLength:{
                    value:6,
                    message:'минимальная длина быть не мениие 6 значений'
                },
             
                
            })} type="password" placeholder="Password" error={errors.password?.message} />

            
            <Button >Авторизация</Button>
                <button className="buttonauth-reg" onClick={()=> setType(type === 'Авторизация'? 'Регистрация' : 'Авторизация')}>{(type === 'Авторизация'? 'Регистрация' : 'Авторизация')}</button>
        </form>
        </section>
    </Meta>
)}
export default AuthPage