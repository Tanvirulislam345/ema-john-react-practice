import React from 'react';

const OrderItem = (props) => {
    const { name, price, quantity, img, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <p>price: {price}</p>
                <p>quantity : {quantity}</p>
                <button className="btn-regular" onClick={() => handleRemove(key)}>remove</button>
            </div>
        </div>
    );
};

export default OrderItem;