import '@shoelace-style/shoelace/dist/themes/base.css';
import SlButton from '@shoelace-style/react/dist/button';
import SlCard from '@shoelace-style/react/dist/card';

const Home = () => {
  return (
    <div className="pageBody">
      <div className="heroImg">
        <div className="heroImg-txt">
          <h4>Feel Good is a range of 100% natural, great tasting, fruitful sparkling waters in recyclable, plastic free packaging.</h4>
          <SlButton>Shop Now</SlButton>
          <SlButton>About Us</SlButton>
        </div>  
      </div>
      <div className="product">
        <h1>Find Your Flavour</h1>
        <img src="" alt="" className="imageLeft" />
        <div className="productRight">
          <h2>Peach and Passionfruit</h2>
          <h6>330ml</h6>
          <h3>From £4.50</h3>
          <p>We added a squeeze of real apple juice, natural peach and passionfruit flavours 
            and a touch of maca to our British sparkling water to make a tongue-tingling drink you can enjoy anywhere; 
            the perfect non-alcoholic pick-me-up! Stop, sip and give back.
          </p>
          <SlButton>View Details</SlButton>
          <SlButton>Shop All</SlButton>
        </div>
      </div>
      <div className="product">
        <img src="" alt="" className="imageRight" />
        <div className="productLeft">
          <h2>Raspberry and Hibiscus</h2>
          <h6>330ml</h6>
          <h3>From £4.50</h3>
          <p>Natural raspberry flavour, a squeeze of real apple juice plus a touch of hibiscus and ginseng is added to our British sparkling water, 
            to create a delicious fruitful alternative to sugary carbonated drinks., sip and give back.
          </p>
          <SlButton>View Details</SlButton>
          <SlButton>Shop All</SlButton>
        </div>
      </div>
        
      <div className="product">
        <img src="" alt="" className="imageLeft" />
        <div className="productRight">
          <h2>Rhubarb and Apple</h2>
          <h6>330ml</h6>
          <h3>From £4.50</h3>
          <p>Real apple juice and 100% natural rhubarb flavours infused with Echinacea makes our British sparkling water a delicious taste of the seasons 
            and the ideal choice to refresh you any day of the year. 
            Don't forget to chill it!. Stop, sip and give back.
          </p>
          <SlButton>View Details</SlButton>
          <SlButton>Shop All</SlButton>
        </div>
      </div>
                 
      <SlCard id="missionStatement">
        <div slot="header">
          <h1>Our Mission</h1>
          <h4>We are a purpose driven brand on a mission to lead change from within the drinks industry.</h4>
        </div>
        <div className="missionObj">
          <div className="missionPointers">
            <p>Our ambitions may be big but we are already the first soft drink in the UK to become Climate Positive.</p>
            <p>We have been awarded Planet Mark certification and are committed to being Carbon Net Zero by 2030. So far so good.</p>
            <p>In addition we have established our 3% For People and Planet Fund – giving 3% of sales to charities and non-profit organisations with shared values and actions.</p>
          </div>
          <div className="missionImg">
            <img src="" alt="paint splatter showing 3% for people and planet" />
          </div>
        </div> 
        <div slot="footer">
          <div className="missionFooter">
            <div className="missonFooter-Img"></div>
            <div className="missionFooter-text">
              <h6>As Ed Woolner, the man behind the brand says,</h6>
              <p className="quote">“We all know how precarious our planet’s future is, how hard it is to protect and restore it, but we can have a positive impact - as custodians of the land, parents and consumers. With each choice we can make a difference and here at Feel Good we have the opportunity to support others with those choices too. That makes me very happy.”</p>
            </div>
          </div>
          <SlButton>Find Out More</SlButton>
        </div>
      </SlCard>

      <div id="insta">
        <h2 className="cAlign">Join us in Instagram!</h2>
        <h4 className="cAlign">@feelgooddrinks</h4>
        <div className="instaCarosel"></div>
        <div className="instaCarosel"></div>
      </div>
    </div>
  );
}
 
export default Home
;
