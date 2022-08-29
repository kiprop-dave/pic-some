import React, { useContext, useState } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types"
import useHover from "../hooks/useHover";


function Image({className,image}){
    const [hovered, nodeRef] = useHover()
    const {handleToggle,addToCart, cartItems, removeItem} = useContext(Context)

    const isFavorite = image.isFavorite ? "fill" : "line"

    function addIcon(){ // This function adds items to the cart and changes the plus to cart
        const isAlreadyInCart = cartItems.some(photo => photo.id === image.id)
        if(isAlreadyInCart){
            return <i className="ri-shopping-cart-fill cart" 
            onClick={() => removeItem(image.id)}></i>
        }else if(hovered){
            return <i className="ri-add-circle-line cart" 
            onClick={() => addToCart(image)}></i>
        }
    }

    
    const heartIcon = hovered && <i className={`ri-heart-${isFavorite} favorite`}
    onClick ={() => handleToggle(image.id)}></i >

    return(
        <div className={`${className} image-container`}
            ref = {nodeRef}
        >
            {addIcon()}
            {heartIcon}    
            <img src={image.url} alt="pic" className="image-grid" />
        </div>
    )
}


// A good practice to add PropTypes to your components
Image.propTypes = {
    className: PropTypes.string,
    image: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image;