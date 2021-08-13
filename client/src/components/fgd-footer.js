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
      <div id="socials">
        <SlButton size="medium" circle className="socialBtn" href={Facebook} rel="noreferrer" target="_blank"><i className="fa fa-facebook social-btn" style={{
          fontSize: '24px',
        }}></i></SlButton>
        <SlButton size="medium" circle className="socialBtn" href={Twitter} rel="noreferrer" target="_blank"><i className="fa fa-twitter social-btn" style={{
          fontSize: '24px',
        }}></i></SlButton>
        <SlButton size="medium" circle className="socialBtn" href={Instagram} rel="noreferrer" target="_blank"><i className="fa fa-instagram social-btn" style={{
          fontSize: '24px',
        }}></i></SlButton>
        <SlButton size="medium" circle className="socialBtn" href={Youtube} rel="noreferrer" target="_blank"><i className="fa fa-youtube social-btn" style={{
          fontSize: '24px',
        }}></i></SlButton>
        <SlButton size="medium" circle className="socialBtn" href={Linkedin} rel="noreferrer" target="_blank"><i className="fa fa-linkedin-square social-btn" style={{
          fontSize: '24px',
        }}></i></SlButton>
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
          <Link to="/contact-us"><h5>Contact Us</h5></Link>
        </div>
      </div>
      <div id="footerLink" className="row justify-content-center">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-conditions" className="mx-3" style={{ borderStyle: 'solid', borderWidth: '0 1px', padding: '0 0.75em' }}>Terms and Conditions</Link>
        <Link to="/shipping-Returns">Shipping and Returns</Link>
      </div>
    </footer>
  );
}

export default Footer;