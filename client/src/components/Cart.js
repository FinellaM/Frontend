import { Link } from 'react-router-dom';
import SlButton from '@shoelace-style/react/dist/button';

const Cart = ({ cart }) => {

    const closeCart = (e) => {
        e.preventDefault();
        document.getElementById("myCart").style.width = "0";
        document.getElementById("myCart").style.boxShadow = "rgb(0 0 0 / 30%) 70px 0px 30px 50px";
    }

    return (
        <div id="myCart" className="cart">
            <a href="" className="closebtn" onClick={(e) => closeCart(e)}>&times;</a>
            <div className="row">
                <div className="col-12 text-center" style={{
                    padding: '2em',
                }}>
                    {cart.length === 0 && <Link to="/" style={{
                        paddingLeft: '8px',
                    }}>
                        <SlButton style={{
                            width: '100%',
                            textAlign: 'left !important',
                            marginTop: '1em',
                            marginBottom: '1em',
                        }} disabled>
                            <i className="fa fa-shopping-cart" style={{
                                fontSize: '20px',
                                marginRight: '0.5em',
                            }}></i>
                            Cart is empty...
                        </SlButton>
                    </Link>}
                    {cart.length !== 0 && cart.map((c, index) => (
                        <div className="card mt-3" id={c.id + "-" + index} key={c.id + "-" + index} style={{
                            boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 20px -5px',
                        }}>
                            {/* Card's content, storing image, product's name, size and price */}
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <img src={`../${c.thumbnail}`} alt="" className="shop-product-image w-100" />
                                    </div>
                                    <div className="col-12 mt-3">
                                        <h5 className="card-text"><strong>{c.flavour}</strong></h5>
                                        <p className="card-text mb-1">{c.pack + ' Pack'}</p>
                                        <h5 className="card-text"><strong>{'£ ' + c.price}</strong></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {cart.length !== 0 && <Link to="/" style={{
                        paddingLeft: '8px',
                    }}>
                        <SlButton style={{
                            width: '100%',
                            textAlign: 'left !important',
                            marginTop: '1em',
                            marginBottom: '1em',
                        }}>
                            <i className="fa fa-shopping-cart" style={{
                                fontSize: '20px',
                                marginRight: '0.5em',
                            }}></i>
                            Checkout
                        </SlButton>
                    </Link>}
                </div>
            </div>
        </div>
    );
}

export default Cart;