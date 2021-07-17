import '@shoelace-style/shoelace/dist/themes/base.css';
import SlButton from '@shoelace-style/react/dist/button';
import SlIcon from '@shoelace-style/react/dist/icon';
import SlCard from '@shoelace-style/react/dist/card';
import SlRating from '@shoelace-style/react/dist/rating';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import './product.css'
setBasePath()

const appleRhuharb = () => {

    return (
        <div className="container text-center">
            
            <div className="productBox">
                <SlButton href="/shop" style={{textAlign: 'left',
                marginTop: '1em',
                marginBottom: '1em',
                }}>
                    <SlIcon name="arrow-return-left"></SlIcon>
                    Back
                </SlButton>
                <div className="productImages">
                    <img src="" alt="" className="productImg" />
                    <div className="productImgCarosel">
                        <img src="" alt="" className="productCaroselItem" />
                        <img src="" alt="" className="productCaroselItem" />
                        <img src="" alt="" className="productCaroselItem" />
                        <img src="" alt="" className="productCaroselItem" />
                    </div>
                </div>
                <div className="productInfo">
                    <h2>Rhubarb & Apple</h2>
                    <h4>330ml</h4>
                    <SlRating readonly value="4.5" className="productRating"></SlRating>
                    <h3>£4.50</h3>
                    <p>Real apple juice and 100% natural rhubarb flavours infused with Echinacea makes our British sparkling water a delicious taste of the seasons 
                        and the ideal choice to refresh you any day of the year. 
                        Don't forget to chill it!. Stop, sip and give back.</p>
                    
                    <div className="productOptions">
                        <SlButton className="packoption">3 Pack</SlButton>
                        <SlButton className="packoption">6 Pack</SlButton>
                        <SlButton>12 Pack</SlButton>
                    </div>
                    <SlButton size="large">Add to Cart</SlButton>

                </div>
            </div>
            <div className="productFacts">
                <h3>Ingredients</h3>
                <p>Ingredients</p>
            </div>
            <div className="productFacts">
                <h3>Nutritional Information</h3>
                <div className="nutritionalTable">
                    <div className="nutritAvTitle">
                        <h5 className="nutritAttribute">Average Quantity</h5>
                        <h5 className="nutritFact">Per 100ml</h5>
                    </div>
                    <div className="nutritInfo">
                        <h5 className="nutritAttribute">Energy</h5>
                        <h5 className="nutritFact">31kJ/7 kCal</h5>
                    </div>
                    <div className="nutritInfo">
                        <h5 className="nutritAttribute">Fat</h5>
                        <h5 className="nutritFact">0g</h5>
                    </div>
                    <div className="nutritInfo">
                        <h5 className="nutritAttribute">~ Saturates</h5>
                        <h5 className="nutritFact">0g</h5>
                    </div>
                    <div className="nutritInfo">
                        <h5 className="nutritAttribute">Carbohydrates</h5>
                        <h5 className="nutritFact">1.7g</h5>
                    </div>
                    <div className="nutritInfo">
                        <h5 className="nutritAttribute">~ Sugar</h5>
                        <h5 className="nutritFact">1.4g</h5>
                    </div>
                    <div className="nutritInfo">
                        <h5 className="nutritAttribute">Protein</h5>
                        <h5 className="nutritFact">0g</h5>
                    </div><div className="nutritInfo">
                        <h5 className="nutritAttribute">Sodium</h5>
                        <h5 className="nutritFact">0g</h5>
                    </div>
                    
                </div>
            </div>

            <div className="productFacts">
                <h3>You may Also like</h3>
                <div className="productCarousel">
                    <SlCard className="productCard">
                        <img src="" alt="Feel Good Mixed Pack" />
                        <h4>Feel Good Mixed Pack</h4>
                        <p>330ml</p>
                        <h5>From £4.50 </h5>
                    </SlCard>
                    <SlCard className="productCard">
                        <img src="" alt="Peach & Passionfruit" />
                        <h4>Peach & Passionfruit</h4>
                        <p>330ml</p>
                        <h5>From £4.50 </h5>
                    </SlCard>
                    <SlCard className="productCard">
                        <img src="" alt="Raspberry & Hibiscus" />
                        <h4>Raspberry & Hibiscus</h4>
                        <p>330ml</p>
                        <h5>From £4.50 </h5>
                    </SlCard>
                </div>
            </div>

        </div>
    );
}
 
export default appleRhuharb;