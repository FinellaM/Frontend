import { useState, useEffect } from "react";
import ProductList from "./ProductList"

const Shop = () => {
    // Constant for storing product list
    const [product, setProduct] = useState(null);

    // Fetch the product list from the backend, and set the splash image for every card
    useEffect(() => {
        fetch('/product')
            .then(res => {
                return res.json();
            })
            .then(data => {
                // console.log(data);
                setProduct(data);
                for (let x in data) {
                    document.getElementsByClassName('splash-image')[x].style.backgroundImage = "url('../" + data[x].splashImage + "')";
                }
            })
    }, []);

    return (
        <div className="container-fluid">
            {/* Header section for the Shop page */}
            <div className="row mt-4 align-items-center">
                <div className="col-6 text-left">
                    <h1>Shop Page</h1>
                </div>
                <div className="col-6 text-right">
                    <a type="button" className="btn btn-light m-3">Find a Stockist</a>
                </div>
                <div className="col-12 p-0">
                    <hr style={{ borderTop: '2px solid #b8b8b8' }} />
                </div>
            </div>
            {/* Product list section */}
            <div className="row align-items-center">
                <div className="col-1 col-lg-2">

                </div>
                <div className="col-10 col-lg-8">
                    <div className="row" style={{
                        textAlign: 'initial',
                    }}>
                        {/* Loop all of the data from the backend and pass it to the Product List component */}
                        {product && product.map((p) => (
                            <div className="product col-12 col-lg-6 mt-3" id={p._id} key={p._id} style={{
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
                                <ProductList product={p} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-1 col-lg-2">

                </div>
            </div>
        </div >
    );
}
// Exporting the component
export default Shop;