import React, { useEffect,useState} from 'react'
import '../assets/styles/cartPage.css'
import {Grid,Table,Header,Image,Button,Container,Icon,Segment} from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import * as ACTIONS from '../redux/actions/cartActions'
import {Link} from 'react-router-dom'

export default function CartPage() {
    const dispatch = useDispatch()
    const cart = useSelector(state=>state.cart)
    const state = useSelector(state=>state)
    const handleQuantity = (type,product) => {
        switch(type){
            case "plus":
                let newQuantity = product.quantity + 1
                    return(
                        dispatch({type:ACTIONS.CHANGE_AMOUNT,payload:{...product,quantity:newQuantity}})
                    )

            case "minus":
                if(product.quantity > 0){
                    let newQuantity = product.quantity - 1
                        return(
                            product.quantity === 0 ?
                            dispatch({type:ACTIONS.REMOVE_FROM_CART,payload:product._id})
                            :
                            dispatch({type:ACTIONS.CHANGE_AMOUNT,payload:{...product,quantity:newQuantity}})
                        )
                }
            default:
                return
    }
    }

    const handleClearCart = () => {
        dispatch({type:ACTIONS.CLEAR_CART})
    }

  return (
    <Grid id="cartPage__grid" columns={1} padded textAlign="center">
        <Grid.Column computer={8} tablet={10} mobile={12}>
            {
                state.itemCount > 0 ?
                <>
                <Grid.Row>
                    <Table celled padded>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell singleLine>{state.itemCount} Adet Ürün</Table.HeaderCell>
                                <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
                                <Table.HeaderCell>Ürün Fiyatı</Table.HeaderCell>
                                <Table.HeaderCell>Ürün Adedi</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                cart && cart.map(product=>{
                                    return product.quantity >= 1 &&
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
                                                <Button onClick={()=>handleQuantity("minus",product)}>-</Button>
                                                    <span id='productPage__quantity'>{product?.quantity}</span>
                                                <Button onClick={()=>handleQuantity("plus",product)}>+</Button>
                                            </div>
                                    </Table.Cell>
                                </Table.Row>
                                    
                                })
                            }
                        </Table.Body>
                </Table>
            </Grid.Row>
            <Grid.Row>
                <Button id='cartPage__button'>Satın Al</Button>
                <Button id='cartPage__clearButton' onClick={handleClearCart}>Sepeti Temizle</Button>
            </Grid.Row>
            </>
                :

                <Container style={{marginTop:"2em"}}>
                    <Segment placeholder>
                        <Header icon>
                            <Icon name='shopping bag' style={{marginBottom:".3em"}} />
                                Sepetinizde ürün bulunamadı.
                                <br/>
                                <Link to="/">Alışverişe Devam Et</Link>
                        </Header>
                    </Segment>
                </Container>
            }
                    
        </Grid.Column>
    </Grid>
  )
}
