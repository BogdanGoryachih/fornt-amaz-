import { FC, PropsWithChildren } from "react";
import Sidebar from "./Sidebar";
import Header from "../header/Header";

const Layout:FC<PropsWithChildren<unknown>> = ({children})=>{
    return(
        <div className="">
            <Header/>
            <div className="div-sidebar" >
                <Sidebar/>
                <main className="main-children">
                {children}
                </main >
            </div>
        </div>
    )
}
export default Layout