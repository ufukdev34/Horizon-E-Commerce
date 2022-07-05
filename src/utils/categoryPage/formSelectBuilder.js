import React from 'react'
import {Form} from 'semantic-ui-react'
import translateFilterValue
 from './translateFilterValue'
export default function formSelectBuilder(type,title,options,setFilter,filterValue) {
  
  translateFilterValue(filterValue)

  if(type === "gender"){
    return (
      <Form.Select key={Math.random()} selectOnBlur={false} onChange={(e)=>{
        e.target.textContent === "Erkek" ? setFilter("Male")
        : setFilter("Female")
      }}
          fluid
          label={title}
          options={options}
          placeholder={filterValue || "Seçiniz"}
      />
    )
  }
  else if(type === "brand"){
    return (
      <Form.Select key={Math.random()} onChange={(e)=>setFilter(e.target.textContent)} selectOnBlur={false}
          fluid
          label={title}
          options={options}
          placeholder={filterValue || "Seçiniz"}
      />
    )
  }
  else if(type === "price"){
    return (
      <Form.Select key={Math.random()} onChange={(e)=>setFilter(e.target.textContent)} selectOnBlur={false}
          fluid
          label={title}
          options={options}
          placeholder={filterValue || "Seçiniz"}
      />
    )
  }
}