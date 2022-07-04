import React,{useEffect, useState, useLayoutEffect} from 'react'
import { Grid,Menu,Header,Form,Segment,Icon,Container,Loader,Dimmer,Image} from 'semantic-ui-react'
import '../assets/styles/categoryPage.css'
import GridCard from '../components/GridCard'
import fetchCategory from '../utils/categoryPage/fetchCategory'
import makeBrandOptionsUnique from '../utils/categoryPage/makeBrandOptionsUnique'
import optionBuilder from '../utils/categoryPage/optionBuilder'
import formSelectBuilder from '../utils/categoryPage/formSelectBuilder'
import filterProducts from '../utils/categoryPage/filterProducts'
import sortData from '../utils/categoryPage/sortData'

export default function CategoryPage({category}) {
    const [products, setProducts] = useState([])
    const [brandOptions,setBrandOptions] = useState([])
    const [filterGender,setFilterGender] = useState("")
    const [filterBrand,setFilterBrand] = useState("")
    const [filterPrice,setFilterPrice] = useState("")
    const [itemsToShow, setItemsToShow] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    fetchCategory(category,setProducts,setIsLoading)
    makeBrandOptionsUnique(products,setBrandOptions)
    
    const genderOptions = optionBuilder("gender")
    const priceOptions = optionBuilder("price")

    useLayoutEffect(() => {
        document.querySelector('.categoryPage__productsGrid').scrollTo({top:0})
    }, [])

    useEffect(()=>{
        setItemsToShow(products)
    },[products])
    
    useEffect(()=>{
       filterProducts(products,filterGender,filterBrand,itemsToShow,setItemsToShow)
        document.querySelector('.categoryPage__productsGrid').scrollTo({top:0})
    },[filterGender,filterBrand])
    
    
    sortData(itemsToShow,filterPrice)

  return (
    <Grid padded className='categoryPage__grid'>
        <Grid.Column as={Menu} className='categoryPage__sidebar' vertical computer={3} tablet={4} mobile={6}>
            <Menu.Item>
                <Header>
                    Filtrele
                </Header>
            </Menu.Item>

            <Menu.Item>
                <Form>
                    {
                        [
                            formSelectBuilder("gender","Cinsiyet",genderOptions,setFilterGender,filterGender),
                            formSelectBuilder("brand","Marka",brandOptions,setFilterBrand,filterBrand),
                            formSelectBuilder("price","Sıralama",priceOptions,setFilterPrice,filterPrice)
                        ]
                    }
                </Form>
            </Menu.Item>
            <Menu.Item className='filterClearButton' onClick={()=>{
                setFilterGender("")
                setFilterBrand("")
                setFilterPrice("")
            }}>
                Filtreleri Temizle
            </Menu.Item>
        </Grid.Column>

        <Grid.Column className="categoryPage__productsGrid" computer={13} tablet={12} mobile={10}>
            {
                !isLoading ?
                    <Grid stackable  color="black" container columns={4} doubling>
                        {
                            (itemsToShow.length > 0) ?
                                    sortData(itemsToShow)?.map(product=>{
                                        return (
                                        <GridCard product={product} key={product._id}/>
                                        )
                                    })
                                :
                                <Container style={{marginTop:"2em"}}>
                                    <Segment placeholder>
                                        <Header icon>
                                            <Icon name='search' style={{marginBottom:".3em"}} />
                                            Aradığınız şekilde bir ürün bulunamadı.
                                        </Header>
                                    </Segment>
                                </Container>
                        }
                    </Grid>
             :
                <Loader active inline='centered' style={{marginTop:"2em",fontSize:"1em"}}/>
            }
        </Grid.Column>
    </Grid>
    
        
  )
}
