import React from 'react'
//import react router dom
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
//import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
//import components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Checkout from './pages/checkout';
import Login from './pages/login';
import Signup from './pages/signup';
const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Sidebar />
      <Footer />
    </Router>
  </div>;
};


export default App;
