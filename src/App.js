import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home/Home";
import SignInSide from './components/SignInSide';
import SignUp from './components/SignUp';
import About from "./Page/About/About";
import Contact from "./Page/Contact/Contact";
import Service from './components/serice/Service';
import CarList from './components/rent/CarList';

import Cart from './components/cart/Cart.js';
import Vbook from './components/Vbook.js';
import Book from './components/Book.js';







function App() {
  return (
    <>
      
      <BrowserRouter>
      <Header/>
      

      <Routes>
      <Route index element={<Home />} />
      
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service/>} />
        <Route path="/bservices" element={<Book/>} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/book" element={<CarList/>} />
        <Route path="/vbook" element={<Vbook/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
      
      
      
      
      
      
      </>
  );
}

export default App;
