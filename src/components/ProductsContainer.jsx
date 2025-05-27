import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, removeCart } from '../slices/cartSlice';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';


function ProductsContainer() {

  const state = useSelector(state => state.products)
  const { products } = state


  return (
    <div className='products-container'>
      {products?.map(product => {

        const { id, title, price, image, rating } = product

        return (
          <div className='product-card' key={id}>
            <img src={image} alt={title} />

            <div className='product-details'>
              <h2>{title}</h2>
              <p>price: {price}</p>
              <div className='rating-container'>
                <span>{rating.rate}</span>
                <BtnProduct product={product} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}


function BtnProduct({ product }) {
  const [toggleAddToCart, setToggleAddToCart] = useState(false)
  const dispatch = useDispatch()


  const handlerAddToCart = (product) => {
    dispatch(addCart(product))
    setToggleAddToCart(true)
  }

  const handlerRemoveCart = (product) => {
    dispatch(removeCart({
      id: product.id
    }))
    setToggleAddToCart(false)
  }

  return (
    <div>
      {
        !toggleAddToCart ? (<AddToCartIcon
          handlerAddToCart={() =>
            handlerAddToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
              quantity: 1
            })} />)
          : (<RemoveFromCartIcon
            handlerRemoveCart={() =>
              handlerRemoveCart({ id: product.id })} />)
      }
    </div>
  )

}


export default ProductsContainer;