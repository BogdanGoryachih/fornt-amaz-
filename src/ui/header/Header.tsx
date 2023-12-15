
// import Search from "@/pages/q";
import { useActions } from "@/src/hooks/useAction";
import { useAuth } from "@/src/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaRegUser, FaShoppingCart } from "react-icons/fa";

const Header : FC = ()=>{
    const {user} = useAuth()

    return(
        <header className="header">
            <nav className="content">
            <Link href={'/'}>
                <h1 className="logo-header">АЗОВ 4308 Склад</h1>
                
            </Link>
            {/* <Search/> */}
             <div className="fav">
                    <Link href='/favorites'>
                        
                    <li className="heart-cart"><FaShoppingCart   className="heart"/></li>
                    
                    </Link>
                    <div className="header-auth">
                        {user ? (
                            
                            <p> </p>
                        ) : (
                        
                            <Link href="/auth"><li className="heart-cart"><FaRegUser className="auth-user"/></li></Link>
                        )}
                    </div>
                    
                </div> 
                 
                {/* <HeaderProfile/> */}
            </nav>
        </header>
    )
}
export default Header