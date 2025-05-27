import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { store } from './contexts/configContext.js'
import { PaginationProvider } from './contexts/paginationContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <PaginationProvider>
        <App />
      </PaginationProvider>
    </BrowserRouter>
  </Provider>,
)
