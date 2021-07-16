import '@shoelace-style/shoelace/dist/themes/base.css';
import SlButton from '@shoelace-style/react/dist/button';
import SlCard from '@shoelace-style/react/dist/card';
import './product.css'

const appleRhuharb = () => {
    return (
        <div className="container text-center">
            <SlButton>Back</SlButton>
            <div className="productBox">
                <div className="productImages">
                    <img src="" alt="" className="productImg" />
                    <div className="productImgCarosel">
                        <img src="" alt="" className="productCaroselItem" />
                        <img src="" alt="" className="productCaroselItem" />
                        <img src="" alt="" className="productCaroselItem" />
                        <img src="" alt="" className="productCaroselItem" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default appleRhuharb;