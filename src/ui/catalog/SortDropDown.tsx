import { EnumProductSort } from "@/src/product/product.types";
import { Dispatch, FC, SetStateAction } from "react";

interface ISortDropDown{
    sortType:EnumProductSort
    setSortType:Dispatch<SetStateAction <EnumProductSort>>
}

const SortDropDown : FC<ISortDropDown>= ({setSortType,sortType})=>{
    return(
     <div className="">
        <select value={sortType} onChange={(e)=>setSortType(e.target.value as any)} >
            {(Object.keys(EnumProductSort)as Array<keyof typeof EnumProductSort>).map((key)=>{
                return <option key={key}  value={EnumProductSort[key]}>{EnumProductSort[key]}</option>
            })}
            
         </select>
    </div>
    )
}
export default  SortDropDown