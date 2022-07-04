import { useEffect } from "react"
import { from, ignoreElements, map } from "rxjs"

const fetchProduct = (setProduct,setIsLoading,id) =>{
    useEffect(() => {
        from(
            fetch(`https://purplapp.herokuapp.com/product/${id}`)
            .then(res=>res.json()).then(product=>product)
        ).pipe(
            map(res=>res),
        ).subscribe(product=>{
            setProduct(...product)
            setIsLoading(false)
            ignoreElements() 
        })
    }, [])
}

export default fetchProduct