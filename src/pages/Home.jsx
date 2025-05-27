import { useSelector } from "react-redux"
import CategoriesHeader from "../components/CategoriesHeader"
import Header from "../components/Header"
import ProductsContainer from "../components/ProductsContainer"

const API_URL = 'https://fakestoreapi.com/products'


function Home() {

  const story = useSelector(state => state.products)
  const { loading, error } = story

  return (
    <div className='app-container'>
      <Header />


      <main className='shop-container'>
        <CategoriesHeader />

        {loading && <p>Loading products...</p>}
        {error && <p>Error {error}</p>}
        <ProductsContainer />
      </main>

    </div>
  );
}

export default Home;