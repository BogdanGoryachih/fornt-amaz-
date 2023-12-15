import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthResponse, IEmailPassword } from "./user.interface";
import { AuthService } from "@/src/service/auth/auth.service";
import { removeFromStorage } from "@/src/service/auth/auth.helper";
import { errorCathch } from "@/src/api/api.helper";
//reg
export const register = createAsyncThunk<IAuthResponse,IEmailPassword>(
    'auth/register',
    async (data,thunkApi)=>{
        try{
            const response = await AuthService.main('register',data)
            return response

        } catch(error){
            return thunkApi.rejectWithValue(error)
        }
    }
)
// log
export const login =  createAsyncThunk<IAuthResponse,IEmailPassword>(
    'auth/login',
    async (data,thunkApi)=>{
        try{
            const response = await AuthService.main('login',data)
            return response

        } catch(error){
            return thunkApi.rejectWithValue(error)
        }
    }
)
//logut
export const logut = createAsyncThunk('auth/logout',async()=>{
    removeFromStorage()
})
//chekauth

export const checkAuth = createAsyncThunk<IAuthResponse>(
    'auth/chek-auth',
    async(_,thunkApi)=>{
        try{
            const response = await AuthService.getNewTokens()
            return response.data

        } catch(error){
            if(errorCathch(error)==='jwt expired'){
                thunkApi.dispatch(logut())
            }
            return thunkApi.rejectWithValue(error)
        }
    }
)