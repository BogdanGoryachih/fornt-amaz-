import { getContentType } from "@/src/api/api.helper"
import { IAuthResponse, IEmailPassword } from "@/src/store/user/user.interface"
import axios from "axios"
import Cookies from "js-cookie"

import { axiosClassic, instanse } from "@/src/api/api.interseptor"
import { ICategory } from "../types/category.interface"
const CATEGORY = 'category'
export const CategoryService = {

    async getAll(){
        return axiosClassic <ICategory[]>({
            url: CATEGORY,
            method:'GET'
        })

    },
    async getById(id:string){
        return instanse <ICategory>({
            url: `${CATEGORY}/${id}`,
            method:'GET'
        })

    },
    async getBySlug(slug:string){
        return axiosClassic <ICategory>({
            url: `${CATEGORY}/by-slug${slug}`,
            method:'GET'
        })

    },
    async create(){
        return instanse <ICategory>({
            url: CATEGORY,
            method:'POST'
        })

    },
    async update(id:string | number, name:string){
        return instanse <ICategory>({
            url: `${CATEGORY}/${id}`,
            method:'PUT',
            data: name
        })

    },
    


}