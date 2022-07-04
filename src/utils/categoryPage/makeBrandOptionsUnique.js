import { useEffect } from "react";

const makeBrandOptionsUnique = (products,setBrandOptions) => {
    useEffect(() => {
        let brands = []
        products.map(product=>{
            brands.push({key:product.brand})
        })
        brands = [...new Set(brands.map(brand=>brand["key"]))]
        const brandsAsObject = []
        brands.map(item=>{
            brandsAsObject.push({
                key:item,
                text:item,
                value:item
            })
        })
        setBrandOptions(brandsAsObject)
    }, [products])
}
export default makeBrandOptionsUnique