const ProductList = ({ product }) => {

    const showRolloverEffect = (e, id) => {
        if (e.target.previousElementSibling.style && e.target.children[0].style && document.getElementById(id).getElementsByClassName("splash-image")[0].style) {
            e.target.previousElementSibling.style.transform = 'scale(1.3)';
            e.target.children[0].style.opacity = '1';
            document.getElementById(id).getElementsByClassName("splash-image")[0].style.opacity = '1';
        }
    }

    const hideRolloverEffect = (e, id) => {
        if (e.target.previousElementSibling.style && e.target.children[0].style && document.getElementById(id).getElementsByClassName("splash-image")[0].style) {
            e.target.previousElementSibling.style.transform = 'scale(1)';
            e.target.children[0].style.opacity = '0';
            document.getElementById(id).getElementsByClassName("splash-image")[0].style.opacity = '0';
        }
    }

    return (
        <div className="card mt-3" style={{
            boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 20px -5px',
        }}>
            <div className="card-body">
                <div className="row">
                    <div className="col-12 text-center">
                        <div style={{
                            overflow: 'hidden',
                            position: 'relative',
                        }}>
                            <img src={product.image} alt="" className="shop-product-image w-100" />

                            <div className="row overlay w-100 h-100" onMouseEnter={(e) => showRolloverEffect(e, product._id)} onMouseLeave={(e) => hideRolloverEffect(e, product._id)}>
                                <div className="overlay-content text-center">
                                    <div>
                                        <a type="button" className="btn btn-light m-3">Add to Cart</a>
                                    </div>
                                    <div>
                                        <a type="button" className="btn btn-light m-3">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <h4 className="card-text"><strong>{product.flavour}</strong></h4>
                        <h5 className="card-text"><strong>{product.size + 'ml'}</strong></h5>
                        <h4 className="card-text"><strong>{'From $' + product.price}</strong></h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;