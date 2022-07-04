import React, { useEffect, useState } from 'react'
import { Menu,Search,Icon} from 'semantic-ui-react'
import '../assets/styles/Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'

export default function Navbar() {
    const [state, setState] = useState()
    const cartQuantity = useSelector(state=>state.itemCount)

  return (
    <Menu fixed='top' id='navbar' borderless>
        <Menu.Item as={Link} to="/">
            <Menu.Item className='navbar__icon'>
                Horizon<span>Store</span>
            </Menu.Item>
        </Menu.Item>
        <Menu.Item as={Link} to="/category/sweatshirts" position='right'
          name='Sweatshirts'
          className='navbar__item'
        />
        <Menu.Item
        as={Link} to="/category/tshirts"
          name='T-Shirts'
          className='navbar__item'
        />
        
        <Menu.Item className='navbar__item' id="shoppingCartIcon">
            <Icon name="shopping cart"/>
            {
              cartQuantity > 0 &&
              <div id="shoppingCartCounter">{cartQuantity}</div>
            }
        </Menu.Item>

    </Menu>
  )
}
