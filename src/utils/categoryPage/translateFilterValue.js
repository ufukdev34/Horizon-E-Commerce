const translateFilterValue = (filterValue) => {
    if(filterValue === "Male"){
        filterValue = "Erkek"
      }
      else if(filterValue === "Female"){
        filterValue = "Kadın"
      }
}
export default translateFilterValue