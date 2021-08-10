import { Link } from 'react-router-dom';

const Header = () => {

    const openNav = () => {
        document.getElementById("mySidenav").style.width = "300px";
        document.getElementById("mySidenav").style.boxShadow = "rgb(0 0 0 / 30%) 70px 0px 30px 50px";
    }

    const openCart = () => {
        document.getElementById("myCart").style.width = "300px";
        document.getElementById("myCart").style.boxShadow = "rgb(0 0 0 / 30%) 70px 0px 30px 50px";
    }

    return (
        <header className="mb-0" style={{ backgroundColor: 'white' }}>

            <nav className="navbar navbar-expand-lg bg-green">
                <div className="col-6 col-sm-6 col-md-4">
                    <Link to="/" className="logo">
                        <img src={"../feelgooddrinks_logo.png"} alt="logo" style={{ height: '50px' }} />
                    </Link>
                </div>

                <div className="col text-right">
                    <button className="btn">
                        <i className="fa fa-shopping-cart cart-icon" onClick={openCart} style={{
                            fontSize: '30px', //Size for Cart icon
                        }}></i>
                    </button>
                    <button className="btn nav-icon" onClick={openNav} style={{
                        fontSize: '30px', //Size for Sidenav icon
                    }}>
                        &#9776;
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;