import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Carousel from './Components/Carousel/Carousel.jsx'
import Brand from './Components/Brand/Brand.jsx'
import Deals from './Components/Deals/Deals.jsx'
import Category from './Components/Category/Category.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Carousel/>
    <Brand/>
    <Category/>
    <Deals/>
  </StrictMode>,
)
