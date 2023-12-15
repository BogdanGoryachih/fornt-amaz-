import { ProductService } from "@/src/service/product.service";
import Meta from "@/src/ui/Meta";
import Catalog from "@/src/ui/catalog/Catalog";
import Layout from "@/src/ui/layuot/Layout";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useRouter } from "next/router";

// const SearchPage: NextPage = () => {
//   const { query } = useRouter();
//   const { data } = useQuery(['search products', query.trem], () => {
//     return ProductService.getAll({
//       searchTerm: query.trem as string,
//     });
//   });

//   return (
//     <Meta titel="Пошук">
//       <Layout>
//         <Catalog products={data?.products} title={`Пошук за Запросом"${query.trem || []}"`} />
//       </Layout>
//     </Meta>
//   );
// };

// export default SearchPage;
