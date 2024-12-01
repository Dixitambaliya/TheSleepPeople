import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Deals from './Components/Deals/Deals.jsx'
import Brand from './Components/Brand/Brand.jsx'
import Category from './Components/Category/Category.jsx';
import Page from './Components/Our story/Page.jsx'
import Navbar from './Components/Navigation/Navbar.jsx'
import Carousel from './Components/Carousel/Carousel.jsx'

import './index.css';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />

    </BrowserRouter>
  
);
