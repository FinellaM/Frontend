import '@shoelace-style/shoelace/dist/themes/base.css';
import SlButton from '@shoelace-style/react/dist/button';
import SlCard from '@shoelace-style/react/dist/card';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [goods, setGoods] = useState([
        {productName:'Peach & Passionfruit', productImg:'./peach_passionfruit_shop.png', price: '4.50', size: '330ml', id: 1},
        {productName:'Rhubarb & Apple', productImg:'./peach_passionfruit_shop.png', price: '4.50', size: '330ml', id: 2},
        {productName:'Peach & Passionfruit', productImg:'./peach_passionfruit_shop.png', price: '4.50', size: '330ml' , id: 3},
        {productName:'Peach & Passionfruit', productImg:'./peach_passionfruit_shop.png', price: '4.50', size: '330ml' , id: 4},
    ]);

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