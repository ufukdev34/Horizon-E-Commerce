import React,{ useEffect } from "react"

const filterProducts = (products,filterGender,filterBrand,itemsToShow,setItemsToShow) => {
        if(filterGender !== ""){
            const filteredGenderItems = itemsToShow.filter(item=>item.gender === filterGender)
            setItemsToShow(filteredGenderItems)
        }
        if(filterBrand !== ""){
            const filteredBrandItems = itemsToShow.filter(item=>item.brand === filterBrand)
            setItemsToShow(filteredBrandItems)
        }
        if(filterGender === "" && filterBrand !== ""){
            const filteredBrandItemsHalf = products.filter(item=>item.brand === filterBrand)
            setItemsToShow(filteredBrandItemsHalf)
        }
        if(filterGender !== "" && filterBrand === ""){
            const filteredGenderItemsHalf = products.filter(item=>item.gender === filterGender)
            setItemsToShow(filteredGenderItemsHalf)
        }
        if(filterGender !== "" && filterBrand !== ""){
            setItemsToShow(products.filter(item=>item.gender === filterGender && item.brand === filterBrand))
        }
        if(filterGender === "" && filterBrand === ""){
            setItemsToShow(products)
        }
}

export default filterProducts;