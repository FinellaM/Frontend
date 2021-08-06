import Header from './components//Header';
import Home from './Home';
import Sidenav from './components/Sidenav';
import Shop from './Shop';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Stockist from './Stockist';
import Cart from './Cart';
import Privacy from './PrivacyPolicy';
import Terms from './TermsConditions';
import Shipping from './ShippingReturns';
import Footer from './components/fgd-footer';
import AppleRhuharb from './productAppleRhuharb';
import Mixed from './productMixed';
import PeachyPassion from './productPeachPassion';
import RaspberryHib from './productRaspberryHibiscus';
import '@shoelace-style/shoelace/dist/themes/base.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductDetails from './ProductDetails';
setBasePath('./../dist/shoelace');

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidenav />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
            <Route exact path="/product/:id">
              <ProductDetails />
            </Route>
            <Route exact path="/product-appleRhuharb">
              <AppleRhuharb />
            </Route>
            <Route exact path="/product-Mixed">
              <Mixed />
            </Route>
            <Route exact path="/product-peachPassionfruit">
              <PeachyPassion />
            </Route>
            <Route exact path="/product-raspberryHibiscus">
              <RaspberryHib />
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
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
