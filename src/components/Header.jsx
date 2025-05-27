import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CartIcon, ConfigIcon, UserIcon } from '../components/Icons';
import ItemsShoppingCart from './ItemsShoppingCart';

function Header() {

  const cart = useSelector(state => state.cart)
  const [showCart, setShowCart] = useState(false)

  return (
    <header className='header-container'>
      <div className='search-bar'>
        <form>
          <input type='text' placeholder='Search for products...' />
          <button>Search</button>
        </form>
      </div>

      <div className='items-container'>
        <nav>
          <ul>
            <li style={{ position: "relative" }}>
              <CartIcon cart={cart} setShowCart={setShowCart} />
            </li>
            <li> <UserIcon /></li>
            <li> <ConfigIcon /></li>
          </ul>
        </nav>
      </div>

      {showCart && <ItemsShoppingCart setShowCart={setShowCart} cart={cart} />}
    </header>
  );
}



export default Header;