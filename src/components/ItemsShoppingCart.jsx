import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart, removeCart, stockCart } from '../slices/cartSlice';
import { AddStockIcon, DeleteIcon, RemoveStockIcon } from './Icons';


export default function ItemsShoppingCart({ setShowCart, cart }) {

  const dispatch = useDispatch();

  const handlerClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <aside className='cart-aside'>
      <div className="cart-aside-content">
        <div className='cart-aside-header'>
          <button className="close-cart" onClick={() => setShowCart(false)}>×</button>
          <h2>Tu carrito</h2>
          {cart.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            <ItemCartAside cart={cart} />
          )}
        </div>
        <div className="cart-aside-actions">
          <button
            className="clear-cart-btn"
            onClick={handlerClearCart}
          >Clear cart
          </button>
          <button className="pay-btn">Pay</button>
        </div>
        <div>
          <p>Total: ${cart.reduce((current, item) => current + (item.price * item.quantity), 0).toFixed(3)}</p>
        </div>
      </div>
    </aside>
  )
}

function ItemCartAside({ cart }) {

  return (
    <ul>
      {cart.map((item) => (
        <li key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div className="cart-item-details">
            <span>{item.title}</span>
            <span>${item.price}</span>
          </div>
          <Button item={item} />
          <span>{item.quantity}</span>
        </li>
      ))}
    </ul>
  )
}

function Button({ item }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity)

  const handlerQuantity = () => {
    setQuantity(previusQuantity => previusQuantity + 1)
    dispatch(stockCart({
      id: item.id,
      quantity: quantity + 1
    }))
  }

  const handlerRemoveStock = () => {
    if (quantity < 1) return;
    setQuantity(previusQuantity => previusQuantity - 1)
    dispatch(stockCart({
      id: item.id,
      quantity: quantity - 1
    }))
  }

  const handlerRemove = () => {
    dispatch(removeCart({
      id: item.id
    }))
  }

  return (
    <div>
      <DeleteIcon handlerRemove={handlerRemove} />
      <RemoveStockIcon handlerRemoveStock={handlerRemoveStock} />
      <AddStockIcon handlerQuantity={handlerQuantity} />
    </div>
  )
}