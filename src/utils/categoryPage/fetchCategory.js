import { useEffect } from "react"
import { from, map } from "rxjs"

const fetchCategory = (category,setProducts,setIsLoading) =>{
    useEffect(() => {
        setIsLoading(true)
        from(
            fetch(`https://purplapp.herokuapp.com/categories/${category}`)
            .then(res=>res.json()).then(products=>products)
        ).pipe(
            map(res=>res),
            map(res=>randomArrayShuffle(res))
        ).subscribe(products=>{
            setProducts(products)
            setTimeout(()=> setIsLoading(false),500)
        })
    }, [category])
}

function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

export default fetchCategory