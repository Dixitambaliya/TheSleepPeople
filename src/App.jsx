import { Routes, Route } from 'react-router-dom';
import Brand from './Components/Brand/Brand.jsx';
import Deals from './Components/Deals/Deals.jsx';
import Category from './Components/Category/Category.jsx';
import Page from './Components/Our story/Page.jsx';
import Productlist from './Components/Category/Productlist.jsx';
import Home from './Components/Navigation/Home.jsx';
import Layout from './Components/Navigation/Layout.jsx'; 

const App = () => {
  return (
    <Routes>
      {/* Default layout route */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="brand" element={<Brand />} />
        <Route path="category" element={<Category />} />
        <Route path="productlist" element={<Productlist />} />
        <Route path="deals" element={<Deals />} />
        <Route path="page" element={<Page />} />
      </Route>
    </Routes>
  );
};

export default App;
