import { useSelector } from "react-redux"
import CategoriesHeader from "../components/CategoriesHeader"
import Header from "../components/Header"
import ProductsContainer from "../components/ProductsContainer"
import { usePagination } from "../contexts/paginationContext"



function Home() {

  const {page, totalPages, handlerSetPageNext, handlerSetPagePrevius} = usePagination()
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

      <footer className="pagination-container">
        <button 
        onClick={handlerSetPagePrevius} 
         disabled={page === 1}
         className="pagination-btn"
         >
          Anterior
        </button>
        <span className="pagination-info">
          Página {page} de {totalPages}
        </span>
        <button 
        onClick={handlerSetPageNext} 
        disabled={page === totalPages}
        className="pagination-btn"
        >
          Siguiente
        </button>
      </footer>

    </div>
  );
}

export default Home;