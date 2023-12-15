import { CategoryService } from "@/src/service/category.service";
import { ProductService } from "@/src/service/product.service";
import { ICategory } from "@/src/types/category.interface";
import { IProduct } from "@/src/types/product.interface";
import Meta from "@/src/ui/Meta";
import Catalog from "@/src/ui/catalog/Catalog";
import Layout from "@/src/ui/layuot/Layout";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const CategoryPage: NextPage <{products:IProduct[]; category:ICategory}> =({products,category})=>{
    return(
        <Meta titel={category.name}>
            <Layout>
                <Catalog  products={products || []} title={category.name}/>
            </Layout>
        </Meta>
    )
}
export const getStaticPhats : GetStaticPaths = async () => {
    const categories = await CategoryService.getAll()

    const paths = categories.data.map(category =>{
        
        return{
            params: {slug: category.slug}
            
        }
        
    })
    return {paths , fallback: 'blocking'}
}
export const getStaticProps : GetStaticProps = async ({params}) =>{
    const {data :products} = await ProductService.getByCategory(
        params?.slug as string
    )
    const {data:category} = await CategoryService.getBySlug(
        params?.slug as string
    )
    return{
        props:{
            products,
            category
        }
    }
}

export default CategoryPage