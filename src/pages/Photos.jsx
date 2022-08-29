import React, { useContext } from "react";
import Image from "../components/Image";
import { getClass } from "../utils/GetClass";
import { Context } from "../Context";

export default function Photos(){
    const {allPhotos} = useContext(Context)
    const photoElements = allPhotos.map((thisPhoto,index )=> (
        <Image key = {thisPhoto.id} className = {getClass(index)} image ={thisPhoto}
            
        />
    ))
    return (
        <main className="photos">
            {photoElements}
        </main>
    )
}