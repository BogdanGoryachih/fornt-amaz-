import { ICategory } from "./category.interface"

export interface IProduct{
    id:number
    name:string
    slug:string
    description:string
    images:string[]
    createdAt:string
    category: ICategory
  
}
export interface IProductDetails{
    product: IProduct
}

export type TypePagionationProducts = {
    length:number
    products:IProduct[]
}