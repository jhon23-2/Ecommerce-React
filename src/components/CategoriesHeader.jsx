import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../slices/productsSlice';

let filteredProducts = []

function CategoriesHeader() {

  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  const [filterPrice, setFilterPrice] = useState(0)
  const { categories } = products

  const handlerOnchangeSelect = (event) => {
    const value = event.target.value
    console.log(value)
  }

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then(data => {
        filteredProducts = data.products
      })
      .catch(err => console.error('Error al cargar productos:', err));
  }, []);


  useEffect(() => {
    const allFilterProducts = filteredProducts.filter(product => product.price >= filterPrice);
    dispatch(setProducts(allFilterProducts))
  }, [filterPrice])

  return (  

    <div className='categories-container'>
      <h1>Welcome to store </h1>
      <form >
        <div className='range-price-container'>
          <label htmlFor='range-price'>Range Price: </label>
          <input
            type="range"
            name='range-price'
            id='range-price'
            min="0"
            max="200"
            step="10"
            defaultValue={0}
            onChange={e => setFilterPrice(Number(e.target.value))}
          />
          <p>Value: ${filterPrice}</p>
        </div>
        <div className='categories-select-container'>
          <label htmlFor="categories">Categories: </label>
          <select name="categories" id="categories">
            <option>All Categories</option>
            {categories.map(category => {
              return (
                <option
                  key={category}
                  value={category}
                  onClick={handlerOnchangeSelect}
                >
                  {category}
                </option>
              )
            })}
          </select>
        </div>
      </form>
    </div>
  );
}



export default CategoriesHeader;