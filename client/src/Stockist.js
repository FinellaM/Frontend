import { useState, useEffect } from "react";

const Stockist = () => {
    useEffect(() => {
        const gsap = window.gsap;
        gsap.to(".box", {rotation: 27, x: 100, duration: 1});
    }, []);

    return (
        <div className="container-fluid text-center">
            <div className="col-12 text-left" style={{borderBottom: '3px solid black',
            paddingTop: '2em',
            paddingBotton: '0.25em',}}>
                <h1>Our Stockists</h1>
            </div>
            <div className="row mx-lg-5 align-items-center text-left">
                <div className="col-12 text-center mb-3">
                    <h3 className="my-4">Find our products at the following retailers</h3>
                    <div className="row row-lg-3 row-md-2 g-3" >
                        <img src="./logo_booths.png" alt="" className="col-lg-4 col-md-6 mb-sm-4" />
                        <img src="./logo_booths.png" alt="" className="col-lg-4 col-md-6 mb-sm-4" />
                        <img src="./logo_booths.png" alt="" className="col-lg-4 col-md-6 mb-sm-4" />
                        <img src="./logo_booths.png" alt="" className="col-lg-4 col-md-6" />
                        <img src="./logo_booths.png" alt="" className="col-lg-4 col-md-6" />
                        <img src="./logo_booths.png" alt="" className="col-lg-4 col-md-6" />
                    </div>
                </div>
                <div className="col-12 text-center mb-3">
                    <h3 className="mb-3 mt-5">Find our products at the following wholesalers</h3>
                    <div className="row row-lg-3 row-md-2 g-2">
                        <img src="./logo_bidfood.png" alt="" className="col-lg-4 col-md-6 mb-sm-4" />
                        <img src="./logo_unnu.png" alt="" className="col-lg-4 col-md-6 mb-sm-4" />
                        <img src="./logo_jds.png" alt="" className="col-lg-4 col-md-6 mb-sm-4" />
                        <img src="./logo_diverse.png" alt="" className="col-lg-4 col-md-6" />
                        <img src="./logo_brakes.png" alt="" className="col-lg-4 col-md-6" />
                    </div>
                </div>
                <div className="col-12 text-center mb-5">

                    <h3 className="mb-3 mt-5">Want to stock our product?</h3>
                    <br></br>
                    <a type="button" className="btn btn-lg" href="/contact-us"><h4>Contact Us</h4></a>

                </div>
            </div>
            
            <div className="container text-center" style={{visibility: 'hidden'}}>
                <div class="box green" style={{ backgroundColor: 'red', height: '100px', }}></div>
                <div class="box orange" style={{ backgroundColor: 'blue', height: '100px', }}></div>
                <div class="box grey" style={{ backgroundColor: 'white', height: '100px', }}></div>
            </div>
            
        </div>
        
    );
}

export default Stockist;