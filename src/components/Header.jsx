import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../Context";

export default function Header(){
    const {cartItems} = useContext(Context)
    const cartClass = cartItems.length > 0 ? "fill" : "line"
    return (
        <header>
            <Link to= "/pic-some/">
                <h2>Pic Some</h2>
            </Link>
            <Link to= "/pic-some/cart">
                <i className={`ri-shopping-cart-${cartClass} ri-fw ri-2x`}></i>
            </Link>
        </header>
    )
}