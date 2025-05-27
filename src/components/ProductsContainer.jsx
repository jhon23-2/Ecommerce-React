import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePagination } from '../contexts/paginationContext';
import { addCart, removeCart } from '../slices/cartSlice';
import { setCategories, setError, setLoading, setProducts } from '../slices/productsSlice';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';


function ProductsContainer() {

  const state = useSelector(state => state.products)
  const dispatch = useDispatch()
  const {handlerSetTotal, limit, page} = usePagination()
  const { products} = state


  useEffect(() => {
    const fectchProduct = async () => {
      try {
        dispatch(setLoading({loading: true}))
        const skip = (page - 1) * limit;
        const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);

        if (!res.ok) throw new Error('Processing data failured')

        const data = await res.json();
        handlerSetTotal(data.total);
        dispatch(setProducts(data.products))
        dispatch(setCategories())

      } catch (error) {
        setError(error)
      } finally {
        dispatch(setLoading({loading: false}))
      }
    }

    fectchProduct()

  }, [page])

  return (

    <div className='products-container'>
      {products?.map(product => {

        const { id, title, price, thumbnail, rating } = product

        return (
          <div className='product-card' key={id}>
            <img src={thumbnail} alt={title} />

            <div className='product-details'>
              <h2>{title}</h2>
              <p>price: {price}</p>
              <div className='rating-container'>
                <span>{rating}</span>
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
              thumbnail: product.thumbnail,
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