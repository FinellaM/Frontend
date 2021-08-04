import { useState, useEffect } from "react";

const Stockist = () => {
    useEffect(() => {
        const gsap = window.gsap;
        gsap.to(".box", {rotation: 27, x: 100, duration: 1});
    }, []);

    return (
        <div className="container-fluid text-center">
            <div className="col-12 text-left" style={{borderBottom: '3px solid black',
            paddingBotton: '0.25em',}}>
                <h1>Our Stockists</h1>
            </div>
            <div className="col-12 text-center box green" style={{ backgroundColor: 'red', height: '100px', }}>
                <h3>Find our products at the following retailers</h3>
                <div className="row row-lg-3 row-md-2 g-3" >
                    <img src="./logo_booths.png" alt="" className="col-lg-4 col-md-6" />
                    <img src="./logo_booths.png" alt="" className="col-lg-4 col-md-6" />
                    <img src="./logo_booths.png" alt="" className="col-lg-4 col-md-6" />
                    <img src="./logo_booths.png" alt="" className="col-lg-4 col-md-6" />
                    <img src="./logo_booths.png" alt="" className="col-lg-4 col-md-6" />
                    <img src="./logo_booths.png" alt="" className="col-lg-4 col-md-6" />
                </div>
            </div>
            <div className="col-12 text-center box orange" style={{ backgroundColor: 'blue', height: '100px', }}>
                <h3>Find our products at the following wholesalers</h3>
                <div className="row row-lg-3 row-md-2 g-2">
                    <img src="./logo_booths.png" alt="" className="col-lg-4 col-md-6" />
                    <img src="./logo_booths.png" alt="" className="col-lg-4 col-md-6" />
                    <img src="./logo_booths.png" alt="" className="col-lg-4 col-md-6" />
                    <img src="./logo_booths.png" alt="" className="col-lg-4 col-md-6" />
                    <img src="./logo_booths.png" alt="" className="col-lg-4 col-md-6" />
                </div>
            </div>
            <div className="col-12 text-center box grey" style={{ backgroundColor: 'white', height: '100px', }}>

                <h3 className="gy-5">Want to stock our product?</h3>
                <br></br>
                <a type="button" className="btn btn-lg mx-auto" href="/contact-us"><h4>Contact Us</h4></a>

            </div>
  
        </div>
    );
}

export default Stockist;