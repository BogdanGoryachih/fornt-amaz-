import { axiosClassic, instanse } from "../api/api.interseptor"
import { TypeData, TypeDataProductFilters } from "../product/product.types"
import { IProduct, TypePagionationProducts } from "../types/product.interface"

const PRODUCTS = 'products'


export const ProductService = {
    async getAll(queryData ={} as TypeDataProductFilters ) {
        const {data}= await axiosClassic<TypePagionationProducts>({ 
        url: PRODUCTS,
        method: 'GET',
        params: queryData
    })
    return data
},


    async getSimilar(id:string | number,) {
        return axiosClassic<IProduct[]>({ 
        url: `${PRODUCTS}/similar/${id}`,
        method: 'GET',
        
    })
},
async getBySlug(id:string) {
    return axiosClassic<IProduct>({ 
    url: `${PRODUCTS}/by-slug/${id}`,
    method: 'GET',
    
})

},
async getByCategory(categorySlug:string) {
    return axiosClassic<IProduct[]>({ 
    url: `${PRODUCTS}/by-category/${categorySlug}`,
    method: 'GET',
    
})

},
async getyCategry(categorySlug:string) {
    return instanse<IProduct[]>({ 
    url: `${PRODUCTS}/by-category/${categorySlug}`,
    method: 'GET',
    
})
},
async leave (productId: string | number, data: TypeData) {
    return instanse<IProduct>({
        url:`${PRODUCTS}/leave${productId}`,
        method: 'POST',
        data
    })

}
}