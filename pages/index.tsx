import Home from "@/src/componens/Home/Home";
import { ProductService } from "@/src/service/product.service";
import { IProduct, TypePagionationProducts} from "@/src/types/product.interface";
import { GetStaticProps, NextPage } from "next";

const HomePage: NextPage<TypePagionationProducts> =
({length,products})=>{ 
  return <Home products={products} length={length}/>
}

export const getStaticProps : GetStaticProps<TypePagionationProducts> = async ()=>{
  const data = await ProductService.getAll({
    page:1,
    perPage:5
  })
  return{
    props:data
    
  } 
}

export default HomePage