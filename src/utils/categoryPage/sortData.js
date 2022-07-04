const sortData = (itemsToShow,filterPrice) => {
    if(filterPrice === "Azalan Fiyat" && itemsToShow){
        return itemsToShow.sort((a,b)=>b.price-a.price) 
    }

    else if(filterPrice === "Artan Fiyat" && itemsToShow){
       return itemsToShow.sort((a,b)=>a.price-b.price)
    }
    else{
        return itemsToShow
    }
}

export default sortData