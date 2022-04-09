import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import {addToDb, getStoredCart} from '../../utilities/fakedb'
import Product from '../Product/Product';
import './Shop.css'
import useProducts from '../../Hooks/UseProducts';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products,setProducts]=useProducts();
    const [cart,setCart]=useState([]);

    useEffect(()=>{
        const storedCart=getStoredCart();
        const savedCart=[]
        for(const id in storedCart){
            const addedProduct=products.find(product=>product.id===id)
            if(addedProduct){
                const quantity=storedCart[id];
                    addedProduct.quantity=quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])
   

    const handleAddtoCart=(selectedProduct)=>{
        console.log(selectedProduct);
        let newCart=[]
        const exist=cart.find(product=>product.id===selectedProduct.id)
        if(!exist){
            selectedProduct.quantity=1;
            newCart=[...cart,selectedProduct]
        }
        else{
            const rest=cart.filter(product=>product.id!==selectedProduct);
            exist.quantity=exist.quantity +1;
            newCart=[...rest,exist];
        }
       
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddtoCart={handleAddtoCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}><Link to='/orders'><button>Review Order</button></Link></Cart>
            </div>
        </div>
    );
};

export default Shop;