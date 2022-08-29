import React, { useEffect, useState } from "react";

const Context = React.createContext()

function ContextProvider(props){
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(()=>{ // Fetch the images from the github repo
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    },[])
    
    function handleToggle(id){
        setAllPhotos(photoArray => {
            return photoArray.map(photo => {
                if(photo.id === id){
                    return {
                        ...photo,
                        isFavorite: !photo.isFavorite
                    }
                }else{
                    return photo
                }
            })
        })
    }

    function addToCart(newItem){
        setCartItems(prevItems => [newItem, ...prevItems])
    }

    function removeItem(id){ //This function removes an item from the cartItems array
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function emptyCart(){
        setCartItems([])
    }

    return(
        <Context.Provider value={{
            allPhotos, 
            handleToggle, 
            addToCart, 
            cartItems, 
            removeItem,
            emptyCart
        }}>
            {props.children}
        </Context.Provider>
    )
}
export {ContextProvider,Context}