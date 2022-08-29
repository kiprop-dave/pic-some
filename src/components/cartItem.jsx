import React, { useContext, useState } from "react";
import PropTypes from "prop-types"
import useHover from "../hooks/useHover";

import {Context} from "../Context"

function CartItem({item}){
    const {removeItem} = useContext(Context)
    const [hover, nodeRef] = useHover()

    const hoverClass = hover ? "fill" : "line" // Changes the icon on hover

    return (
        <div className="cart-item">
            <i className={`ri-delete-bin-${hoverClass}`}
                onClick={() =>removeItem(item.id)}
                ref ={nodeRef}
                ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}
export default CartItem