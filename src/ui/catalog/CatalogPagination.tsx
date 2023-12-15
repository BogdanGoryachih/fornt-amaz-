import { IProduct, TypePagionationProducts } from "@/src/types/product.interface";
import { FC, useState } from "react";
import ProductItem from "./ProductItem";
import Heading from "../button/Heading";
import SortDropDown from "./SortDropDown";
import Button from "../button/Button";
import { EnumProductSort, TypeProductData } from "@/src/product/product.types";
import { useQuery } from "@tanstack/react-query";
import { ProductService } from "@/src/service/product.service";
import Swiper from "@/src/store/ccarousel/Swipers";
import ButtonPagination from "../button/ButtonPagination";
import Footer from "./Footer";

interface ICatalogPagination{
    data: TypePagionationProducts
    titel?: string
}

const CatalogPagination: FC<ICatalogPagination> = 
({data,titel})=>{
   
    const [page,setPage]= useState(1)
    const [sortType, setSortType] = useState<EnumProductSort>(EnumProductSort.NEWEST)

    const {data:response} = useQuery(
        ['products', sortType,page],()=>ProductService.getAll({
            page,
            perPage:5,
            sort:sortType
        }),
        {
            initialData:data,
            keepPreviousData: true
            

        }
    )

    return (
        <section>
            
            <Swiper/>
            <SortDropDown sortType={sortType} setSortType={setSortType}/>
            {   
               response.products.length? (
                <>
                    <div className="catalog-item">
                        {response.products.map(product =>(
                            <ProductItem key={product.id } product={product} />
                        ))}
                    </div>
                    <div className="Array">
                        {(Array.from({length:response.length/4}).map((_, index)=>{
                            const pageNumber = index +1
                            return(
                                <div className="pagination-lenght">
                                <ButtonPagination onClick={()=>setPage(pageNumber)}>{pageNumber}</ButtonPagination>
                                </div>
                            )
                        }))}
                    </div>
                    {/* <div className="pagination-button">
                        <Button onClick={()=>setPage(page+1)}>load more</Button>
                   </div> */}
                </>
                ):(
                    <div className="">В вашому кошику пусто</div>
                )
            }
            
        </section>
    )
}
export default CatalogPagination