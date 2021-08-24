import Header from './components//Header';
import Home from './Home';
import Sidenav from './components/Sidenav';
import Shop from './Shop';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Stockist from './Stockist';
import Cart from './components/Cart';
import Privacy from './PrivacyPolicy';
import Terms from './TermsConditions';
import Shipping from './ShippingReturns';
import Footer from './components/fgd-footer';
import './components/Toast';
import '@shoelace-style/shoelace/dist/themes/base.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import NotFound from './_404';
import { useState, useEffect } from "react";
setBasePath('./../dist/shoelace');



function App() {

  const windowListener = (e) => {
    if (document.getElementById('mySidenav').contains(e.target) || document.getElementById('myCart').contains(e.target) || document.getElementById('menu-icon').contains(e.target) || document.getElementById('cart-icon').contains(e.target)) {
      // Clicked in box

    } else {
      // Clicked outside the box
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mySidenav").style.boxShadow = "rgb(0 0 0 / 30%) 70px 0px 30px 50px";
      document.getElementById("myCart").style.width = "0";
      document.getElementById("myCart").style.boxShadow = "rgb(0 0 0 / 30%) 70px 0px 30px 50px";
    }
  }

  const [cart, setCart] = useState([]);


  return (
    <Router>
      <div className="App">
        <Header cart={cart} windowListener={windowListener} />
        <Sidenav />
        <Cart cart={cart} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
            <Route exact path="/product/:id">
              <ProductDetails setCart={setCart} cart={cart} />
            </Route>
            <Route exact path="/about-us">
              <AboutUs />
            </Route>
            <Route exact path="/contact-us">
              <ContactUs />
            </Route>
            <Route exact path="/stockist">
              <Stockist />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/privacy-policy">
              <Privacy />
            </Route>
            <Route exact path="/terms-conditions">
              <Terms />
            </Route>
            <Route exact path="/shipping-returns">
              <Shipping />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;