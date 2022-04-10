import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/UseCart';
import useProducts from '../../Hooks/UseProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Orders = () => {
    const[products,setProducts]=useProducts();
    const navigate=useNavigate();
    const[cart,setCart]=useCart(products);
    const handleRemoveroduct=product=>{
        const rest=cart.filter(pd=>pd.id!==product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="review-items-container">
            {
                cart.map(product=><ReviewItem key={product.id} product={product}
                handleRemoveroduct={handleRemoveroduct}
                ></ReviewItem>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={()=>navigate('/shipment')}>Proceed Shipment</button>
                </Cart>
            </div>
            
        </div>
    );
};

export default Orders;