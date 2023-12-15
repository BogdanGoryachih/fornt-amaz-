import { IProduct } from "@/src/types/product.interface";
import { FC } from "react";
import ProductItem from "./ProductItem";
import Heading from "../button/Heading";
import React from 'react';
import fs from 'fs';
import Docxtemplater from 'docxtemplater';
import Link from "next/link";
interface ICatalog {
    products: IProduct[];
    title?: string;
  }
  
  const Catalog: FC<ICatalog> =  ({ products, title}) => {
    return (
        <section>
            
        {title && <Heading>{title}</Heading>}
     
        {products.length ? (
          <div className="catalog-item">
            {products.map((product) => (
         
                <ProductItem key={product.id} product={product} />
       
              
            ))}
          </div>
        ) : (
          <div className="">There are no products</div>
          
        )}
      </section>
    );
  };
  
  export default Catalog;
  