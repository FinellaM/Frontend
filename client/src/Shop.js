import '@shoelace-style/shoelace/dist/themes/base.css';
import SlButton from '@shoelace-style/react/dist/button';
import SlCard from '@shoelace-style/react/dist/card';
import { useState } from 'react';

const Shop = () => {
    const [goods, setGoods] = useState([
        {productName:'Peach & Passionfruit', productImg:'./../public/peach_passionfruit_shop.png', price: '4.50', size: '330ml', id: 1},
        {productName:'Peach & Passionfruit', productImg:'./../public/peach_passionfruit_shop.png', price: '4.50', size: '330ml', id: 2},
        {productName:'Peach & Passionfruit', productImg:'./../public/peach_passionfruit_shop.png', price: '4.50', size: '330ml' , id: 3},
        {productName:'Peach & Passionfruit', productImg:'./../public/peach_passionfruit_shop.png', price: '4.50', size: '330ml' , id: 4},
    ]);

    return (
        <div className="container text-center">
            Shop Page
        </div>
    );
}
 
export default Shop;