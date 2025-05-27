import { useSelector } from 'react-redux';

function CategoriesHeader() {

  const products = useSelector(state => state.products)
  const {categories} = products

  
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
            min={0} 
            max={100}
            defaultValue={0}
          />
          <p>Value: {0}</p>
        </div>
        <div className='categories-select-container'>
          <label htmlFor="categories">Categories: </label>
          <select name="categories" id="categories">
            <option>All Categories</option>
            {categories.map(category => {
              return (
                <option key={category} value={category}>{category}</option>
              )
            })}
          </select>
        </div>
      </form>
    </div>
  );
}

export default CategoriesHeader;