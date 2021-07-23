const Header = () => {

    const openNav = () => {
        document.getElementById("mySidenav").style.width = "300px";
        document.getElementById("mySidenav").style.boxShadow = "rgb(0 0 0 / 30%) 70px 0px 30px 50px";
    }

    return (
        <header className="mb-0" style={{ backgroundColor: 'white' }}>

            <nav className="navbar navbar-expand-lg bg-green">
                <div className="col-8 col-sm-6 col-md-4">
                    <a className="logo" href="#">
                        <img src="./feelgooddrinks_logo.png" alt="logo" style={{ height: '50px' }} />
                    </a>
                </div>

                <div className="col text-right">
                    <button className="btn">
                        <i className="fa fa-shopping-cart" style={{
                            fontSize: '20px',
                        }}></i>
                    </button>
                    <button className="btn" onClick={openNav}>
                        &#9776;
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;