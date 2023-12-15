import Head from "next/head"
import { useRouter } from "next/router"
import { FC, PropsWithChildren } from "react"

interface Iseo{
    titel:string
    description? : string
    image? : string
}
export const titelMerge = (title:string)=>`${title} | 4308`

const Meta: FC<PropsWithChildren<Iseo>> =({
    titel,
    description,
    image,
    children
}) =>{
    const {asPath} = useRouter()
    const currentUrl = `${process.env.APP_URL}${asPath}`
    return(
        <>
            <Head>
                <title itemProp="headline">{titelMerge(titel)}</title>
                {description? (
                    <>
                        <meta
                        itemProp="description"
                        name="description"
                        content={description}/>
                        
                        <link rel="canonical" href={currentUrl}/>
                         <meta property="og:lacale" content="en" />
                         <meta property="og:title" content={titelMerge(titel)} />
                         <meta property="og:url" content={currentUrl} />
                         <meta property="og:image" content={image|| '/favicon.svg'} />
                         <meta property="og:description" content={description} />

                    </>

                ) :(
                    <meta name="robots" content="noindex , nofollow" />
                )}
            
            </Head>
            {children}
        </>
    )
}
export default Meta