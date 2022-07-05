import React from 'react'
import { useDispatch } from 'react-redux'
import {Table,Button,Header,Image} from 'semantic-ui-react'
export default function CartProduct({product,handleQuantity}) {
  const dispatch = useDispatch()
  return (
    <Table.Row key={Math.random()}>
        <Table.Cell>
                <Header as='h2' textAlign='center'>
                    <Image src={product.thumbnail}></Image>
                </Header>
        </Table.Cell>

        <Table.Cell>
            {product.title}
        </Table.Cell>

        <Table.Cell textAlign='center'>
            {product.price} TL
        </Table.Cell>

        <Table.Cell textAlign='center'>
                <div id='productPage__quantityButtons'>
                    <Button onClick={()=>handleQuantity("minus",product,dispatch)}>-</Button>
                        <span id='productPage__quantity'>{product?.quantity}</span>
                    <Button onClick={()=>handleQuantity("plus",product,dispatch)}>+</Button>
                </div>
        </Table.Cell>
    </Table.Row>
  )
}
