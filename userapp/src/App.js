import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import Product from './component/Product';
import Contact from './component/Contact';
import Cart from './component/Cart';
import Login from './Buttons/Login'
import Signup from './Buttons/Signup'
import Category from './component/Category'; /////////
import Checkout from './component/Checkout';
import {Route , Routes} from 'react-router-dom';
import ProductDetail from './component/ProductDetail';

function App() {
  return (
    <>
    <Header/>
    <Category/>
    <Routes>
      <Route path="/login" component={<Login/>}/>
      <Route path="/Signup" component={<Signup/>}/>
      <Route path= "/" element= {<Home/>}/>
      <Route path= "/about" element= {<About/>}/>
      <Route path= "/product" element= {<Product/>}/>
      <Route path= "/product/:productID" element= {<ProductDetail/>}/>
      <Route path= "/cart" element= {<Cart/>}/>
      <Route path= "/checkout" element= {<Checkout/>}/>
      <Route path= "/contact" element= {<Contact/>}/>
      {/* <Route path= "/category" element= {<Category/>}/> */}
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
