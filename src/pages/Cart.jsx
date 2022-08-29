import React, { useContext, useState } from "react";
import CartItem from "../components/cartItem";

import { Context } from "../Context";

export default function Cart(){
    const {cartItems, emptyCart} = useContext(Context)
    const [ordered, setOrdered] = useState("Place Order")

    const totalPrice = cartItems.length * 5.99
    const totalDisplay = totalPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})

    function handleOrder(){
        setOrdered("Ordering...")
        setTimeout(() =>{
            console.log("Order placed")
            setOrdered("Place Order")
            emptyCart()
        },3000)
    }

    const cartItemElements = cartItems.map(item => (
        <CartItem key ={item.id} item ={item}/>
    ))
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">
                Total: 
                {totalDisplay}</p>
            {
                cartItems.length ? 
                <div className="order-button">
                    <button onClick={handleOrder}>
                        {ordered}
                    </button>
                </div> :
                <p>You have no items in your cart</p>
            }
        </main>
    )
}