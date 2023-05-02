import './NavBar.css';
import {NavLink} from 'react-router-dom';
import Title from '../features/title/Title';
import { useAppSelector } from '../app/hooks';

function NavBar(){
    const cartItems=useAppSelector(state=>state.cart.cartItems);

    return <div className="nav-bar">
        <Title />
        <ul>
            <li>
                <NavLink to='/cart'>Cart {cartItems.length!==0 && <span className='cartCount'>{cartItems.length}</span>}</NavLink>
            </li>
            <li>
                <NavLink to='/myOrders'>My Orders</NavLink>
            </li>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
        </ul>
    </div>
}

export default NavBar;