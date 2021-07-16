import '@shoelace-style/shoelace/dist/themes/base.css';
import SlButton from '@shoelace-style/react/dist/button';
import SlIcon from '@shoelace-style/react/dist/icon';
import '@shoelace-style/react/dist/spinner';
import './footer.css';
import { Link } from 'react-router-dom';

const Facebook = "https://www.facebook.com/feelgooddrinks";
const Twitter = "https://twitter.com/feelgooddrinks";
const Instagram = "https://www.instagram.com/feelgooddrinks/";
const Youtube = "https://www.youtube.com/channel/UCwZ9WaN7QfltGY22mE-Jadg";
const Linkedin = "https://www.linkedin.com/company/feel-good-drinks";

const  Footer = () => {
    return (
      <footer>
          <div id="socials">
            <SlButton size="medium" circle className="socialBtn" href={Facebook} rel="noreferrer" target="_blank"><SlIcon name="facebook" /></SlButton>  
            <SlButton size="medium" circle className="socialBtn" href={Twitter} rel="noreferrer" target="_blank"><SlIcon name="twitter" /></SlButton> 
            <SlButton size="medium" circle className="socialBtn" href={Instagram} rel="noreferrer" target="_blank"><SlIcon name="instagram" /></SlButton> 
            <SlButton size="medium" circle className="socialBtn" href={Youtube} rel="noreferrer" target="_blank"><SlIcon name="youtube" /></SlButton> 
            <SlButton size="medium" circle className="socialBtn" href={Linkedin} rel="noreferrer" target="_blank"><SlIcon name="linkedin" /></SlButton>
          </div>
            <div id="footerInfo">
                <div id="footerCopyright">
                  <h3>Copyright</h3>
                  <p>This website has been created as part of an assignment in an approved course of study for Curtin University and may contain copyrighted material not created by the author.
                  </p>
                  <p>No part of this work may be reproduced without concent of the original copyright owners. See code comments for references.</p>
                </div>
                <div id="footerNav">
                  <Link to="/"><h2>Home</h2></Link>
                  <Link to="/shop"><h2>Shop</h2></Link>
                  <Link to="/aboutUs"><h2>About Us</h2></Link>
                  <Link to="/contact"><h2>Contact</h2></Link>
                </div>
            </div> 
            <div id="footerLink">
              <Link to="/privacy">Privacy Policy</Link>
                  <Link to="/termsConditions">Terms and Conditions</Link>
                  <Link to="/shipping-Returns">Shipping and Returns</Link>
            </div>         
      </footer>
    );
  }
  
  export default Footer;