import { Routes, Route } from "react-router-dom";
import Brand from "./Components/Brand/Brand.jsx";
import Deals from "./Components/Deals/Deals.jsx";
import Category from "./Components/Category/Category.jsx";
import Page from "./Components/Our story/Page.jsx";
import Productlist from "./Components/Category/Productlist.jsx";
import Home from "./Components/Navigation/Home.jsx";
import Navbar from "./Components/Navigation/Navbar.jsx";
import Footer from './Components/Navigation/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Brand />
      <Category />
      <Productlist />
      <Deals />
      <Page />
      <Footer/>
 
    </div>
  );
};

export default App;
