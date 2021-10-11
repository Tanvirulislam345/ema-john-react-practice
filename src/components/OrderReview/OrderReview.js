import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderItem from '../OrderItem/OrderItem';
import '../Shop/Shop.css';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }
    const placeOrder = () => {
        history.push('/placeOrder');
        setCart([]);
        clearTheCart();
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <OrderItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></OrderItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={placeOrder} className="btn-regular">Place order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;