

export type TypeData = { 
    name: string 
    price: number 
    description?: string
    images: string[]
    categoryld: number
}
export const PRODUCTS = 'products'
export type TypeProductData ={
    name: string
    description?: string 
    images : string[]
    categoryId:number
}
export type TypeDataProductFilters={
    sort?: EnumProductSort
    searchTerm?: string
    page?: string | number
    perPage?:string | number
}
export enum EnumProductSort{
    NEWEST = 'newest',
    OLDEST = 'oldest'
}
