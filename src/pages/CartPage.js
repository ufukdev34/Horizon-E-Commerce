import React, { useEffect,useState} from 'react'
import '../assets/styles/cartPage.css'
import {Grid,Table,Header,Image,Button,Container,Icon,Segment} from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import * as ACTIONS from '../redux/actions/cartActions'
import {Link} from 'react-router-dom'
import CartProduct from '../components/CartProduct'
import handleQuantity from '../utils/cartPage/handleQuantity'

export default function CartPage() {
    const dispatch = useDispatch()
    const cart = useSelector(state=>state.cart)
    const state = useSelector(state=>state)

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
                                cart?.map(product=>{
                                    return product.quantity >= 1 &&
                           /* as row */ <CartProduct product={product} handleQuantity={handleQuantity} key={Math.random()}></CartProduct>
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
