import { useProfile } from "@/src/hooks/useProfile";
import { NextPageAuth } from "@/src/provide/auth-page.types";
import Meta from "@/src/ui/Meta";
import Button from "@/src/ui/button/Button";
import Catalog from "@/src/ui/catalog/Catalog";
import Layout from "@/src/ui/layuot/Layout";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';


const FavoritePage: NextPageAuth = () => {
    const {profile} = useProfile()
    return(
        <Meta titel="Cart">
            <Layout>
                <Catalog products={profile?.favorites || []}/>
            </Layout>
        </Meta>
    )
};

// FavoritePage.isOnlyUser = true
export default FavoritePage