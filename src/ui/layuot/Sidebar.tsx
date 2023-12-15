
import { CategoryService } from "@/src/service/category.service";
import { ProductService } from "@/src/service/product.service";
import { ICategory } from "@/src/types/category.interface";
import { IProduct } from "@/src/types/product.interface";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import Meta from "../Meta";
import Catalog from "../catalog/Catalog";
import Layout from "./Layout";
import { useAuth } from "@/src/hooks/useAuth";
import { useActions } from "@/src/hooks/useAction";

const Sidebar : FC = ()=>{
    const {user} = useAuth()
    const {logut} = useActions()
    return <aside className="sidebar-aside">
        {!!user && <button onClick={()=>logut()}>Вийти</button>}
    </aside>
}
export default Sidebar