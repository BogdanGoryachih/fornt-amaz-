
import { useActions } from "@/src/hooks/useAction";
import { useAuth } from "@/src/hooks/useAuth";
import { TypePagionationProducts } from "@/src/types/product.interface";
import Meta from "@/src/ui/Meta";
import Heading from "@/src/ui/button/Heading";
import Catalog from "@/src/ui/catalog/Catalog";
import CatalogPagination from "@/src/ui/catalog/CatalogPagination";
import Layout from "@/src/ui/layuot/Layout";
import { FC } from "react";

const Home : FC <TypePagionationProducts>= ({products,length})=>{
 return( 
    <Meta titel="Home">
        <Layout>
        <CatalogPagination titel="4308 Склад" data={{products, length}}/>
        
        </Layout>
    </Meta>
)
}
export default Home