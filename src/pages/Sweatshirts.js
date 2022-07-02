import React from 'react'
import { Grid, Segment,Card } from 'semantic-ui-react'
import '../assets/styles/categoryPage.css'

export default function Sweatshirts() {
  return (
    <Grid divided='vertically' className='categoryPage__grid'>
        <Grid.Row className='categoryPage__row'>
            <Grid.Column stretched color='blue' computer={4} tablet={5} mobile={6} className="categoryPage__sidebar">
                <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
            </Grid.Column>

            <Grid.Column computer={12} tablet={11} mobile={10} className="categoryPage__cardsContainer" color='orange'>
                
                    <Card className='categoryPage__card'
                        header='Elliot Baker'
                        meta='Friend'
                        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    />
                    <Card className='categoryPage__card'
                        header='Elliot Baker'
                        meta='Friend'
                        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    />
                    <Card className='categoryPage__card'
                        header='Elliot Baker'
                        meta='Friend'
                        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    />
                    <Card className='categoryPage__card'
                        header='Elliot Baker'
                        meta='Friend'
                        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    />
                    <Card className='categoryPage__card'
                        header='Elliot Baker'
                        meta='Friend'
                        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    />
                    <Card className='categoryPage__card'
                        header='Elliot Baker'
                        meta='Friend'
                        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    />
                    <Card className='categoryPage__card'
                        header='Elliot Baker'
                        meta='Friend'
                        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    />
            </Grid.Column>
        </Grid.Row>
    </Grid>
  )
}
