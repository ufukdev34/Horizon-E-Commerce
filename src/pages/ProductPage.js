import React, { useState,useEffect,useLayoutEffect } from 'react'
import { useParams } from 'react-router'
import '../assets/styles/productPage.css'
import { from, ignoreElements, map } from "rxjs"
import {Grid,Loader,Container,Image,Header,Button,Icon} from 'semantic-ui-react'
import { useDispatch,useSelector } from 'react-redux'
import * as ACTIONS from '../redux/actions/cartActions'

export default function ProductPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [isButtonLoading, setIsButtonLoading] = useState(false)
    const [product, setProduct] = useState({})
    const [quantity,setQuantity] = useState(1)
    const [isInCart, setIsInCart] = useState(false)
    const cart = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    const id = useParams().id
    

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

    useEffect(() => {

        if(cart.some(item=>item._id === product._id))
            setIsInCart(true)
        
        
    }, [product])

    useEffect(()=>{
        if(isInCart){
            let newQuantity = cart.find(item=>item._id === product._id).quantity
            newQuantity && setQuantity(newQuantity)
        }
    },[isInCart])

    useEffect(()=>{
        const loadingButtonIcon = document.querySelector('#productPage__button .icon')
        if(isButtonLoading == true){
            if(loadingButtonIcon)
                loadingButtonIcon.style.color = 'transparent'
        }
        else{
            if(loadingButtonIcon)
                loadingButtonIcon.style.color = '#fff'
        }
    },[isButtonLoading])
  
    const handleQuantity = (type) => {
        switch(type){
            case "plus":
                let newQuantity = quantity + 1
                if(!isInCart){
                    return setQuantity(newQuantity)
                }
                else{
                    return(
                        setQuantity(newQuantity),
                        dispatch({type:ACTIONS.CHANGE_AMOUNT,payload:{...product,quantity:quantity+1}})
                    )
                }

            case "minus":
                if(quantity > 1){
                    let newQuantity = quantity - 1
                    if(!isInCart){
                        return setQuantity(newQuantity)
                    }
                    else{
                        return(
                            setQuantity(newQuantity),
                            dispatch({type:ACTIONS.CHANGE_AMOUNT,payload:{...product,quantity:quantity-1}})
                        )
                    }
                   
                }
            default:
                return
        }
    }

    const handleAddToCart = () => {
        dispatch({type:ACTIONS.ADD_TO_CART,payload:{...product,quantity:quantity}})
        setIsButtonLoading(true)
        setIsInCart(true)
    }


  return (
    <>
    {
        !isLoading ? <Grid id="productPage__grid" padded stackable textAlign='center' columns={2}>
            <Grid.Column width={4}>
                <Image src={product.thumbnail} id="productPage__image"/>
            </Grid.Column>

            <Grid.Column width={6} textAlign='left' id="productPage__content">
                <Header id='productPage__title'>{product.title}</Header>
                <p className='productPage__feature'><span>Marka:</span> {product.brand}</p>
                <p className='productPage__feature'><span>Kategori:</span> {product.category.charAt(0).toUpperCase()+product.category.slice(1)}</p>
                <p className='productPage__feature'><span>Cinsiyet:</span> {product.gender === "Female" ? "Kadın" : "Erkek"}</p>
                <p className='productPage__feature'><span>Ürün Açıklaması:</span><br/>
                    <span className='feature__description'>{product.description}</span>
                </p>
                <Grid.Row>
                    <span id='productPage__price'>{product.price} TL</span>
                    <div id='productPage__quantityButtons'>
                        <Button onClick={()=>handleQuantity("minus")}>-</Button>
                        <span id='productPage__quantity'>{quantity}</span>
                        <Button onClick={()=>handleQuantity("plus")}>+</Button>
                    </div>
                    {
                        isInCart ?
                        <Button id='productPage__button' disabled>
                            <Button.Content>
                                Ürün Sepetinizde Mevcut
                            </Button.Content>
                        </Button>
                        :
                        <Button animated='vertical' loading={isButtonLoading} id='productPage__button' onClick={()=>handleAddToCart()}>
                            <Button.Content hidden>
                                <Icon name='shop'></Icon>
                            </Button.Content>
                            <Button.Content visible>
                                Sepete Ekle
                            </Button.Content>
                        </Button>
                    }
                    
                </Grid.Row>
            </Grid.Column>
        </Grid>
        :
        <Container id='productPage__loginContainer'>
            <Loader active inline='centered' style={{fontSize:"1em"}}/>
        </Container>
    } 
    </>
  )
}
