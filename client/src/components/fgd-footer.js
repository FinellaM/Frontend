import '@shoelace-style/shoelace/dist/themes/base.css';
import SlButton from '@shoelace-style/react/dist/button';
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

const Footer = () => {
  return (
    <footer>
      <div class="wrapper socials">
        <a href={Facebook} target="_blank" rel="noreferrer" className="social-link">
          <span class="icon facebook">
            <span class="tooltip">Facebook</span>
            <span><i class="fa fa-facebook" style={{ fontSize: '25px', }}></i></span>
          </span>
        </a>
        <a href={Twitter} target="_blank" rel="noreferrer" className="social-link">
          <span class="icon twitter">
            <span class="tooltip">Twitter</span>
            <span><i class="fa fa-twitter" style={{ fontSize: '27px', }}></i></span>
          </span>
        </a>
        <a href={Instagram} target="_blank" rel="noreferrer" className="social-link">
          <span class="icon instagram">
            <span class="tooltip">Instagram</span>
            <span><i class="fa fa-instagram" style={{ fontSize: '27px', }}></i></span>
          </span>
        </a>
        <a href={Youtube} target="_blank" rel="noreferrer" className="social-link">
          <span class="icon youtube">
            <span class="tooltip">Youtube</span>
            <span><i class="fa fa-youtube" style={{ fontSize: '24px', }}></i></span>
          </span>
        </a>
        <a href={Linkedin} target="_blank" rel="noreferrer" className="social-link">
          <span class="icon linkedin">
            <span class="tooltip">LinkedIn</span>
            <span><i class="fa fa-linkedin" style={{ fontSize: '24px', }}></i></span>
          </span>
        </a>
      </div>
      <div id="footerInfo">
        <div id="footerCopyright">
          <h3>Copyright</h3>
          <p>This website has been created as part of an assignment in an approved course of study for Curtin University and may contain copyrighted material not created by the author.
          </p>
          <p>No part of this work may be reproduced without concent of the original copyright owners. See code comments for references.</p>
        </div>
        <div id="footerNav">
          <Link to="/"><h5>Home</h5></Link>
          <Link to="/shop"><h5>Shop</h5></Link>
          <Link to="/about-us"><h5>About Us</h5></Link>
          <Link to="/contact-us"><h5>Contact</h5></Link>
        </div>
      </div>
      <div id="footerLink" className="row justify-content-center">
        <Link to="/privacy-policy" className="link-footer">Privacy Policy</Link>
        <p>|</p>
        <Link to="/terms-conditions" className="link-footer">Terms and Conditions</Link> 
        <p>|</p>
        <Link to="/shipping-Returns" className="link-footer">Shipping and Returns</Link>
      </div>
    </footer>
  );
}

export default Footer;