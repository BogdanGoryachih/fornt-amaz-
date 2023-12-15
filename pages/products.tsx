import { useProfile } from "@/src/hooks/useProfile";
import { NextPageAuth } from "@/src/provide/auth-page.types";
import Meta from "@/src/ui/Meta";
import Catalog from "@/src/ui/catalog/Catalog";
import Layout from "@/src/ui/layuot/Layout";
import { FC } from "react";

// const Products: NextPageAuth = () => {
//     const { profile } = useProfile();
    

//     return (
//         <Meta titel="Кошик">
//             <Layout>
//             <Catalog products={profile?.favorites || []} title="Кошик" />
                
//             </Layout>
//         </Meta>
//     );
// };
// export default Products