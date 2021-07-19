import { useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {

    return (
        <div className="container text-center">
            <Link to = "/product-appleRhuharb">Rhubarb & Apple</Link>
            <Link to = "/product-Mixed">Feel Good Mixed pack</Link>
            <Link to = "/product-peachPassionfruit">Peach & Passionfruit</Link>
            <Link to = "/product-raspberryHibiscus">Raspberry & Hibiscus</Link>
        </div>
    );
}
 
export default Shop;