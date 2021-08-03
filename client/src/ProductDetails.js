import { useParams } from "react-router";
import { useState, useEffect } from "react";
import '@shoelace-style/shoelace/dist/themes/base.css';
import SlButton from '@shoelace-style/react/dist/button';
import SlCard from '@shoelace-style/react/dist/card';
import SlRating from '@shoelace-style/react/dist/rating';
import './product.css'
import { Link } from 'react-router-dom';
import ProductList from "./ProductList";

const ProductDetails = () => {
    const { id } = useParams();

    // Constant for storing product list
    const [product, setProduct] = useState(null);
    // Constant for storing product list
    const [nutrition, setNutrition] = useState(null);

    const [relatedProduct, setRelatedProduct] = useState(null);

    // Fetch the product list from the backend, and set the splash image for every card
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        
        fetch(`/product/${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setProduct(data);

                fetch(`/nutrition/${data.nutrition[0]}`)
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        console.log(data);
                        setNutrition(data);

                        fetch(`/product`)
                            .then(res => {
                                return res.json();
                            })
                            .then(data => {
                                console.log(data.filter((product) => product._id !== id));
                                setRelatedProduct(data.filter((product) => product._id !== id));

                                for (let x in data.filter((product) => product._id !== id)) {
                                    document.getElementsByClassName('splash-image')[x].style.backgroundImage = "url('../" + data[x].splashImage + "')";
                                }

                                if (document.getElementsByClassName("img-magnifier-glass")[0]) {
                                    document.getElementsByClassName("img-magnifier-glass")[0].remove();
                                }

                                function magnify(imgID, zoom) {
                                    var img, glass, w, h, bw;
                                    img = document.getElementById(imgID);
                                    /*create magnifier glass:*/
                                    glass = document.createElement("DIV");
                                    glass.setAttribute("class", "img-magnifier-glass");
                                    /*insert magnifier glass:*/
                                    img.parentElement.insertBefore(glass, img);
                                    /*set background properties for the magnifier glass:*/
                                    glass.style.backgroundImage = "url('" + img.src + "')";
                                    glass.style.backgroundRepeat = "no-repeat";
                                    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
                                    bw = 3;
                                    w = glass.offsetWidth / 2;
                                    h = glass.offsetHeight / 2;
                                    /*execute a function when someone moves the magnifier glass over the image:*/
                                    glass.addEventListener("mousemove", moveMagnifier);
                                    img.addEventListener("mousemove", moveMagnifier);
                                    glass.addEventListener("mouseleave", removeMagnifier);
                                    /*and also for touch screens:*/
                                    glass.addEventListener("touchmove", moveMagnifier);
                                    img.addEventListener("touchmove", moveMagnifier);
                                    function removeMagnifier(e) {
                                        e.target.style.opacity = "0";
                                    }
                                    function moveMagnifier(e) {
                                        var pos, x, y;
                                        /*prevent any other actions that may occur when moving over the image*/
                                        e.preventDefault();
                                        e.target.style.opacity = "1";
                                        /*get the cursor's x and y positions:*/
                                        pos = getCursorPos(e);
                                        x = pos.x;
                                        y = pos.y;
                                        /*prevent the magnifier glass from being positioned outside the image:*/
                                        if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
                                        if (x < w / zoom) { x = w / zoom; }
                                        if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
                                        if (y < h / zoom) { y = h / zoom; }
                                        /*set the position of the magnifier glass:*/
                                        glass.style.left = (x - w) + "px";
                                        glass.style.top = (y - h) + "px";
                                        /*display what the magnifier glass "sees":*/
                                        glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
                                    }
                                    function getCursorPos(e) {
                                        var a, x = 0, y = 0;
                                        e = e || window.event;
                                        /*get the x and y positions of the image:*/
                                        a = img.getBoundingClientRect();
                                        /*calculate the cursor's x and y coordinates, relative to the image:*/
                                        x = e.pageX - a.left;
                                        y = e.pageY - a.top;
                                        /*consider any page scrolling:*/
                                        x = x - window.pageXOffset;
                                        y = y - window.pageYOffset;
                                        return { x: x, y: y };
                                    }
                                }

                                /*Initiate Magnify Function with the id of the image, and the strength of the magnifier glass:*/
                                magnify("productImg", 1.5);
                            })
                    })
            })
    }, [id]);

    const carouselEffect = (e) => {
        document.getElementById("productImg").src = e.target.src;

        document.getElementsByClassName("img-magnifier-glass")[0].remove();

        function magnify(imgID, zoom) {
            var img, glass, w, h, bw;
            img = document.getElementById(imgID);
            /*create magnifier glass:*/
            glass = document.createElement("DIV");
            glass.setAttribute("class", "img-magnifier-glass");
            /*insert magnifier glass:*/
            img.parentElement.insertBefore(glass, img);
            /*set background properties for the magnifier glass:*/
            glass.style.backgroundImage = "url('" + img.src + "')";
            glass.style.backgroundRepeat = "no-repeat";
            glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
            bw = 3;
            w = glass.offsetWidth / 2;
            h = glass.offsetHeight / 2;
            /*execute a function when someone moves the magnifier glass over the image:*/
            glass.addEventListener("mousemove", moveMagnifier);
            img.addEventListener("mousemove", moveMagnifier);
            glass.addEventListener("mouseleave", removeMagnifier);
            /*and also for touch screens:*/
            glass.addEventListener("touchmove", moveMagnifier);
            img.addEventListener("touchmove", moveMagnifier);
            function removeMagnifier(e) {
                e.target.style.opacity = "0";
            }
            function moveMagnifier(e) {
                var pos, x, y;
                /*prevent any other actions that may occur when moving over the image*/
                e.preventDefault();
                e.target.style.opacity = "1";
                /*get the cursor's x and y positions:*/
                pos = getCursorPos(e);
                x = pos.x;
                y = pos.y;
                /*prevent the magnifier glass from being positioned outside the image:*/
                if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
                if (x < w / zoom) { x = w / zoom; }
                if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
                if (y < h / zoom) { y = h / zoom; }
                /*set the position of the magnifier glass:*/
                glass.style.left = (x - w) + "px";
                glass.style.top = (y - h) + "px";
                /*display what the magnifier glass "sees":*/
                glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
            }
            function getCursorPos(e) {
                var a, x = 0, y = 0;
                e = e || window.event;
                /*get the x and y positions of the image:*/
                a = img.getBoundingClientRect();
                /*calculate the cursor's x and y coordinates, relative to the image:*/
                x = e.pageX - a.left;
                y = e.pageY - a.top;
                /*consider any page scrolling:*/
                x = x - window.pageXOffset;
                y = y - window.pageYOffset;
                return { x: x, y: y };
            }
        }

        /*Initiate Magnify Function with the id of the image, and the strength of the magnifier glass:*/
        magnify("productImg", 1.5);
    }

    return (
        (product && nutrition && relatedProduct) && (
            <div className="container ">
                <Link to="/shop">
                    <SlButton style={{
                        textAlign: 'left !important',
                        marginTop: '1em',
                        marginBottom: '1em',
                    }}>
                        <i className="fa fa-arrow-left" style={{
                            fontSize: '20px',
                            marginRight: '0.5em',
                        }}></i>
                        Back
                    </SlButton>
                </Link>
                <div className="text-center">
                    <div className="productBox">
                        <div className="productInfo">
                            <div className="productImages">
                                <div className="img-magnifier-container mr-3">
                                    <img src={`../${product.images[0]}`} alt={product.flavour} id="productImg" style={{ marginBottom: '1em' }} className="w-100" />
                                </div>
                                <div className="productImgCarosel">
                                    <img src={`../${product.images[0]}`} alt="" className="productCaroselItem" onClick={(e) => carouselEffect(e)} />
                                    <img src={`../${product.images[1]}`} alt="" className="productCaroselItem" onClick={(e) => carouselEffect(e)} />
                                    <img src={`../${product.images[2]}`} alt="" className="productCaroselItem" onClick={(e) => carouselEffect(e)} />
                                    <img src={`../${product.images[3]}`} alt="" className="productCaroselItem" onClick={(e) => carouselEffect(e)} />
                                    <img src={`../${product.images[4]}`} alt="" className="productCaroselItem" onClick={(e) => carouselEffect(e)} style={{ marginRight: 0 }} />
                                </div>
                            </div>
                            <div className="productDesc">
                                <h2>{product.flavour}</h2>
                                <h4>{`${product.size}ml`}</h4>
                                <SlRating readonly value="{product.rating}" className="productRating"></SlRating>
                                <h3>{`£${product.price[0]}`}</h3>
                                <p>{product.description}</p>

                                <div className="productOptions">
                                    <SlButton className="packoption">3 Pack</SlButton>
                                    <SlButton className="packoption">6 Pack</SlButton>
                                    <SlButton>12 Pack</SlButton>
                                </div>
                                <SlButton size="large">Add to Cart</SlButton>

                            </div>
                        </div>
                    </div>
                    <div className="productFacts">
                        <h3>Ingredients</h3>
                        <p>{nutrition.ingredients}</p>
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
                                <h5 className="nutritFact">{`${nutrition.energy[0]}/${nutrition.energy[1]}`}</h5>
                            </div>
                            <div className="nutritInfo">
                                <h5 className="nutritAttribute">Fat</h5>
                                <h5 className="nutritFact">{`${nutrition.fat}g`}</h5>
                            </div>
                            <div className="nutritInfo">
                                <h5 className="nutritAttribute">Carbohydrates</h5>
                                <h5 className="nutritFact">{`${nutrition.carbohydrateTotal}g`}</h5>
                            </div>
                            <div className="nutritInfo">
                                <h5 className="nutritAttribute">~ Sugar</h5>
                                <h5 className="nutritFact">{`${nutrition.carbohydrateSugar[0]}g`}</h5>
                            </div>
                            <div className="nutritInfo">
                                <h5 className="nutritAttribute">Protein</h5>
                                <h5 className="nutritFact">{`${nutrition.protein}g`}</h5>
                            </div><div className="nutritInfo">
                                <h5 className="nutritAttribute">Sodium</h5>
                                <h5 className="nutritFact">{`${nutrition.salt}g`}</h5>
                            </div>

                        </div>
                    </div>

                    <div className="productFacts">
                        <h3 className="mt-5 mb-0">You may Also like</h3>
                        <div className="row mt-0" style={{
                            textAlign: 'initial',
                        }}>
                            {
                                relatedProduct && relatedProduct
                                    .filter((product) => product._id !== id)
                                    .map((product) => (
                                        <div className="product col-12 col-lg-4 mt-0" id={product._id} key={product._id} style={{
                                            padding: '2.5em',
                                        }}>
                                            <div className="splash-image" style={{
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: '200%',
                                                backgroundPosition: 'center',
                                                position: 'absolute',
                                                top: '0',
                                                left: '0',
                                                bottom: '0',
                                                right: '0',
                                                zIndex: '0',
                                                opacity: '0',
                                                transform: 'scale(1.1)',
                                            }}>

                                            </div>
                                            <ProductList product={product} />
                                        </div>
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default ProductDetails;