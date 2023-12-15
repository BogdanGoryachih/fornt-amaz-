import { IProduct } from "@/src/types/product.interface";
import Image from "next/image";
import { FC } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const DynamicFavoriteButton = dynamic(()=> import('./FavoriteButton'),{
    ssr:false
})


const ProductItem:FC<{product:IProduct}>= ({product})=>{
    return <div className="cart-product animate-scaleIn ">
       <div className="cart-two">
            <div className="favorite-button"><DynamicFavoriteButton productId={product.id}/></div>
            
            <Link href={`/products/${product.slug}`}><Image width={200} height={200} src={product.images[0]} alt={product.name} /></Link>
       </div>
            <Link href={`products`}>
                <h3 className="product-name-h3"> {product.name}</h3>
            </Link>
        <Link href={`/category/${product.category.slug}`} className="product-category-name">{product.category.name}</Link>
        
    </div>
}
export default ProductItem
