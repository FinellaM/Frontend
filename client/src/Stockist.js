import { useState, useEffect } from "react";

const Stockist = () => {
    useEffect(() => {
        const gsap = window.gsap;
        gsap.to(".box", {rotation: 27, x: 100, duration: 1});
    }, []);

    return (
        <div className="container text-center">
            <div class="box green" style={{ backgroundColor: 'red', height: '100px', }}></div>
            <div class="box orange" style={{ backgroundColor: 'blue', height: '100px', }}></div>
            <div class="box grey" style={{ backgroundColor: 'white', height: '100px', }}></div>
        </div>
    );
}

export default Stockist;