import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartIcon, ConfigIcon, UserIcon } from '../components/Icons';
import { setProducts } from '../slices/productsSlice';
import ItemsShoppingCart from './ItemsShoppingCart';

function Header() {

  const cart = useSelector(state => state.cart)
  const [showCart, setShowCart] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [allProducts, setAllProducts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {

    const petition = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=100')
        const data = await response.json()
        setAllProducts(data.products)
        console.log(dataProducts)
        console.log("running")
      } catch (error) {

      }
    }

    petition()

  }, []);


  useEffect(() => {
    const filteredProducts = allProducts.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    dispatch(setProducts(filteredProducts))
  }, [searchTerm, allProducts])

  return (
    <header className='header-container'>
      <div className='search-bar'>
        <form>
          <input
            type='text'
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search for products...' />
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