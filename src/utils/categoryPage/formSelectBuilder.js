import React from 'react'
import {Form} from 'semantic-ui-react'

export default function formSelectBuilder(type,title,options,setFilter,filterValue) {
  
  if(filterValue === "Male"){
    filterValue = "Erkek"
  }
  else if(filterValue === "Female"){
    filterValue = "Kadın"
  }

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

{/* <Form.Group grouped>
    <label>Beden</label>
    <Grid textAlign='center' padded columns={4}>
        <Form.Field as={Grid.Column} label='S' control='input' type='checkbox' />
        <Form.Field as={Grid.Column} label='M' control='input' type='checkbox' />
        <Form.Field as={Grid.Column} label='L' control='input' type='checkbox' />
        <Form.Field as={Grid.Column} label='XL' control='input' type='checkbox' />
    </Grid>
</Form.Group> */}