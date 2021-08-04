import '@shoelace-style/shoelace/dist/themes/base.css';
import '@shoelace-style/react/dist/spinner';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import './footer.css';
import { Link } from 'react-router-dom';
const Facebook = "https://www.facebook.com/feelgooddrinks";
const Twitter = "https://twitter.com/feelgooddrinks";
const Instagram = "https://www.instagram.com/feelgooddrinks/";
const Youtube = "https://www.youtube.com/channel/UCwZ9WaN7QfltGY22mE-Jadg";
const Linkedin = "https://www.linkedin.com/company/feel-good-drinks";
setBasePath('./../../dist/shoelace');

const  Footer = () => {
    return (
      <footer className="container-fluid">
          <div className="row justify-content-center mx-auto pt-4">
            <button href={Facebook} className="btn btn-light btn-lg socialBtn" type="button"><i class="fa fa-facebook px-1"/></button>
            <button href={Twitter} className="btn btn-light btn-lg socialBtn" type="button"><i class="fa fa-twitter"/></button>
            <button href={Instagram} className="btn btn-light btn-lg socialBtn" type="button"><i class="fa fa-instagram"/></button>
            <button href={Youtube} className="btn btn-light btn-lg socialBtn" type="button"><i class="fa fa-youtube"/></button>
            <button href={Linkedin} className="btn btn-light btn-lg socialBtn" type="button" style={{marginRight: 0,}}><i class="fa fa-linkedin"/></button>
          </div>
            <div className="row row mx-lg-5 mx-md-1">
                <div className="col-lg-4 col-md-6 justify-content-start mt-2">
                  <h3 className="text-center" style={{fontWeight: '600'}}>Copyright</h3>
                  <p>This website has been created as part of an assignment in an approved course of study for Curtin University and may contain copyrighted material not created by the author.
                  </p>
                  <p>No part of this work may be reproduced without concent of the original copyright owners. See code comments for references.</p>
                </div>
                <div className="col-md-2 justify-content-end offset-lg-6 offset-md-3">
                  <Link to="/"><h2>Home</h2></Link>
                  <Link to="/shop"><h2>Shop</h2></Link>
                  <Link to="/aboutUs"><h2>About Us</h2></Link>
                  <Link to="/contact"><h2>Contact</h2></Link>
                </div>
            </div> 
            <div className="row justify-content-center pb-3">
              <a href="/privacy" className="link-dark">Privacy Policy</a>
              <a href="/termsConditions" className="mx-3 link-dark" style={{ borderStyle: 'solid',
                borderWidth: '0 2px',
                padding: '0 0.75em'}}>Terms and Conditions
              </a>
              <a href="/shipping-Returns" className="link-dark">Shipping and Returns</a>
            </div>         
      </footer>
    );
  }
  
  export default Footer;