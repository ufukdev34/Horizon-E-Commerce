import React from 'react'
import {Grid,Card,Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
export default function GridCard({product}) {
  return (
    <Grid.Column>
        <Card className='categoryPage__card' as={Link} to={`/product/${product._id}`}>
            <Image src={product.thumbnail} className="categoryPage__card__image"/>
            <Card.Content>
                <Card.Header className='categoryPage__card__header'>
                    {product.title}
                </Card.Header>

                <Card.Meta>
                    {product.brand}
                </Card.Meta>

                <Card.Description className='categoryPage__card__description'>
                    {product.description}
                </Card.Description>
                {`${product.price} TL`}
            </Card.Content>
        </Card>
    </Grid.Column>
  )
}
